import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {commentService} from "../services";
import {commentValidator} from "../validators";

const CommentForm = ({setComments, comments}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(commentValidator)
    });

    const submitComment = async (comment) => {
        const {data} = await commentService.createComment(comment)
        setComments(comments => [data, ...comments])
        reset()
    }
    return (
        <div>
            <h2>Create new comment</h2>

            <form onSubmit={handleSubmit(submitComment)}>
                <input className="comment_title" type="text" placeholder="comment title" {...register('name')}/>
                {errors.name && <span>{errors.name.message}</span>}

                <textarea className="comment_text" placeholder="comment text" {...register('body')}/>
                {errors.body && <span>{errors.body.message}</span>}
                <button className="btn"  disabled={!isValid}>Send comment</button>
            </form>
        </div>
    );
};

export {CommentForm};