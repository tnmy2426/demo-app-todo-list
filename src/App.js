import React from 'react';
import './App.css';
import ToDoList from './ToDoList';

const App = () => {
  return (
    <>
    <div className='container-div'>
      <div className='main-div'>
        <div className='inner-div'>
          <marquee>ToDo List App</marquee>
        </div>
        <br/>
        <ToDoList />
      </div>
    </div>
    </>
  )
}

export default App
