import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookInfo from "./BookInfo";

const Detay = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:4500/books/${id}`)
      .then((res) => setBook(res.data));
  }, [id]);
  console.log(book);
  return (
    <div className="row p-5 align-items-center">
      <div className="col-md-6 ">
        <img
          src={book.image}
          className="img-fluid rounded shadow w-75"
          alt=""
        />
      </div>
      <div className="col-md-6 p-3 d-flex flex-column gap-3">
        <BookInfo title={"Yazar"} value={book.author} />
        <BookInfo title={"Kitap İsmi"} value={book.title} />
        <BookInfo title={"Sayfa Sayısı"} value={book.page} />
        <BookInfo title={"Açıklama"} value={book.description} />
        <BookInfo title={"Yıl"} value={book.year} />
      </div>
    </div>
  );
};

export default Detay;
