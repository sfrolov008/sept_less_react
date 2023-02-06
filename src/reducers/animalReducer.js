const animalActionTypes = {
    addCat: 'addCat',
    deleteByIdCat: 'deleteByIdCat',
    addDog: 'addDog',
    deleteByIdDog: 'deleteByIdDog'
}

const animalActions = {
    ADD_CAT: (cat) => ({type: animalActionTypes.addCat, payload: cat}),
    DELETE_BY_ID_CAT: (catId) => ({type: animalActionTypes.deleteByIdCat, payload: catId}),

    ADD_DOG: (dog) => ({type: animalActionTypes.addDog, payload: dog}),
    DELETE_BY_ID_DOG: (dogId) => ({type: animalActionTypes.deleteByIdDog, payload: dogId})
}

const initAnimalState = () => ([]);

const reducerAnimal = (state, action) => {

    switch (action.type) {
        case animalActionTypes.addCat:
            const lastCat = state.slice(-1);
            const catId = lastCat.length ? lastCat[0].id + 1 : 0;
            return [...state, {id:catId, ...action.payload}]

        case animalActionTypes.deleteByIdCat:
            const indexCat = state.findIndex(cat => cat.id === action.payload);
            state.splice(indexCat, 1);
            return [...state]

        case animalActionTypes.addDog:
            const lastDog = state.slice(-1);
            const dogId = lastDog.length ? lastDog[0].id + 1 : 0;
            return [...state, {id:dogId, ...action.payload}]

        case animalActionTypes.deleteByIdDog:
            const indexDog = state.findIndex(dog => dog.id === action.payload);
            state.splice(indexDog, 1);
            return [...state]

        default:
            return [...state]
    }
}

export {
    reducerAnimal,
    animalActions,
    initAnimalState
}