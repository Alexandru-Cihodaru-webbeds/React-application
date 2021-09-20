import React, { useState } from "react";
import * as uuid from 'uuid'
import NewItemForm from "./Form";

const List = () => {
    const [items, setItems] = useState([
        {title:'Love is gone',completion:true, id:uuid.v4()},
        {title:'New kid in town',completion:false, id:uuid.v4()},
        {title:'No one like you',completion:false, id:uuid.v4()}
    ]);
    const RemoveElem = (e) =>
    {
        const id = e.getAtrribute();
        console.log(id);
        setItems(items.filter(item => item.id !== id))
        
    }
    const setCompletion = id => e =>
    {
       let newItems = [...items];
       if(newItems[id].completion === true) {newItems[id].completion = false}
       else   {newItems[id].completion = true}
       setItems([...newItems]);
       console.log(items);
    }
    const addItem = (title) =>
    {
        setItems([...items,{title,completion: false,id: uuid.v4()}])
    }
    return ( 
    <div className = "list">
        <h1> To do list </h1>
        <h2>To do:{items.filter(item =>item.completion === false).length} </h2>
        <h2>Done:{items.filter(item =>item.completion === true).length} </h2>
        <NewItemForm addItem = {addItem}/>
        <ul style={{color: "red"}} >
            {items.map(item =>{
                 if(item.completion === false)
                return (<div className="flexInline">
                <input type="checkbox" id={item.id}   onChange ={(e) => setCompletion(item.id)}/>
                <li key={item.id}>{item.title}</li>
                <button value="X"  onClick = {RemoveElem} id={item.id}>X</button>
                </div>)
                else 
                return (<div style={{color: "green", textDecoration:"line-through" }}>
                <input type="checkbox" checked id={item.id} onChange ={(e) => setCompletion(item.id)}  />
                <li key={item.id}>{item.title}</li>
                <button value="X" id={item.id} onClick = {RemoveElem} >X</button>
                </div>)
            })}
        </ul>
        
    </div>
     );
}
 
export default List;