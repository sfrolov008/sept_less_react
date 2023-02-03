import {Component} from "react";

import style from './User.module.css'


class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            id, name, username, email,
            address: {
                street, suite, city, zipcode,
                geo: {lat, lng}
            }, phone, website,
            company: {name: companyName, catchPhrase, bs}
        } = this.props.user

        return (
            <div className={style.User}>
                <ul>
                    <li>id: {id}</li>
                    <li>name: {name}</li>
                    <li>username: {username}</li>
                    <li>email: {email}</li>
                    <li>address:
                        <ul>
                            <li>street: {street}</li>
                            <li>suite: {suite}</li>
                            <li>city: {city}</li>
                            <li>zipcode: {zipcode}</li>
                            <li>geo:
                                <ul>
                                    <li>lat: {lat}</li>
                                    <li>lng: {lng}</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>phone: {phone}</li>
                    <li>website: {website}</li>
                    <li>company:
                        <ul>
                            <li>companyName: {companyName}</li>
                            <li>catchPhrase: {catchPhrase}</li>
                            <li>bs: {bs}</li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export {User}