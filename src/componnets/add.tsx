import { useState } from "react";
import { Itam, ItamInterface } from "../class/itam";
import './add.css'

interface AddComponentProps {
    todo: Itam[]; 
    setTodo: (value: Itam[]) => void; 
}

export default function AddComponnet({ todo , setTodo }: AddComponentProps): JSX.Element {
    const [getName, setGetName] = useState("");
    const [gettitle, setGettitle] = useState("");
    const [getdescription, setGetdescription] = useState("");

    const addItem = () => {
        if (getName && gettitle && getdescription) {
            const newItem: ItamInterface = {
                name: getName,
                title: gettitle,
                description: getdescription
            };
            const newItemDescription = new Itam(newItem)
            
            setTodo([...todo, newItemDescription]);
            setGetName("");
            setGettitle("");
            setGetdescription("");
        } else {
            alert("Please fill all fields");
            setGetName("");
            setGettitle("");
            setGetdescription("");
        }
    }

    return (
        <div className="main-form">
            <input type="text" placeholder="name" value={getName} onChange={(e) => setGetName(e.target.value)} />
            <input type="text" placeholder="title" value={gettitle} onChange={(e) => setGettitle(e.target.value)} />
            <input type="text" placeholder="description" value={getdescription} onChange={(e) => setGetdescription(e.target.value)} />            
            <button onClick={addItem}>Add Item</button>            
        </div>
    )
}
