import { useState } from "react";
import axios from 'axios';

const AddItem = ({category}) =>{
    const [displayForm, setDisplayForm] = useState(false);

    const renderForm = (formToBeDisplayed) =>{
        if(formToBeDisplayed){
            return <Form setDisplayForm={setDisplayForm} category={category} />;
        }
        else{
            return <button onClick={()=>setDisplayForm(!displayForm)} >Add a New {category}</button>;
        }
    }

    return (
        <div>
            {renderForm(displayForm)}
        </div>
    );
};

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

export default AddItem;