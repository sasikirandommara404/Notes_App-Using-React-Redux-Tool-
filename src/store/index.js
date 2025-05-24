import { configureStore } from "@reduxjs/toolkit";
import NotesReducer from '../slice'

const store = configureStore({
    reducer:{
        notes:NotesReducer
    }
})
export default store