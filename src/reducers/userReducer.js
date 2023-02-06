const userActionTypes = {
    add: 'add',
    deleteById: 'deleteById'
}

const userActions = {
    ADD: (user) => ({type: userActionTypes.add, payload: user}),
    DELETE_BY_ID: (id) => ({type: userActionTypes.deleteById, payload: id})

}

const initUserState = () => ([])

const reducerUser = (state, action) => {
    switch (action.type) {
        case userActionTypes.add:
            const lastItem = state.slice(-1);
            const id = lastItem.length ? lastItem[0].id + 1 : 0;
            return [...state, {id, ...action.payload}]

        case userActionTypes.deleteById:
            const index = state.findIndex(value => value.id === action.payload);
            state.splice(index, 1);
            return [...state]
        default:
            return [...state]
    }
}

export {
    reducerUser,
    userActions,
    initUserState
}