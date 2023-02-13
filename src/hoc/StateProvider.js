import {createContext, useReducer} from "react";

import {initUserState, reducerUser} from "../reducers/userReducer";
import {initCarState, reducerCar} from "../reducers/carReducer";
import {initCatState, reducerCat} from "../reducers/catReducer";
import {initDogState, reducerDog} from "../reducers/dogReducer";

const StateContext = createContext(null);

const StateProvider = ({children}) => {

    const reducers = {
        userReducer: useReducer(reducerUser, null, initUserState),
        carReducer: useReducer( reducerCar,null, initCarState),
        catReducer: useReducer(reducerCat, null, initCatState),
        dogReducer: useReducer(reducerDog, null, initDogState)
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