import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="d-flex justify-content-between bg-black p-4 px-5">
      <Link className="text-white text-decoration-none fs-4 fw-bold" to={"/"}>
        BOOKS
      </Link>
      <div className="navbar d-flex gap-3">
        <NavLink to={"/"}>AnaSayfa</NavLink>
        <NavLink to={"/books"}>Kitaplar</NavLink>
      </div>
    </div>
  );
};

export default Header;
