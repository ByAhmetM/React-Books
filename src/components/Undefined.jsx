import { useLocation } from "react-router-dom";

const Undefined = () => {
  const { state } = useLocation();
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center w-100"
    >
      <span className="fs-1 text-danger fw-bold">
        {" "}
        {state} Sayfa Bulunamadı!
      </span>
    </div>
  );
};

export default Undefined;
