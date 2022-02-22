import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITeam } from "../../models/ITeam";

interface TeamState {
    teams: ITeam[];
    count: number;
    page: number;
    size: number;
}

const initialState: TeamState = {
    teams: [],
    count: 0,
    page: 0,
    size: 0
}

export const teamsSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {
        getTeams(state, action: PayloadAction<ITeam[]>) {
            state.teams = action.payload
        }
    }
})

export default teamsSlice.reducer;