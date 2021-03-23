import axios from "axios";

const api = {
    login(data) {
        return axios.post('Forum_api/Login.php', data).then(res => res)
    },
    register(data) {
        return axios.post('Forum_api/register.php', data).then(res => res)
    },
    getUserInfo(data) {
        return axios.post('Forum_api/getUserInfo.php', data).then(res => res)
    },
    editUserInfo(data){
        return axios.post('Forum_api/editUserInfo.php', data).then(res => res)
    },
    getUserLoginStatus(data) {
        return axios.post('Forum_api/getUserLoginStatus.php', data).then(res => res)
    },
    logOut(data){
        return axios.post('Forum_api/log_out.php', data).then(res => res)
    },
    getPostInfo(data) {
        return axios.post('Forum_api/getPostInfo.php', data).then(res => res)
    },
}

export default api;