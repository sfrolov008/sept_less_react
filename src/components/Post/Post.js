import {useParams} from "react-router-dom"
    ;
import {useEffect, useState} from "react";
import {postService} from "../../services";
import style from './Post.module.css'


const Post = () => {
    const {postId} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        postService.getById(postId).then(({data}) => setPost(data))
    }, [])

    return (
        <div className={style.Post}>
            {
                post &&
                <div>
                    <div>{post.id}. {post.title}</div>
                    <div>{post.body}</div>
                </div>
            }
        </div>
    );
};

export {Post};