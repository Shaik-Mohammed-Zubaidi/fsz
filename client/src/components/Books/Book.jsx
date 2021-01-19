import { useState } from "react";
import { connect } from "react-redux";
import {addBook,removeBook} from '../../redux/progress/actionCreator';

const Book = (props) =>{
    const {book, addBook, removeBook,id}= props;
    const {title,description,link}= book;
    const [isRead,setIsRead] = useState(false);

    const handleRead = () =>{
        if(isRead){
            removeBook(id);
        }
        else{
            addBook({id,title});
        }
        setIsRead(prevState => !prevState);
    }

    return (
        <div className="book flex">
            <button className="read" onClick={handleRead}>{isRead? "Read" : "Not Finished" }</button>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="link-container"><p>link: </p><a href={link} >Refer the Book</a></div>
        </div>
    );
};

export default connect(null,{
    addBook,
    removeBook,
})(Book);