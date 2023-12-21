
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx';
import Card from './components/Card/Card.jsx';
import React , { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from './Api/Api.js';


function App() {

  const [searchData, useSearchData] = useState()
  const [data,setData] = useState({})

  const generateData=(key,source)=>{
    source().then((data)=>{
      setData((prevdata)=>{
        return{...prevdata, [key]:data}
      })
    })
  }

  useEffect(()=>{
    generateData('topAlbums', fetchTopAlbums)
    generateData('newAlbums', fetchNewAlbums)
    generateData('songs', fetchSongs)
  },[])

  const {topAlbums=[], newAlbums=[], songs=[]} = data // setting default values when data is empty

   return (
    <>
      <div>
        <Navbar searchData={[...topAlbums, ...newAlbums]}/>
        <Outlet context = {{data: {topAlbums, newAlbums, songs} }}/>
      </div>
    </>
  );
}

export default App;
