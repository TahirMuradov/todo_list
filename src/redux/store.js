import { configureStore } from '@reduxjs/toolkit'
import todolistSlice from './todolistSlice'

const store= configureStore({
reducer:{
    todoList:todolistSlice,
}
})
export default store;