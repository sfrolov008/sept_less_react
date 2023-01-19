import {useEffect, useState} from "react";

import {userService} from "../../services/userService";
import {User} from "../User/User";
import {Posts} from "../Posts/Posts";


const Users = () => {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers([...value]))
    }, []);

    const showPosts = (id) => {
        userService.getPosts(id).then(value => setPosts(value.data));
    };

    return (

        <div className={'content'}>
            <div className={'users'}>
                {users.map(user => <User key={user.id} user={user} showPosts={showPosts}/>)}
            </div>

            <div className={'posts'}>
                {posts && posts.map(post => <Posts key={post.id} post={post}/>)}
            </div>
            <hr/>
        </div>);
};
export {Users};