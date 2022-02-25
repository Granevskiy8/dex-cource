import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../modules/authorization/authorizationSlice";


const rootReducer = combineReducers({
    auth: authSlice.reducer,
    
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
export type rootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<rootReducerType>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']