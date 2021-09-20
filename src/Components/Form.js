import React, {useState} from "react";

const NewItemForm = ({addItem}) => {
    const [title,setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(title);
        setTitle('');
    } 
    return (  
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type = "text" value={title} required onChange={(e) => setTitle(e.target.value)}/>
            <input type = "submit" value = "add item" />
        </form>
    );
}
 
export default NewItemForm;