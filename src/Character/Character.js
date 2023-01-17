import '../Style.css'
const Character = ({character}) => {
    const {name, status, species, gender, image} = character;
    const classCard = 'cardRam';
    const classImage = 'imageRam';
    const classList = 'listRam';

    return (
        <div className={classCard}>
            <img className={classImage} src={image} alt={name}/>
            <ul className={classList}>
                <li>name: {name}</li>
                <li>status: {status}</li>
                <li>species: {species}</li>
                <li>gender: {gender}</li>
            </ul>

        </div>
    );
};

export {Character};