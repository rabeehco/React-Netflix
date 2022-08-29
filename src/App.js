import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {array, genre} from '../src/Constants/constants'

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Banner />
     
      <RowPost array={array[0]} genre={genre[0]} index={1}/>
      <RowPost array={array[1]} genre={genre[1]} index={2}/>
      <RowPost array={array[2]} genre={genre[2]} index={3}/>
      <RowPost array={array[3]} genre={genre[3]} index={4}/>
      <RowPost array={array[4]} genre={genre[4]} index={5}/>
      <RowPost array={array[5]} genre={genre[5]} index={6}/> 
          
    </div>
  );
}

export default App;
