import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface UserState {
    user: IUser;
    error: string;
}

const initialState: UserState = {
    user: {
        userName: '',
        login: '',
        password: ''
    },
    error: '',
}

export const userUpSlice = createSlice({
    name: 'userSignUp',
    initialState,
    reducers: {
        userFetchingSuccess(state, action: PayloadAction<IUser>) {
            state.error = '';
            state.user = action.payload;
        },
        userFetchingError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        }
    }
})

export default userUpSlice.reducer;