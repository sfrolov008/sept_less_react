import {carService} from "../../services";
const Car = ({car, setUpdateCar, setCars}) => {
    const {id, brand, price, year} = car

    const deleteCar = async (id) =>{
        await carService.deleteById(id)
        const {data} = await carService.getAll()
        setCars(data)
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <a href="#form">
            <button onClick={() => setUpdateCar(car)}>update</button>
            </a>
            <button onClick={() =>deleteCar(id)}>delete</button>
        </div>
    );
};

export {Car};