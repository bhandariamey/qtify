
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import { useState } from 'react';

function App() {
  const [searchData, useSearchData] = useState()

  return (
    <>
      <Navbar searchData={searchData}/>
      <Hero/>
    </>
  );
}

export default App;
