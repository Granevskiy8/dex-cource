import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthorization, ILoginRequest, IRegistrationRequest } from "../../api/dto/IAuthorization";
import { auth } from "../../api/requests/authorizationAPI";


export const setLoginThunk = createAsyncThunk<IAuthorization, ILoginRequest>(
    'SignIn',
    ({login, password}) => {
        return auth.login({login, password});
    }
);

export const setRegisterThunk = createAsyncThunk<IAuthorization, IRegistrationRequest>(
    'SignUp',
    ({userName, login, password}) => {
        return auth.register({userName, login, password});
    }
);