import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {addBook,removeBook} from '../../redux/progress/actionCreator';

const Book = (props) =>{
    const {book, addBook, removeBook,name, books}= props;
    const {title,description,link}= book;
    const [isRead,setIsRead] = useState(false);

    const handleRead = () =>{
        if(isRead){
            removeBook(title);
        }
        else{
            addBook({title});
        }
        setIsRead(prevState => !prevState);
    }

    useEffect(()=>{
        books.forEach(book=>{
            if(book.title===name){
                setIsRead(true);
            }
        });
    },[]);

    return (
        <div className="book flex">
            <button className="read" onClick={handleRead}>{isRead? "Read" : "Not Finished" }</button>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="link-container"><p>link: </p><a href={link} >Refer the Book</a></div>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {
        books: state.progressReducer.books
    }
}

export default connect(mapStateToProps,{
    addBook,
    removeBook,
})(Book);