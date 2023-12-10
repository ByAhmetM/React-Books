import { BrowserRouter, Route, Routes } from "react-router-dom";
import BooksPage from "./pages/BooksPage";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Detay from "./components/Detay";
import Undefined from "./components/Undefined";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/detay/:id" element={<Detay />} />
        <Route path="*" element={<Undefined />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
