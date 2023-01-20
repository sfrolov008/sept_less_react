import {useEffect, useState} from "react";

import {User} from "../User/User";
import {Details} from "../Details/Details";
import {Posts} from "../Posts/Posts";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [details, setDetails] = useState(null);

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(value => setUsers(value))
    }, [])

    const showDetails = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(value => value.json()).then(value => setDetails(value))
    }

    const showPosts = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(value => value.json()).then(value => setPosts(value))
    }

    return (
        <div className='content'>
            <div className='users_details'>
                <div className='users'>
                    {users.map(user => <User key={user.id} user={user} showDetails={showDetails}/>)}
                </div>
                <div className='details'>
                    {details && <Details dettails={details} showPosts={showPosts}/>}
                </div>
            </div>
            <div className='posts'>
                {posts && posts.map(post => <Posts key={post.id} post={post}/>)}
                <button className='btn' onClick={()=>{showPosts(null)}}>Close</button>
            </div>
        </div>
    );
};

export {Users};