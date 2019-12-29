import React from 'react';
import Navber from'./components/Navbar/Navber';
import TourList from './components/TourList/TourList';
import './App.scss';
import Contact from './components/contact/contact';

function App ()   {
  return (
    <main>
       <Navber/>
       <TourList/>
       <Contact />
       
</main>
  );
}
export default App;