import style from './Comment.module.css'
import {Link} from "react-router-dom";

const Comment = ({comment}) => {

    const {postId, id, name, email, body} = comment

    return (
        <div className={style.Comment}>
            <div className={style.title}>{id}.{name}</div>
            <div>{email}</div>
            <div>{body}</div>
            <Link to={postId.toString()}>To post </Link>
        </div>
    );
};

export {Comment};