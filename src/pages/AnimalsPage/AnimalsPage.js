import {CatForm, Cats, DogForm, Dogs,} from "../../components";

import style from './AnimalsPage.module.css'



const AnimalsPage = () => {
    return (
        <div className={style.Animals_Page}>
            <div className={style.Animal_Page}>
                <CatForm/>
                <Cats/>
            </div>

            <div className={style.Animal_Page}>
                <DogForm/>
                <Dogs/>
            </div>
        </div>
    );
};

export {AnimalsPage};