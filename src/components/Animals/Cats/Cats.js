import {useAppReducer} from "../../../hooks/useAppReducer";
import {Cat} from "../Cat/Cat";

const Cats = () => {

    const [cats] = useAppReducer(reducers => reducers.catReducer);

    return (
        <div>
            {cats.map(cat => <Cat key={cat.id} cat={cat}/>)}
        </div>
    );
};

export {Cats};