import {useDispatch} from "react-redux";
import {postActions} from "../../redux";

const Post = ({post}) => {
    const {id, title} = post

    const dispatch = useDispatch();

    return (
        <div>
            <div>{id}. {title}</div>
            <button onClick={()=>dispatch(postActions.setSelectedPost(post))}>select</button>
            <button onClick={()=>dispatch(postActions.getById({id}))}>apiSelect</button>
        </div>
    );
};

export {Post};