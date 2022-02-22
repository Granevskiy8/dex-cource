import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userUpReducer from './reducers/UserUpSlice';
import userInReducer from './reducers/UserInSlice';
import teamsReducer from './reducers/TeamsSlice'

const rootReducer = combineReducers({
    userUpReducer,
    userInReducer,
    teamsReducer
    
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']