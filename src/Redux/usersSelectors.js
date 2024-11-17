export const getUsersState = (state) => {
    return state.UsersPage.UsersState
}
export const getPageSize = (state) => {
    return state.UsersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.UsersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.UsersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.UsersPage.isFetching
}
export const getFollowingInProgress = (state) => {
    return state.UsersPage.followingInProgress
}
export const getFollowingInProgressUserArray = (state) => {
    return state.UsersPage.followingInProgressUserArray
}