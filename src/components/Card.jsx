import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <div className="card">
      <img className="img-fluid" src={book.image} />
      <div className="text-center p-2">
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <Link to={`/detay/${book.id}`} className="btn btn-primary">
          Detay Gör
        </Link>
      </div>
    </div>
  );
};

export default Card;
