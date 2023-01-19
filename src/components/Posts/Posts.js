const Posts = ({post}) => {
    const {title, body} = post;

    const classCardPost = 'cardPost';
    const classTitlePost = 'titlePost';
    const classBodyPost = 'bodyPost';

    return (
        <div className={classCardPost}>
            <h2 className={classTitlePost}>{title}</h2>
            <div className={classBodyPost}>{body}</div>
        </div>
    );
};

export {Posts};