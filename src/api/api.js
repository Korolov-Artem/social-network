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
        return axiosInstance.get("auth/me").then((user) => user.data)
    },
    login(email, password, rememberMe = false) {
        return axiosInstance.post("auth/login", {email, password, rememberMe}).then((user) => user.data)
    },
    logout() {
        return axiosInstance.delete("auth/login")
    },
}

export const profileAPI = {
    getProfile(userId) {
        return axiosInstance.get(`profile/` + userId).then(profile => profile.data)
    },
    getStatus(userId) {
        return axiosInstance.get("profile/status/" + userId);
    },
    setStatus(status) {
        return axiosInstance.put("profile/status/", {status}).then((status) => status.data);
    },
    setPhoto(file) {
        const formData = new FormData();
        formData.append("image", file)
        return axiosInstance.put("profile/photo/", formData, {
            headers: {"Content-Type": "multipart/form-data"}
        }).then((photos) => photos.data)
    },
    setProfile(profile) {
        return axiosInstance.put(`profile`, profile)
    },
}