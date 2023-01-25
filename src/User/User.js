const User = ({user}) => {

    const {id, name} = user

    return (
        <div>
            <div>{id}. {name}</div>
        </div>
    );
};

export {User};