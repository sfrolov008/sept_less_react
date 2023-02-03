import {Component} from "react";

import style from './Comment.module.css'

class Comment extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const{id, name, email, body} = this.props.comment

        return(
            <div className={style.Comment}>
                <div>id. {id}</div>
                <div>name. {name}</div>
                <div>email. {email}</div>
                <div>body. {body}</div>
            </div>
        )
    }
}
export {Comment}