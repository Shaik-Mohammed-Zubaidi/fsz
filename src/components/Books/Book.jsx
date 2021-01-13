const Book = (props) =>{
    const {book}= props;
    const {title,description,link}= book;
    return (
        <div className="book flex">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="link-container"><p>link: </p><a href={link} >Refer the Book</a></div>
        </div>
    );
};

export default Book;