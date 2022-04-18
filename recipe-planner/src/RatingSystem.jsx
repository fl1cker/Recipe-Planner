import './RatingSystem.css';

function RatingSystem({ currentRating, maxRating, isEditable, updateRating }) {
  function handleRatingClick(e, index) {
    e.preventDefault();
    if (!isEditable) return;
    const starNumber = getStarNumber(index);
    updateRating(starNumber);
  }

  function getStarNumber(elementIndex) {
    return Math.abs(elementIndex - maxRating);
  }

  return (
    <ul className={`ratings-container${isEditable ? ' editable' : ''}`}>
      {Array.from({ length: maxRating }).map((_, index) => {
        return (
          <li key={index} onClick={(e) => handleRatingClick(e, index)}>
            <i
              className={`fa fa-star${
                getStarNumber(currentRating) <= index ? ' selected-star' : ''
              }`}
            ></i>
          </li>
        );
      })}
    </ul>
  );
}

export default RatingSystem;
