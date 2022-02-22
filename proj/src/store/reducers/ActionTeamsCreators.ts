import { AppDispatch } from "../store";
import { teamsSlice } from "./TeamsSlice";

export const fetchTeams = () => (dispatch: AppDispatch) => {
    fetch('http://dev.trainee.dex-it.ru/api/Team/GetTeams')
    .then(response => response.json())
    .then(json => dispatch(teamsSlice.actions.getTeams(json)))
}