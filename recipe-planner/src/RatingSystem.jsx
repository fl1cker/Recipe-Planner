import './RatingSystem.css';

function RatingSystem({ currentRating, maxRating }) {
  const emptyArray = Array.from({ length: maxRating });

  return (
    <ul className="ratings-container">
      {Array.from({ length: maxRating }).map((el, index) => {
        return (
          <li key={index}>
            <i
              className={`fa fa-star${
                index + 1 <= currentRating ? ' selected-star' : ''
              }`}
            ></i>
          </li>
        );
      })}
    </ul>
  );
}

export default RatingSystem;
