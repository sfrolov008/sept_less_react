import {axiosService} from "./axiosSevice";

const userService = {
    getAll: () => axiosService.get('/users'),
    getPosts: (id) =>axiosService.get(`/users/${id}/posts`)
}

export {userService}