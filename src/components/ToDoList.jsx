import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({todos, checkTodo, deleteTodo}) => {
  return (
    <div>
      {todos.map((todo) => (
        <ToDo key={todo.id} title={todo.title} checkTodo={checkTodo} id={todo.id} isCompleted={todo.isCompleted} deleteTodo = {deleteTodo}/>
      ))}
      
    </div>
  )
}

export default ToDoList


