import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAddTeam, IAddTeamRequest, IGetTeamsRequest, IPage, ITeam, IUpdateTeamRequest } from "../../api/dto/ITeam";
import { imageRequest } from "../../api/requests/imageAPI";
import { teams } from "../../api/requests/teamAPI";




export const getTeamsThunk = createAsyncThunk<IPage<ITeam>, IGetTeamsRequest>('Team/GetTeams',
    ({currentPage, pageSize, searchName}) => {
        return teams.getTeams(currentPage, pageSize, searchName)
    }
)

export const getTeamThunk = createAsyncThunk<ITeam, {id: number}>('Team/Get', 
    ({id}) => {
        return teams.getTeam(id)
    }
)

export const addTeamThunk = createAsyncThunk<IAddTeam, IAddTeamRequest>('Team/Add',
    async ({...data}) => {
        const formData = new FormData()
        formData.append('file', data.imageUrl)
        let image = ''
        if (formData) {
            image = await imageRequest.save(formData)
        }
        return teams.addTeam({...data, imageUrl: image})
    }
) 

export const updateTeamThunk = createAsyncThunk<ITeam, IUpdateTeamRequest>('Team/Update',
    async ({ ...data }) => {
      let image = ""
      if ((data.imageUrl as any) instanceof File) {
        const formData = new FormData();
        formData.append('file', data.imageUrl)
        if (formData) {
          image = await imageRequest.save(formData)
        }
      } else {
        image = data.imageUrl;
      }
      return teams.updateTeam({...data, imageUrl: image,})
    }
  );

  export const deleteTeamThunk = createAsyncThunk<ITeam, {id: number}>('Team/Delete',
    ({id}) => {
        return teams.deleteTeam(id)
    }
  )