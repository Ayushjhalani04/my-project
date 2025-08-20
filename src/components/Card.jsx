function Card({ src, alt, onClick }) {
    return (
      <div className="card" onClick={onClick}>
        <img src={src} alt={alt} className="card-image" />
      </div>
    );
  }
  
  export default Card;
  