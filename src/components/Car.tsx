import {FC} from "react";

import {ICar} from "../interfaces";
import {useNavigate} from "react-router-dom";

export interface IProps {
    car: ICar
}

const Car: FC<IProps> = ({car}) => {
    const {id, brand, year, price} = car
    const navigate = useNavigate();

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => navigate(`${id}`, {state:car})}>Details</button>
            <div>-------------</div>
        </div>
    );
};

export {Car};