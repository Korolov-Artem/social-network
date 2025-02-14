const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ContactsType = {
    github: string
    website: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ToggleIsFetschingType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};
export type UserType = {
    id: number;
    name: string;
    status: string
    photos: PhotosType
    followed: boolean
}