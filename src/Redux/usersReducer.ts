import {usersAPI} from "../api/api";
import { PhotosType, ToggleIsFetschingType, UserType } from "./Types/Types";


const CHANGE_FOLLOW_STATUS = "users/CHANGE-FOLLOW-STATUS"
const SET_USERS = "users/SET-USERS";
const SET_PAGE = "users/SET-PAGE";
const SET_USERS_COUNT = "users/SET-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const FOLLOWING_IN_PROGRESS = "users/FOLLOWING-IN-PROGRESS"


let initialState = {
    UsersState: [] as Array<UserType>,
    pageSize: 9 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: false as boolean,
    followingInProgress: false as boolean,
    followingInProgressUserArray: [] as Array<number>, //array of userId
};
type InitialStateType = typeof initialState


const usersReducer = (state = initialState, action):InitialStateType => {
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

type FollowChangeSuccessActionType = {
    type: typeof CHANGE_FOLLOW_STATUS
    id: number
}
export const followSuccess = (id:number):FollowChangeSuccessActionType => ({type: CHANGE_FOLLOW_STATUS, id: id});
export const unfollowSuccess = (id:number):FollowChangeSuccessActionType => ({type: CHANGE_FOLLOW_STATUS, id: id});
type SetUsersActionType = {
    type: typeof SET_USERS
    users:Array<UserType>
}
export const setUsers = (users:Array<UserType>):SetUsersActionType => ({type: SET_USERS, users: users});
type SetPageActionType = {
    type: typeof SET_PAGE
    currentPage: number
}
export const setPage = (currentPage:number):SetPageActionType => ({
    type: SET_PAGE,
    currentPage: currentPage,
});
type SetUserCountActionType = {
    type: typeof SET_USERS_COUNT
    totalUsersCount: number
}
export const setUsersCount = (totalUsersCount:number):SetUserCountActionType => ({
    type: SET_USERS_COUNT,
    totalUsersCount: totalUsersCount,
});
export const toggleIsFetching = (isFetching:boolean):ToggleIsFetschingType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching,
});
type ToggleFollowingInProgress = {
    type: typeof FOLLOWING_IN_PROGRESS
    followingInProgress: boolean
    id: number
}
export const toggleFollowingInProgress = (followingInProgress:boolean, id:number):ToggleFollowingInProgress => ({
    type: FOLLOWING_IN_PROGRESS,
    followingInProgress: followingInProgress,
    id: id,
})



export const followUnfollowFlow = async (dispatch, id:number, apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgress(true, id))
    let user = await apiMethod(id)
    if (user.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleFollowingInProgress(false, id))
}
export const getUsers = (currentPage:number, pageSize:number) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let users = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(users.items))
        dispatch(setUsersCount(users.totalCount))
        dispatch(setPage(currentPage))
        dispatch(toggleIsFetching(false))
    }
}
export const followUser = (id:number) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, id, usersAPI.followUser.bind(usersAPI), followSuccess)
    }
}
export const unfollowUser = (id:number) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, id, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess)
    }
}


export default usersReducer;
