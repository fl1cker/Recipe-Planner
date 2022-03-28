import './RatingSystem.css';

function RatingSystem({ currentRating, maxRating }) {
  const emptyArray = Array.from({ length: maxRating });

  return (
    <ul className="ratings-container">
      {Array.from({ length: maxRating }).map((_, index) => {
        return (
          <li key={index}>
            <i
              className={`fa fa-star${
                Math.abs(currentRating - maxRating) <= index
                  ? ' selected-star'
                  : ''
              }`}
            ></i>
          </li>
        );
      })}
    </ul>
  );
}

export default RatingSystem;
