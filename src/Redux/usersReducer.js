import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_PAGE = "SET-PAGE";
const SET_USERS_COUNT = "SET-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING-IN-PROGRESS"

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
        case FOLLOW: {
            return {
                ...state,
                UsersState: state.UsersState.map((user) =>
                    user.id === action.id ? {...user, followed: true} : user
                ),
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                UsersState: state.UsersState.map((user) =>
                    user.id === action.id ? {...user, followed: false} : user
                ),
            };
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
            return {...state,
                followingInProgressUserArray: action.followingInProgress
                ? [...state.followingInProgressUserArray, action.id]
                : state.followingInProgressUserArray.filter(id => id !== action.id)
        }
        }
        default:
            return state;
    }
};

export const followSuccess = (id) => ({type: FOLLOW, id: id});
export const unfollowSuccess= (id) => ({type: UNFOLLOW, id: id});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setPage = (currentPage) => ({
    type: SET_PAGE,
    currentPage: currentPage,
});
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
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then((users) => {
            dispatch(setUsers(users.items))
            dispatch(setUsersCount(users.totalCount))
            dispatch(setPage(currentPage))
            dispatch(toggleIsFetching(false))
        });
    }
}
export const followUser = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id))
        usersAPI.followUser(id).then((user) => {
            if (user.resultCode === 0) {
                dispatch(followSuccess(id))
            }
            dispatch(toggleFollowingInProgress(false, id))
        });
    }
}
export const unfollowUser = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id))
        usersAPI.unfollowUser(id).then((user) => {
            dispatch(toggleFollowingInProgress(false, id))
            if (user.resultCode === 0) {
                dispatch(unfollowSuccess(id))
            }
        });
    }
}

export default usersReducer;
