import {useAppReducer} from "../../hooks/useAppReducer";
import {userActions} from "../../reducers/userReducer";
import style from './User.module.css'

const User = ({user}) => {
    const { id, name, gender, status} = user
    const [, dispatch] = useAppReducer(reducers => reducers.userReducer)

    return (
        <div className={style.User}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>gender: {gender}</div>
            <div>status: {status}</div>
            <button onClick={()=>dispatch(userActions.DELETE_BY_ID(id))}>Delete</button>
        </div>
    );
};

export {User};