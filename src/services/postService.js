import {axiosService} from "./axiosSevice";
import {urls} from "../configs";

const postService = {
    getAll: () => axiosService.get(urls.posts),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`)
};

export {
    postService
}