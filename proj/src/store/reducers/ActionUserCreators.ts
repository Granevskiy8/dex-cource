import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";
import { userInSlice } from "./UserInSlice";
import { userUpSlice } from "./UserUpSlice";

export const fetchUpUser = ({userName, login, password}: IUser) => async (dispatch: AppDispatch) => {
         fetch('http://dev.trainee.dex-it.ru/api/Auth/SignUp', {
            method: 'POST',
            body: JSON.stringify({
                userName,
                login,
                password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => {dispatch(userUpSlice.actions.userFetchingSuccess(json))
            console.log(json)})
            .catch((error) => { 
                console.log('Error ', error)})
}

export const fetchInUser = ({login, password}: IUser) => async (dispatch: AppDispatch) => {
         fetch('http://dev.trainee.dex-it.ru/api/Auth/SignIn', {
            method: 'POST',
            body: JSON.stringify({
                login,
                password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => {
                if(json.status !== 200) {
                    dispatch(userInSlice.actions.userFetchingError(json))
                    
                } else {
                    dispatch(userInSlice.actions.userFetchingSuccess(json))
                    console.log(json)
                    localStorage.setItem("user", JSON.stringify(json));
                }
                })
            .catch((error) => { 
            console.log('Error ', error)})
}