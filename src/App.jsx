import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState("");
  const [id, setId] = useState(3);
  const [todolist, setTodolist] = useState([
     {id:1, todo:"청소하기" },
     {id:2, todo : "운동하기"}
    ])
  const onChange = (e) => {
      setTodo(e.target.value);
  }
  const addTodolist = (e) => {
    e.preventDefault();
    let todoitem = {
      id ,
      todo
    }
    setId(id => id + 1);
    setTodolist([...todolist, todoitem]);
  }
  return (
    <>
      <h1>Todo list App</h1>
      <form action="" onSubmit={addTodolist}>
        <input type="text" value={todo} onChange={onChange} />
        <input type="submit" value="Add" />
      </form>
      <hr />
      <ul>
        {todolist.map(todoitem => {
          return (
              <li key={todoitem.id}>{todoitem.id} : {todoitem.todo}</li>
          )
        })}
      </ul>
    </>
  )
}

export default App
