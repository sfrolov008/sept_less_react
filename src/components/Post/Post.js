import {Component} from "react";

import style from './Post.module.css'

class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {id, userId, title, body}= this.props.post

        return(
            <div className={style.Post}>
                <div>id. {id}</div>
                <div>userId. {userId}</div>
                <div>title. {title}</div>
                <div>body. {body}</div>
            </div>
        )
    }
}
export {Post}