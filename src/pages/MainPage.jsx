import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="text-center p-3">
      <h3>Sayfamıza Hoşgeldiniz</h3>
      <p>Kitaplarımıza ulaşmak için lütfen tıklayın</p>
      <Link className="btn btn-warning fs-4 fw-bold p-3" to={"/books"}>
        Kitaplar
      </Link>
    </div>
  );
};

export default MainPage;
