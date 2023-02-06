import {CarForm, Cars} from "../../components";
import style from './CarsPage.module.css'

const CarsPage = () => {
    return (
        <div className={style.CarsPage}>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export {CarsPage};