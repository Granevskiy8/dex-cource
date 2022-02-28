import { createSlice } from "@reduxjs/toolkit";
import { setTextRange } from "typescript";
import { ITeam, ITeams } from "../../api/dto/ITeam";
import { deleteTeamThunk, getTeamsThunk, getTeamThunk, updateTeamThunk } from "./TeamsThunk";



const initialState: ITeams = {
    loaded: false,
    teams: [],
    team: {} as ITeam,
    updatedTeam: null,
    teamsCount: 0,
    currentPage: 1,
    pageSize: 6,
    searchTeam: '',
}

export const TeamsSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {
        teamUpdate: (state) => {
            state.updatedTeam = state.team
        },
        updateTeam: (state) => {
            state.updatedTeam = null;
        },
        searchTeam: (state, {payload}) => {
            state.searchTeam = payload
        },
    },
    extraReducers: {
        [getTeamsThunk.pending.type]: (state) => {
            state.loaded = false
        },
        [getTeamsThunk.fulfilled.type]: (state, {payload}) => {
            state.loaded = true
            state.teams = payload.data
            state.teamsCount = payload.cont
            state.currentPage = payload.page
            state.pageSize = payload.size;
        },
        [getTeamsThunk.rejected.type]: (state, {error}) => {
            state.loaded = false
            console.log(error)
        },
        [getTeamThunk.pending.type]: (state) => {
            state.loaded = true
        },
        [getTeamThunk.fulfilled.type]: (state) => {
            state.loaded = false
        },
        [getTeamThunk.rejected.type]: (state, {error}) => {
            state.loaded = false
            console.log(error)
        },
        [updateTeamThunk.pending.type]: (state) => {
            state.loaded = true;
        },
        [updateTeamThunk.fulfilled.type]: (state) => {
            state.loaded = false;
        },
        [updateTeamThunk.rejected.type]: (state, { error }) => {
            state.loaded = false;
            console.log(error)
        },
        [deleteTeamThunk.pending.type]: (state) => {
            state.loaded = true;
        },
        [deleteTeamThunk.fulfilled.type]: (state) => {
            state.loaded = false;
        },
        [deleteTeamThunk.rejected.type]: (state, { error }) => {
            state.loaded = false;
            console.log(error)
        },
    }
})

export const { teamUpdate, updateTeam, searchTeam } = TeamsSlice.actions;