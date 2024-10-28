import moment from "moment";
import { Itam } from "../class/itam";
import './mytodo.css'

interface MytodoComponentProps {
    todo: Itam;
    setTodo: (value: (todos: Itam[]) => Itam[]) => void;
}

export default function Mytodo({ todo, setTodo }: MytodoComponentProps) {
    const deleteOne = (todo: Itam) => {
        setTodo(todos => todos.filter(item => item.name !== todo.name));
    }
    const handleCompletedChage = (checked: boolean) => {
        setTodo(todos => {
            const copy = [...todos]
            const td = copy.find(currTodo => currTodo.name === todo.name)
            td!.completed = checked
            return copy
        })
    };
    
    return (
        <div className="todo">
            <button className="button" onClick={() => deleteOne(todo)}>delete</button>
            name:{todo.name}, title:{todo.title}, description:{todo.description} time: {moment(todo.create_at).fromNow()}
            <input type="checkbox" checked={todo.completed} onChange={(e) => handleCompletedChage(e.target.checked)} ></input>

        </div>
    )
}
