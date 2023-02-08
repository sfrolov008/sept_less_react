import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {carActions} from "../../redux";

import {carValidator} from "../../validators/carValidator";

const CarForm = () => {

    const dispatch = useDispatch();
    const {updateCar} = useSelector(state => state.cars);

    const {register, reset, handleSubmit, formState: {isValid}, setValue} = useForm({
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
        if (updateCar) {
            await dispatch((carActions.updateById({id:updateCar.id, newCar})))
        } else {
            await dispatch(carActions.create({newCar}))
        }
        reset()
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button disabled={!isValid}>{updateCar ? 'Update' : 'Create'}</button>
        </form>
    );
};

export {CarForm};