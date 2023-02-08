import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";


let initialState = {
    cars: [],
    updateCar:null,
    errors: null,
    loading: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data.reverse()
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const create = createAsyncThunk(
  'carSlice/create',
    async ({newCar}, {rejectedWithValue, dispatch}) =>{
      try {
          const {data} = await carService.create(newCar)
          dispatch(getAll())
      }catch (e) {
          return rejectedWithValue(e.response.data)
      }
    }
);

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id}, {rejectedWithValue, dispatch}) =>{
        try {
            await carService.deleteById(id)
            dispatch(getAll())
        }catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, data}, {rejectedWithValue}) =>{
        try {
            await carService.updateById(id, data)
        }catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setUpdateCar: (state, action) =>{
            state.updateCar = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false
                state.cars = action.payload
            })
            .addCase(getAll.pending, (state, action)=>{
                state.loading = true
            })
});


const {reducer: carReducer, actions:{setUpdateCar}} = carSlice

const carActions = {
    getAll,
    create,
    deleteById,
    updateById,
    setUpdateCar
}

export {
    carReducer,
    carActions
}
