import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import React, {useEffect, useState} from "react";
import { Button, Link } from "@mui/material";

function App() {
  
  const [id, setId] = useState(0)
  const [todos, setTodos] = useState([])
  const [color, setColor] = useState("white")

  

  const checkTodo = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id)
      {
        todo.isCompleted = !todo.isCompleted
        console.log(id, todo.isCompleted)
      }
      return todo
    }
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id) )
  }

  const addTodo = (text) => {
    
    const newTodo = {
      id: id,
      title: text,
      isCompleted: false
    }
    setTodos([...todos, newTodo])
    setId(id + 1)
  }



  const changeColor = () => {
    setColor(color === "white" ? "lightgrey" : "white")
  }

  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={changeColor} variant="outlined">Change Theme</Button>
        <Link href="https://github.com/ejtrheoz" underline="none">Ejtrheoz Github</Link>
      </div>
      
      <ToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
