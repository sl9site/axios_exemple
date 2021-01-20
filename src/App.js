import React, {useState, useEffect} from 'react'
import './App.css';
import PersonList from './components/PersonList'
import PostPersonList from "./components/Post";
function App() {


    return (
        <div className="App">
<PostPersonList/>
<PersonList/>
        </div>
    );
}

export default App;