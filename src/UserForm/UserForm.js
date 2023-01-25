import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {userService} from "../services";
import {userValidator} from "../validators";

const UserForm = ({setUsers, users}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        mode: "all",
        resolver: joiResolver(userValidator)
    });

    const submitNewUser = async (user) => {

        const {data} = await userService.create(user)
        setUsers((prev) => ([...prev, data]))
        reset()
    }

    return (
        <div>
            <h2>Create new user</h2>

            <form onSubmit={handleSubmit(submitNewUser)}>
                <input className="username" type="text" placeholder='username' {...register('name')}/>
                {errors.name && <span>{errors.name.message}</span>}

                <button className="btn" disabled={!isValid}>Create</button>
            </form>
        </div>
    );
};

export {UserForm};