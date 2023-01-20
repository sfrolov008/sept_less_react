const User = ({user, showDetails}) => {
    const {id, name} = user
    return (
        <div>
            <div className='card'>
                {name}
                <button className='btn' onClick={()=>{showDetails(id)}}>Details</button>
            </div>
        </div>
    );
};

export {User};