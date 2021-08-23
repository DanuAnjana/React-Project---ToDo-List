import React, {useState,useEffect} from 'react';
import './App.css';
import Form from './Component/form';
import TodoList from './Component/todoList';
function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status , setStatus] = useState("all");
  const [filtertodo,setFiltertodo] = useState([]);

  useEffect(() => {
    filterHandler();
  },[todos,status]);

  const filterHandler = () => {
    switch(status){
      case "completed":
        setFiltertodo(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFiltertodo(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFiltertodo(todos);
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Dhanu's Todo List </h1>
      </header>
      <Form inputText={inputText}
       todos={todos}
        setTodos ={setTodos} 
        setInputText={setInputText}
        setStatus = {setStatus}
        
      />
      <TodoList 
      todos={todos} 
      setTodos ={setTodos}
      filterTodos = {filtertodo}
      />
    </div>
  );
}

export default App;
