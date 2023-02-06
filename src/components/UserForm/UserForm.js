import {useForm} from "react-hook-form";

import {useAppReducer} from "../../hooks/useAppReducer";
import {userActions} from "../../reducers/userReducer";

const UserForm = () => {

    const {register, reset, handleSubmit} = useForm();
    const [, dispatch] = useAppReducer(reducers => reducers.userReducer)

    const create = (user) => {
        dispatch(userActions.ADD(user));
        reset()
    };

    return (
        <form onSubmit={handleSubmit(create)}>
            <input type="text" placeholder={'name'} {...register('name', {required:{value:true}})}/>
            <input type="text" placeholder={'gender'} {...register('gender')}/>
            <input type="text" placeholder={'status'} {...register('status')}/>
            <button>Create</button>
        </form>
    );
};

export {UserForm};