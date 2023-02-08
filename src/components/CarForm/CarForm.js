import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import {carValidator} from "../../validators/carValidator";
import {carActions} from "../../redux";
import {useEffect} from "react";

const CarForm = () => {

    const dispatch = useDispatch();
    const {updateCar} = useSelector(state => state.cars);

    const {register, reset, handleSubmit, formState: {isValid, errors}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }
    }, [updateCar])

    const submit = async (newCar) => {
        if(updateCar){
            const {data} = await dispatch((carActions.updateById(updateCar.id, {newCar})))
            if (data){
                dispatch(carActions.getAll(data))
            }
        }else {
            await dispatch(carActions.create({newCar}))
        }
        reset()
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button disabled={!isValid}>{updateCar?'Update':'Create'}</button>
        </form>
    );
};

export {CarForm};