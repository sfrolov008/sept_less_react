const User = ({user, showPosts}) => {
    const {id, name, username, email} = user;

    const classCard = 'card';
    const classTitle = 'title';
    const classItem = 'item';
    const classBtn = 'btn';

    return (
        <div className={classCard}>
            <h2 className={classTitle} >{name}</h2>
            <div className={classItem}>username: {username}</div>
            <div className={classItem}>{email}</div>
            <button className={classBtn} onClick={()=>{showPosts(id)}}>GetPosts</button>
        </div>
    );
};

export {User};