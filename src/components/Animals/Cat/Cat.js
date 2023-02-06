import {useAppReducer} from "../../../hooks/useAppReducer";

import {animalActions} from "../../../reducers/animalReducer";
import style from './Cat.module.css'

const Cat = ({cat}) => {
    const {id, name, color, age}= cat

    const [, dispatch] = useAppReducer(reducers =>reducers.animalReducer);

    return (
        <div className={style.Cat}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>color: {color}</div>
            <div>age: {age}</div>
            <button onClick={()=>dispatch(animalActions.DELETE_BY_ID_CAT(id))}>Delete</button>
        </div>
    );
};

export {Cat};