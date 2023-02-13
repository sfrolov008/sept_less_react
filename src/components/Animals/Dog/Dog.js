import {useAppReducer} from "../../../hooks/useAppReducer";

import style from './Dog.module.css'
import {dogActions} from "../../../reducers/dogReducer";

const Dog = ({dog}) => {
    
    const {id, name, color, age} = dog;
    const [, dispatch] = useAppReducer(reducers => reducers.dogReducer);

    return (
        <div className={style.Dog}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>color: {color}</div>
            <div>age: {age}</div>
            <button onClick={()=>dispatch(dogActions.DELETE_BY_ID_DOG(id))}>Delete</button>
        </div>
    );
};

export {Dog};