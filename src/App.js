import React, {useState, useEffect} from 'react'
import './App.css';
import PersonList from './components/PersonList';
import DeleteList from "./components/Delete";
import PostPersonList from "./components/Post";
function App() {


    return (
        <div className="App">
<PostPersonList/>
<PersonList/>
<DeleteList/>
        </div>
    );
}

export default App;