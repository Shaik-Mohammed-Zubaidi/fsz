import { useState } from "react";
import { connect } from "react-redux";
import {incrementBooks,decrementBooks} from '../../redux/progress/actionCreator';

const Book = (props) =>{
    const {book, incrementBooks, decrementBooks}= props;
    const {title,description,link}= book;
    const [isRead,setIsRead] = useState(false);

    const handleRead = () =>{
        if(isRead){
            decrementBooks();
        }
        else{
            incrementBooks();
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
    incrementBooks,
    decrementBooks,
})(Book);