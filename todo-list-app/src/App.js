
import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

function App() {
  const [changeWords,setChangeWords]=useState([]);
  return (
    <div className="App">
      <h1>todos</h1>
      <Todo changeWords={changeWords} setChangeWords={setChangeWords} />
      <TodoList changeWords={changeWords} setChangeWords={setChangeWords} />
    </div>
  );
}

export default App;
