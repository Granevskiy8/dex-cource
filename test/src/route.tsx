import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Loyaut from "./Loyaut";
import Error404 from "./pages/404/Error404";
import Authorization from "./pages/Authorization/Authorization";
import AddNewPlayer from "./pages/Players/AddNewPlayer";
import Players from "./pages/Players/Players";
import PlayersLoyaut from "./pages/Players/PlayersLoyaut";
import Registration from "./pages/Registretion/Registration";
import AddNewTeam from "./pages/Teams/AddNewTeam";
import Teams from "./pages/Teams/Teams";
import TeamLoyaut from "./pages/Teams/TeamsLoyaut";



function RouteApp() {
    return(
        <Routes>
            <Route path="/" element={<Loyaut/>}>
                <Route index element={<Authorization/>}/>
                <Route path="sign_up" element={<Registration/>}/>
                <Route path="menu" element={<Home/>}>
                    <Route path="teams" element={<TeamLoyaut/>}>
                        <Route index element={<Teams/>}/>
                        <Route path="add" element={<AddNewTeam/>}/>
                    </Route>
                    <Route path="players" element={<PlayersLoyaut/>}>
                        <Route index element={<Players/>}/>
                        <Route path="add" element={<AddNewPlayer/>}/>
                    </Route>
                </Route>
                <Route path="*" element={<Error404/>}/>
                
            </Route>
        </Routes>
    )
}

export default RouteApp;