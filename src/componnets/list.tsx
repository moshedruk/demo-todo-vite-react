import { Itam } from "../class/itam";
import './list.css'
import Mytodo from "./mytodo";

interface listComponentProps {
    todo: Itam[]; 
    setTodo: (value: (todos: Itam[])=>Itam[]) => void; 
}

export default function List({todo,setTodo}: listComponentProps) {
    {console.log(todo)}
  return (
    <div className="list">
      {todo.map(item => (
        <Mytodo todo = {item} setTodo = {setTodo} />         
      ))}
    </div>
  )
}
