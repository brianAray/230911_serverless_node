import React from 'react';
import ComponentOne from './components/ComponentOne/ComponentOne';
import EventsDemo from './components/EventsDemo/EventsDemo';
import ListDemo from './components/ListDemo/ListDemo';
import ParentComponent from './components/Props/ParentComponent/ParentComponent';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      {/* <ComponentOne/>
      <EventsDemo/> */}
      {/* <ListDemo/> */}
      {/* <ParentComponent/> */}
      <NavBar/>

      <Routes>
        <Route path="/" element={<ComponentOne/>}/>
        <Route path="/events" element={<EventsDemo/>}/>
        <Route path="/lists" element={<ListDemo/>}/>
        <Route path="/props" element={<ParentComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
