const catActionTypes = {
    addCat: 'addCat',
    deleteByIdCat: 'deleteByIdCat',
}

const catActions = {
    ADD_CAT: (cat) => ({type: catActionTypes.addCat, payload: cat}),
    DELETE_BY_ID_CAT: (catId) => ({type: catActionTypes.deleteByIdCat, payload: catId}),
}

const initCatState = () => ([]);

const reducerCat = (state, action) => {

    switch (action.type) {
        case catActionTypes.addCat:
            const lastCat = state.slice(-1);
            const catId = lastCat.length ? lastCat[0].id + 1 : 1;
            return [...state, {id:catId, ...action.payload}]

        case catActionTypes.deleteByIdCat:
            const indexCat = state.findIndex(cat => cat.id === action.payload);
            state.splice(indexCat, 1);
            return [...state]
        default:
            return [...state]
    }
}

export {
    reducerCat,
    catActions,
    initCatState
}