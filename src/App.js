import {UserForm} from "./UserForm/UserForm";
import {useEffect, useState} from "react";

import {commentService, userService} from "./services";

import {Users} from "./Users/Users";
import {CommentForm} from "./CommentForm/CommentForm";
import {Comments} from "./Comments/Comments";

const App = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => (setUsers([...data])))
    }, [])

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getComments().then(({data}) => setComments([...data].reverse()))
    }, [])

    return (

        <div className="content">
            <div className="users">
                <UserForm setUsers={setUsers} users={users} users={users}/>
                <Users users={users}/>
            </div>
            <div className="comments">
                <CommentForm setComments={setComments} comments={comments}/>
                <Comments comments={comments}/>
            </div>
        </div>

    );
};

export {App};