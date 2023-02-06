import {useAppReducer} from "../../../hooks/useAppReducer";
import {Dog} from "../Dog/Dog";

const Dogs = () => {

       const [dogs]= useAppReducer(reducers=>reducers.animalReducer)

    return (
        <div>
            {dogs.map(dog=><Dog key={dog.id} dog={dog}/>)}
        </div>
    );
};

export {Dogs};