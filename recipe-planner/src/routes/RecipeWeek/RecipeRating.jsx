import './RecipeRating.css';

function RecipeRating({ label, maxRating, rating }) {
  return (
    <div className="attribute">
      <span className="label">{label}</span>:&nbsp;
      <span className="ratings">
        {Array.from({ length: maxRating }).map((el, index) => {
          return (
            <i
              className={`fa fa-star${
                index + 1 <= rating ? ' selected-star' : ''
              }`}
              key={index}
            ></i>
          );
        })}
      </span>
    </div>
  );
}

export default RecipeRating;
