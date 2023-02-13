import {useForm} from "react-hook-form";

import {useAppReducer} from "../../../hooks/useAppReducer";
import {dogActions} from "../../../reducers/dogReducer";

const DogForm = () => {

    const {register, reset, handleSubmit} = useForm();

    const [,dispatch] = useAppReducer(reducers=> reducers.dogReducer);


    const createDog = (dog) => {
        dispatch(dogActions.ADD_DOG(dog))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(createDog)}>
            <input type="text" placeholder={'dog_name'} {...register('name', {required:{value:true}})}/>
            <input type="text" placeholder={'color'} {...register('color')}/>
            <input type="text" placeholder={'age'} {...register('age',{valueAsNumber:true})}/>
            <button>Create</button>
        </form>
    );
};

export {DogForm};