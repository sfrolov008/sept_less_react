import {useForm} from "react-hook-form";

import {useAppReducer} from "../../../hooks/useAppReducer";
import {animalActions} from "../../../reducers/animalReducer";

const CatForm = () => {

    const {register, reset, handleSubmit} = useForm();

    const [,dispatch] = useAppReducer(reducers=>reducers.animalReducer);


    const createCat = (cat) => {
        dispatch(animalActions.ADD_CAT(cat))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(createCat)}>
            <input type="text" placeholder={'cat_name'} {...register('name', {required:{value:true}})}/>
            <input type="text" placeholder={'color'} {...register('color')}/>
            <input type="text" placeholder={'age'} {...register('age',{valueAsNumber:true})}/>
            <button>Create</button>
        </form>
    );
};

export {CatForm};