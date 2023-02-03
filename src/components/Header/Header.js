import {Component} from "react";

import {NavLink} from "react-router-dom";

import style from './Header.module.css'

class Header extends Component{


    render() {
        return(
            <div className={style.Header}>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"users"}>Users</NavLink>
                <NavLink to={"posts"}>Posts</NavLink>
                <NavLink to={"comments"}>Comments</NavLink>
            </div>
        )
    }
}
export {Header}