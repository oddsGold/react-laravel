import axios from "axios";

const instance = axios.create({
    baseURL: 'http://react.local/api/'
});

export const menusApi = {
    getMenu(){
        return instance.get('getMenus')
            .then(response => {
                return response.data
            })
    }
}

export const authApi = {
    authLogin(formData) {
        return instance.post('/api/auth/login', {
            body: JSON.stringify(formData),
            headers: {"Content-Type" : "application/json"}
        })
            .then(response => response.json())
            .then(response => console.log(response))
    }
}
