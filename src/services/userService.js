import {axiosService} from "./axiosServise";
import {urls} from "../config";

const userService = {
    getAll:() => axiosService.get(urls.users),
    create:(data) => axiosService.post(urls.users, data)
}

export {userService}