
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx';
import { useState } from 'react';

function App() {
  const [searchData, useSearchData] = useState()

  return (
    <>
      <Navbar searchData={searchData}/>
    </>
  );
}

export default App;
