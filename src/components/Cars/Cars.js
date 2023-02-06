import {useAppReducer} from "../../hooks/useAppReducer";
import {Car} from "../Car/Car";


const Cars = () => {

    const [cars] = useAppReducer(reducers => reducers.carReducer)
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};