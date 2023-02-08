import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Car} from "../Car/Car";
import {carActions} from "../../redux";

const Cars = () => {

    const {cars, loading} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(carActions.getAll())
    }, [dispatch])

    return (
        <div>
            {loading && <h2>Loading.......................</h2>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};