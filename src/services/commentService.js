import {axiosService} from "./axiosServise";
import {urls} from "../config";

const commentService = {
    getComments:() => axiosService.get(urls.comments),
    createComment:(data) => axiosService.post(urls.comments, data)
}
export {commentService}