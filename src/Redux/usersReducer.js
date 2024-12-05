import {usersAPI} from "../api/api";

const CHANGE_FOLLOW_STATUS = "users/CHANGE-FOLLOW-STATUS"
const SET_USERS = "users/SET-USERS";
const SET_PAGE = "users/SET-PAGE";
const SET_USERS_COUNT = "users/SET-USERS-COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE-IS-FETCHING";
const FOLLOWING_IN_PROGRESS = "users/FOLLOWING-IN-PROGRESS"

let initialState = {
    UsersState: [],
    pageSize: 9,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false,
    followingInProgressUserArray: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FOLLOW_STATUS: {
            return {
                ...state,
                UsersState: state.UsersState.map((user) =>
                    user.id === action.id ? {...user, followed: !user.followed} : user
                ),
            }
        }
        case SET_USERS: {
            return {...state, UsersState: action.users};
        }
        case SET_PAGE: {
            return {...state, currentPage: action.currentPage};
        }
        case SET_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount};
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching};
        }
        case FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgressUserArray: action.followingInProgress
                    ? [...state.followingInProgressUserArray, action.id]
                    : state.followingInProgressUserArray.filter(id => id !== action.id)
            }
        }
        default:
            return state;
    }
};

export const followSuccess = (id) => ({type: CHANGE_FOLLOW_STATUS, id: id});
export const unfollowSuccess = (id) => ({type: CHANGE_FOLLOW_STATUS, id: id});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setPage = (currentPage) => ({
    type: SET_PAGE,
    currentPage: currentPage,
});
export const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgress(true, id))
    let user = await apiMethod(id)
    if (user.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleFollowingInProgress(false, id))
}

export const setUsersCount = (totalUsersCount) => ({
    type: SET_USERS_COUNT,
    totalUsersCount: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching,
});
export const toggleFollowingInProgress = (followingInProgress, id) => ({
    type: FOLLOWING_IN_PROGRESS,
    followingInProgress: followingInProgress,
    id: id,
})
export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let users = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(users.items))
        dispatch(setUsersCount(users.totalCount))
        dispatch(setPage(currentPage))
        dispatch(toggleIsFetching(false))
    }
}
export const followUser = (id) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, id, usersAPI.followUser.bind(usersAPI), followSuccess)
    }
}
export const unfollowUser = (id) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, id, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess)
    }
}

export default usersReducer;
