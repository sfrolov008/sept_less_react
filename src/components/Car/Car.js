import {useAppReducer} from "../../hooks/useAppReducer";
import {carActions} from "../../reducers/carReducer";
import style from './Car.module.css'

const Car = ({car}) => {
    const { id, brand, year, price} = car
    const [, dispatch] = useAppReducer(reducers => reducers.carReducer)

    return (
        <div className={style.Car}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <button onClick={()=>dispatch(carActions.DELETE_BY_ID(id))}>Delete</button>
        </div>
    );
};

export {Car};