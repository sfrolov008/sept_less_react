import {Component} from "react";

import {usersService} from "../../services";

import {User} from "../User/User";
import style from './Users.module.css'

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []}
    }
    componentDidMount() {
        usersService.getAll().then(({data}) => this.setState({users:[...data]}))
    }

    render() {
        return(
            <div className={style.Users}>
                {this.state.users.map(user => <User key={user.id} user={user}/>)}
            </div>
        )
   }
}
export {Users}