import logo from './logo.svg';
import {useEffect , useState} from "react"
import './App.css';
import { getApiData } from './apidata/api';
import Sidebar from './Components/Slidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import LastFivePolicy from './Components/LastFivePolicy';
import SearchPolicy from './Components/SearchPolicy';
import One from './Components/One';
import Test from './Components/Test';
import ViewPolicy from './Components/ViewPolicy';
import Statistics from './Components/Statistics';


function App() {

 return(
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/lastfivepolicy" element={<LastFivePolicy/>}/>
    <Route exact path="/SearchPolicy" element={<SearchPolicy/>}/>
    <Route exact path="/viewpolicy" element={<ViewPolicy/>}/>
    <Route exact path="/Statistics" element={<Statistics/>}/>
    <Route exact path="/one" element={<Test/>}/>
  </Routes>
  </BrowserRouter>
 )
}

export default App;
