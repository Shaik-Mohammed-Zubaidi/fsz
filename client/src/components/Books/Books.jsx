import axios from "axios";
import { useEffect, useState } from "react";
import AddItem from "../../common/AddItem";
import Book from "./Book";
import "./books.css";

const Books = () => {
  const login = JSON.parse(window.sessionStorage.getItem('login'));
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    axios.get('fsz/api/admin/books')
      .then(response => {
        console.log(response);
        setBooksList(response.data);
      })
      .catch(({ response }) => console.log(response.data));
  }, []);

  return <div className="flex" >
    {login && login.user.admin && <AddItem category={"Book"} />}
    {booksList.map((book, i) => <Book key={book.title + i} name={book.title} book={book} />)}
  </div>;
};

export default Books;
