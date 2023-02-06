import {UserForm, Users} from "../../components";
import style from './UsersPage.module.css'

const UsersPage = () => {
    return (
        <div className={style.UsersPage}>
            <UserForm/>
            <Users/>
        </div>
    );
};

export {UsersPage};