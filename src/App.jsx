import { BrowserRouter, Route, Routes } from "react-router-dom";
import BooksPage from "./pages/BooksPage";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Detay from "./components/Detay";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/detay/:id" element={<Detay />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
