import '../Style.css'
const Simpson = ({simpson}) => {
    const {name, image, descript} = simpson;
    const classCard = 'card'
    const classTitle = 'title'
    const classImage = 'image'
    const classDesc = 'desc'
    return (
        <div className={classCard}>
            <div className={classTitle}>{name}</div>
            <img className={classImage} src={image} alt={name}/>
            <div className={classDesc}>{descript}</div>
        </div>
    );
};

export {Simpson};