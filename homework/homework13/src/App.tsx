import React from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { CancelButton } from './components/CancelButton/CancelButton';
import CheckBox from './components/Checkbox/Checkbox';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import { Input } from './components/Input/Input';
import InputSearch from './components/InputSearch/InputSearch';
import { Link } from './components/Link/Link';
import Navigation from './components/Navigation/Navigation';
import {Notification} from './components/Notification/Notification'
import PlayersCard from './components/PlayersCard/PlayersCard';
import PlayersCardDetails from './components/PlayersCardDetails/PlayersCardDetails';
import SelectInput from './components/Select/Select';
import TeamsCard from './components/TeamsCard/TeamsCard';
import TeamsCardDetails from './components/TeamsCardDetails/TeamsCardDetails';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <HamburgerMenu/>
      <div style={{float: "right", display: "contents"}}>
          <div style={{padding: "10px"}}>
            <TeamsCardDetails/>
          </div>
          <div style={{padding: "10px"}}>
            <TeamsCard/>
          </div>
          <div style={{padding: "10px"}}>
            <PlayersCardDetails/>
          </div>
          <div style={{padding: "10px"}}>
            <PlayersCard/>
          </div>
          <div style={{padding: "10px"}}>
            <Button>Sing In</Button>
          </div>
          <div style={{padding: "10px"}}>
            <Button add>Add +</Button>
          </div>
          <div style={{padding: "10px"}}>
            <CancelButton>Cancel</CancelButton>
          </div>
          <div style={{padding: "10px"}}>
            <CheckBox/>
          </div>
          <div style={{padding: "10px"}}>
            <Input/>
          </div>
          <div style={{padding: "10px"}}>
            <InputSearch/>
          </div>
          <div style={{padding: "10px"}}>
            <Link href="#">Text</Link>
          </div>
          <div style={{padding: "10px"}}>
            <Notification>User with the specified username / password was not found.</Notification>
          </div>
          <div style={{padding: "10px"}}>
            <SelectInput/>
          </div>
      </div>
    </div>
  );
}

export default App;
