import {FC, useEffect} from "react";
import {carActions} from "../redux";

import {Car} from "./Car";
import {useAppDispatch, useAppSelector} from "../hooks";


const Cars: FC = () => {

const {cars} = useAppSelector(state => state.carReducer);
const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [dispatch])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};