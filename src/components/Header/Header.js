import {NavLink} from "react-router-dom";

import style from './Header.module.css'

const Header = () => {

    return (
        <div className={style.Header}>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"users"}>Users</NavLink>
            <NavLink to={"cars"}>Cars</NavLink>
            <NavLink to={"animals"}>Animals</NavLink>
        </div>
    );
};

export {Header};
