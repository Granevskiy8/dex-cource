import React from 'react';
import './App.css';
import './style/Pagination.css'
import { Button } from './components/Button/Button';
import { CancelButton } from './components/CancelButton/CancelButton';
import CheckBox from './components/Checkbox/Checkbox';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import Input from './components/Input/Input';
import InputSearch from './components/InputSearch/InputSearch';
import { Link } from './components/Link/Link';
import Navigation from './components/Navigation/Navigation';
import {Notification} from './components/Notification/Notification'
import PlayersCard from './components/PlayersCard/PlayersCard';
import PlayersCardDetails from './components/PlayersCardDetails/PlayersCardDetails';
import TeamsCard from './components/TeamsCard/TeamsCard';
import TeamsCardDetails from './components/TeamsCardDetails/TeamsCardDetails';
import ReactPaginate from 'react-paginate';
import SimpleSelect from './components/SelectSimple/SelectSimple';
import SelectCard from './components/SelectCard/SelectCard';
import MultiSelect from './components/MultiSelect/MultiSelect';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const optionspage = [
  { value: '6', label: '6' },
  { value: '12', label: '12' },
  { value: '24', label: '24' },
];
const multioptions = [
  { value: 'Forward', label: 'Forward' },
  { value: 'Center', label: 'Center' },
  { value: 'Guard', label: 'Guard' },
];

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
            <Input id="login" label="Login"/>
          </div>
          <div style={{padding: "10px"}}>
            <InputSearch/>
          </div>
          <div style={{padding: "10px"}}>
            <Link href="#">Text</Link>
          </div>
          <div style={{padding: "10px"}}>
              <ReactPaginate
              className="pagination" 
              pageCount={14}
              nextLabel=">"
              previousLabel="<"
              breakLabel="..."
              pageRangeDisplayed={4}
              marginPagesDisplayed={1}
              breakClassName="pagination-item"
              previousClassName="pagination-item"
              pageClassName="pagination-item"
              nextClassName="pagination-item"
              activeClassName="active-pagination"
              pageLinkClassName="pagination-link"
              previousLinkClassName="pagination-link"
              nextLinkClassName="pagination-link"
              breakLinkClassName="pagination-link"
              />
          </div>
          <div style={{padding: "10px"}}>
            <Notification>User with the specified username / password was not found.</Notification>
          </div>
          <div style={{padding: "10px", textAlign: "left"}}>
            <SimpleSelect options={options} id="select" label="Position"/>
          </div>
          <div style={{padding: "10px", textAlign: "left"}}>
            <SelectCard options={optionspage}/>
          </div>
          <div style={{padding: "10px", textAlign: "left"}}>
            <MultiSelect options={multioptions}/>
          </div>
      </div>
    </div>
  );
}

export default App;
