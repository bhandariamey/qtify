
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Card from './components/Card/Card.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [searchData, useSearchData] = useState()
  const [albumData, setAlbumData] = useState([])

  const callAlbumApi = async()=>{
    try{
      console.log("API call")
      const API = "https://qtify-backend-labs.crio.do/albums/top"
      const response = await axios.get(API)
      if(response.status === 200){
        console.log(response.data);
        setAlbumData(response.data)
      }
    }
      catch(e){
        console.log("Error fetching data");
      }
  }
  
  useEffect(()=>{
    callAlbumApi()
  },[])

  return (
    <>
      <Navbar searchData={searchData}/>
      <Hero/>
      {albumData.length>0 && <Card data={albumData} type={'album'}/>}
    </>
  );
}

export default App;
