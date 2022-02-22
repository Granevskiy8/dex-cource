import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface UserState {
    user: IUser;
    error: boolean;
    res: {
        name: string,
        avatarUrl: string,
        token: string
    }
}

const initialState: UserState = {
    user: {
        login: '',
        password: ''
    },
    error: false,
    res: {
        name: '',
        avatarUrl: '',
        token: ''

    }
}

export const userInSlice = createSlice({
    name: 'userSignIn',
    initialState,
    reducers: {
        userFetchingSuccess(state, action) {
            state.res = action.payload;
            state.error = false
        },
        userFetchingError(state, action) {
            state.error = true
            state.res = action.payload;
        }
    }
})

export default userInSlice.reducer;