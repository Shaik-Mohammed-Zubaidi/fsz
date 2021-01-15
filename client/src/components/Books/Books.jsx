import Book from "./Book";
import "./books.css";

const Books = () => {
  const booksList = [
    {
      title: "title",
      description:
        "description nnxjks jkslod ahhjsid abshkdfodfod ahjcnjkdsbdcj hjsdnvjnsvj jjnfojsdnf jjsvnjsb ",
      link: "something",
    },
    {
      title: "title",
      description:
        "description nnxjks jkslod ahhjsid abshkdfodfod ahjcnjkdsbdcj hjsdnvjnsvj jjnfojsdnf jjsvnjsb ",
      link: "something",
    },
    {
      title: "title",
      description:
        "description nnxjks jkslod ahhjsid abshkdfodfod ahjcnjkdsbdcj hjsdnvjnsvj jjnfojsdnf jjsvnjsb ",
      link: "something",
    },
    {
      title: "title",
      description:
        "description nnxjks jkslod ahhjsid abshkdfodfod ahjcnjkdsbdcj hjsdnvjnsvj jjnfojsdnf jjsvnjsb ",
      link: "something",
    },
    {
      title: "title",
      description:
        "description nnxjks jkslod ahhjsid abshkdfodfod ahjcnjkdsbdcj hjsdnvjnsvj jjnfojsdnf jjsvnjsb ",
      link: "something",
    },
    {
      title: "title",
      description:
        "description nnxjks jkslod ahhjsid abshkdfodfod ahjcnjkdsbdcj hjsdnvjnsvj jjnfojsdnf jjsvnjsb ",
      link: "something",
    },
  ];
  return <div className="flex" >
      {booksList.map((book,i)=> <Book key={book.title+i} book={book} />)}
  </div>;
};

export default Books;
