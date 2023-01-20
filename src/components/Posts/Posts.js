const Posts = ({post}) => {
    const {title, body} = post
    return (
        <div className='cardPost'>
            <h2>{title}</h2>
            <div>{body}</div>
        </div>
    );
};

export {Posts};