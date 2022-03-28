import './RatingSystem.css';

function RatingSystem({ currentRating, maxRating, isEditable }) {
  const emptyArray = Array.from({ length: maxRating });

  return (
    <ul className={`ratings-container${isEditable ? ' editable' : ''}`}>
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
