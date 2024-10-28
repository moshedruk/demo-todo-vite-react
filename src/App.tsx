
import { useState } from 'react'
import './App.css'
import AddComponnet from './componnets/add'
import { Itam } from './class/itam'
import List from './componnets/list'


function App() {
  const [todo , setTodo] = useState<Itam[]>([])
  
  return (
    <div className='app'>
      <h1>To Do List!</h1>
      <AddComponnet todo = {todo} setTodo = {setTodo}/>
      <List todo = {todo} setTodo = {setTodo}/>
    </div> 
  )
}

export default App
