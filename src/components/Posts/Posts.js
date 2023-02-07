import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";


import {Post} from "../Post/Post";
import {postActions} from "../../redux";

const Posts = () => {

    const dispatch = useDispatch();
    const {posts, loading, errors} = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(postActions.getAll())
    }, [])

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {errors && JSON.stringify(errors)}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};