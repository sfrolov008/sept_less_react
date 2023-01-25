const Comment = ({comment}) => {

    const {id, name, body}= comment

    return (
        <div className="comment">
            <div>{id}. {name}</div>
            <div>{body}</div>
        </div>
    );
};

export {Comment};