const BookInfo = ({ title, value }) => {
  return (
    <p>
      {title === "Yazar" ? (
        <span className="badge bg-danger me-3">{title}</span>
      ) : title === "Açıklama" ? (
        <span className="badge bg-warning me-3">{title}</span>
      ) : title === "Yıl" ? (
        <span className="badge bg-primary me-3">{title}</span>
      ) : title === "Sayfa Sayısı" ? (
        <span className="badge bg-success me-3">{title}</span>
      ) : (
        <span className="badge bg-secondary me-3">{title}</span>
      )}
      <span>{value}</span>
    </p>
  );
};

export default BookInfo;
