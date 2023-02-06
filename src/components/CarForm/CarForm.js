import {useForm} from "react-hook-form";

import {useAppReducer} from "../../hooks/useAppReducer";
import {carActions} from "../../reducers/carReducer";

const CarForm = () => {

    const {register, handleSubmit, reset} = useForm();
    const [, dispatch] = useAppReducer(reducers => reducers.carReducer)

    const create = (car) => {
        dispatch(carActions.ADD(car));
        reset()
    };

    return (
        <form onSubmit={handleSubmit(create)}>
            <input type="text" placeholder={'brand'} {...register('brand', {required:{value:true}})}/>
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            <input type="text" placeholder={'price'} {...register('price',  {valueAsNumber: true})}/>
            <button>Create</button>
        </form>
    );
};

export {CarForm};