import { useState } from "react";
import axios from 'axios';

const Form = ({setDisplayForm, category}) =>{
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [link,setLink] = useState("");
    const handleAdd = () =>{
        const collectionName= category==="Course"? "courses": "books";
        axios.post(`fsz/api/admin/${collectionName}`,{
            title,
            description,
            link
        })
            .then(_=> console.log("done"))
            .catch(({response})=> console.log(response.data));
        setDisplayForm((prevState)=> !prevState);
    }
    return (
        <>
            <label>Enter Title: </label>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} /><br/>
            <label>Enter Description: </label>
            <input value={description} onChange={(e)=>setDescription(e.target.value)} /><br/>
            <label>Enter link: </label>
            <input value={link} onChange={(e)=>setLink(e.target.value)} /><br/>
            <button onClick={handleAdd} >Add {category}</button>
        </>
    )
}

export default Form;