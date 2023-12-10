import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const BooksPage = () => {
  const [books, setBooks] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:4500/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex justify-content-between flex-wrap p-5 gap-5">
      {books?.map((book) => (
        <Card key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksPage;
