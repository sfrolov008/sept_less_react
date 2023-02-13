import {useForm} from "react-hook-form";

import {useAppReducer} from "../../../hooks/useAppReducer";

import {catActions} from "../../../reducers/catReducer";

const CatForm = () => {

    const {register, reset, handleSubmit} = useForm();

    const [,dispatch] = useAppReducer(reducers=>reducers.catReducer);


    const createCat = (cat) => {
        dispatch(catActions.ADD_CAT(cat))
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