const carActionTypes = {
    add: 'add',
    deleteById: 'deleteById'
}

const carActions = {
    ADD: (car) => ({type: carActionTypes.add, payload: car}),
    DELETE_BY_ID: (id) => ({type: carActionTypes.deleteById, payload: id})
}

const initCarState = () => ([])

const reducerCar = (state, action) => {
    switch (action.type) {
        case carActionTypes.add:
            const lastItem = state.slice(-1);
            const id = lastItem.length ? lastItem[0].id + 1 : 0;
            return [...state, {id, ...action.payload}]

        case carActionTypes.deleteById:
            const index = state.findIndex(value => value.id === action.payload);
            state.splice(index, 1);
            return [...state]
        default:
            return [...state]
    }
}

export {
    reducerCar,
    carActions,
    initCarState
}