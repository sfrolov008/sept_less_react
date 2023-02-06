import {createContext, useReducer} from "react";

import {initUserState, reducerUser} from "../reducers/userReducer";
import {initCarState, reducerCar} from "../reducers/carReducer";
import {initAnimalState, reducerAnimal} from "../reducers/animalReducer";

const StateContext = createContext(null);

const StateProvider = ({children}) => {

    const reducers = {
        userReducer: useReducer(reducerUser, null, initUserState),
        carReducer: useReducer( reducerCar,null, initCarState),
        animalReducer: useReducer(reducerAnimal, null,initAnimalState)
    }

    return (
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    );
};

export {
    StateProvider,
    StateContext
};