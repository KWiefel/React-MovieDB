import "./MovieCard.scss";

const MovieCard = (props) => {
  // Show passed data from Home.jsx
  return (
    <div className="movieCard__wrapper">
      <p className="movieCard_titel">{props.title}</p>
      <p className="data">{props.year}</p>
      <p className="data">{props.director}</p>
      <p className="data">{props.duration}</p>
      <p className="data">{props.genre}</p>
    </div>
  );
};

export default MovieCard;
