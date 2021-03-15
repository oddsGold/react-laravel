import axios from "axios";
import cookie from "js-cookie";

const instance = axios.create({
    baseURL: 'http://react.local/api/',
    headers: {
        Authorization: `Bearer ${cookie.get("token")}`
    }
});

export const menusApi = {
    getMenu() {
        return instance.get('getMenus')
            .then(response => {
                return response.data
            })
    }
}

export const authApi = {
    authLogin(email, password) {
        return instance.post('auth/login', {email, password})
            .then(response => {
                return response.data
            })
            .catch(response => {
                return {errors: response.response.data}
            })
    },

    authRegister(registerData) {
        return instance.post('auth/register', registerData)
            .then(response => {
                return response
            })
            .catch(response => {
                return {errors: response.response.data}
            })
    },
    getUser() {
        return instance.post('auth/me')
            .then(response => {
                return response
            })
            .catch(response => {
                return response;
            })
    },
    logout(){
        return instance.post(`/logout`)
    },
    setToken(token){
        instance.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export const usersApi = {
    getUsers(pageNumber, pageSize){
        return instance.get(`getUsers/list?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    getUserProfile(id){
        return instance.get(`user/profile/`+id)
            .then(response => {
                return response.data
            })
    },

    updateUser(updateData) {
        return instance.patch(`auth/update`, updateData)
            .then(response => {
                return response.data
            })
            .catch(response => {
                return {errors: response.response.data}
            })
    },

    uploadImage(updateData) {
        let formData = new FormData();

        Object.keys(updateData).forEach(function (key) {
            formData.append(key, updateData[key]);
        })

        return instance.post('auth/image/upload', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(response => {
            return response.data
        })
            .catch(response => {
                return {errors: response.response.data}
            })
    },

    deleteUser(id){
        return instance.delete(`user/profile/delete/`+id)
            .then(response => {
                return response.data
            })
            .catch(response => {
                return {errors: response.response.data}
            })
    }
}

export const newsApi = {

    getNews(pageNumber,pageSize) {
        return instance.get(`news?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    getCurrentNews(id) {
        return instance.get(`news/current/`+id)
            .then(response => {
                return response.data
            })
    },

    updateNews(updateData) {
        return instance.patch(`update`, updateData)
            .then(response => {
                return response.data
            })
            .catch(response => {
                return {errors: response.response.data}
            })
    },

}
