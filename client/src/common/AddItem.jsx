import { useState } from "react";
import Form from './AddItemForm';

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

export default AddItem;