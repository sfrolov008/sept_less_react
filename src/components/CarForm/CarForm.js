import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator";
import {carService} from "../../services";
import {useEffect} from "react";

const CarForm = ({setCars, updateCar}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all', resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }
    }, [updateCar])

    const submit = async (car) => {

        if (updateCar) {
        const {data} = await carService.updateById(updateCar.id, car);
            if (data){
                const {data} = await carService.getAll()
                setCars(data)
            }
        } else {
            const {data} = await carService.create(car);
            setCars(prev => [...prev, data])
        }
            reset()
    };

    return (
        <form id="form" onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder={'brand'} {...register('brand')}/>
        {errors.brand && <span>{errors.brand.message}</span>}

        <input type="text" placeholder={'price'} {...register('price')}/>
        {errors.price && <span>{errors.price.message}</span>}

        <input type="text" placeholder={'year'} {...register('year')}/>
        {errors.year && <span>{errors.year.message}</span>}

        <button disabled={!isValid}>{updateCar ? 'Update' : 'Create'}</button>
    </form>);
};

export {CarForm};