import style from './Album.module.css'

const Album = ({album}) => {

    const {id, title}= album

    return (
        <div className={style.Album}>
            <div>{id}. {title} </div>
        </div>
    );
};

export {Album};