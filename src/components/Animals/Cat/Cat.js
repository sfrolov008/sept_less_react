import {useAppReducer} from "../../../hooks/useAppReducer";

import style from './Cat.module.css'
import {catActions} from "../../../reducers/catReducer";

const Cat = ({cat}) => {
    const {id, name, color, age}= cat

    const [, dispatch] = useAppReducer(reducers =>reducers.catReducer);

    return (
        <div className={style.Cat}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>color: {color}</div>
            <div>age: {age}</div>
            <button onClick={()=>dispatch(catActions.DELETE_BY_ID_CAT(id))}>Delete</button>
        </div>
    );
};

export {Cat};