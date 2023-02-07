import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../redux";

import {User} from "../User/User";

const Users = () => {

    const dispatch = useDispatch();
    const {users, errors, loading} = useSelector(state => state.users);

    useEffect(() => {
        dispatch(userActions.getAll())
    }, [])

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {errors && JSON.stringify(errors)}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};