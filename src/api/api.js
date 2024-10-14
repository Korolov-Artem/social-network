import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "587fbc93-429b-492b-aeae-454497e540a9",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 9) {
    return axiosInstance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((users) => users.data);
  },
  followUser(id) {
    return axiosInstance.post(`follow/${id}`).then((user) => user.data);
  },
  unfollowUser(id) {
    return axiosInstance.delete(`follow/${id}`).then((user) => user.data);
  },
};

export const authAPI = {
  setMe() {
    return axiosInstance.get("auth/me").then((user) => user.data)}
}

export const profileAPI = {
  getProfile(userId) {
    return axiosInstance.get(`profile/` + userId).then(profile => profile.data)
  }
}