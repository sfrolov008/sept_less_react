const Details = ({dettails, showPosts}) => {

    const {id, name, username, email, address, phone, website, company} = dettails;
    const {street, suite, city, zipcode, geo} = dettails.address;
    const {lat, lng} = dettails.address.geo;
    const {name:companyName, catchPhrase, bs} = dettails.company;


    return (<div className='cardDet'>
        <ul>
            <li>id: {id}</li>
            <li>name: {name}</li>
            <li>username: {username}</li>
            <li>email: {email}</li>
            <li>
                address:
                <ul>
                    <li>street: {street}</li>
                    <li>suite: {suite}</li>
                    <li>city: {city}</li>
                    <li>zipcode: {zipcode}</li>
                    <li>
                        geo:
                        <ul>
                            <li>lat: {lat}</li>
                            <li>lng: {lng}</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>phone: {phone}</li>
            <li>website: {website}</li>
            <li>
                company:
                <ul>
                    <li>name: {companyName}</li>
                    <li>catchPhrase: {catchPhrase}</li>
                    <li>bs: {bs}</li>
                </ul>
            </li>
        </ul>
        <button className='btn' onClick={() => {
            showPosts(id)
        }}>Show Posts
        </button>


    </div>);
};

export {Details};