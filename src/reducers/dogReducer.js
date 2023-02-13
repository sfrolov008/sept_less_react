const dogActionTypes = {
    addDog: 'addDog',
    deleteByIdDog: 'deleteByIdDog'
}

const dogActions = {
    ADD_DOG: (dog) => ({type: dogActionTypes.addDog, payload: dog}),
    DELETE_BY_ID_DOG: (dogId) => ({type: dogActionTypes.deleteByIdDog, payload: dogId})
}

const initDogState = () => ([]);

const reducerDog = (state, action) => {

    switch (action.type) {
        case dogActionTypes.addDog:
            const lastDog = state.slice(-1);
            const dogId = lastDog.length ? lastDog[0].id + 1 : 1;
            return [...state, {id:dogId, ...action.payload}]

        case dogActionTypes.deleteByIdDog:
            const indexDog = state.findIndex(dog => dog.id === action.payload);
            state.splice(indexDog, 1);
            return [...state]

        default:
            return [...state]
    }
}

export {
    reducerDog,
    dogActions,
    initDogState
}