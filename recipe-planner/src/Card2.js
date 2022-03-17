import './Card2.css';
import IngredientList from './IngredientList';

const maxRating = 5;

function Card2({
  title,
  prepTime,
  completionTime,
  levelOfEffort,
  tasteRating,
  ingredients,
  imageSource,
}) {
  function handleCardClick(event) {
    const el = event.currentTarget;
    el.classList.toggle('selected');
  }

  return (
    <div className="card-wrapper" onClick={handleCardClick}>
      <div className="card-front">
        <figure className="figure">
          <img className="food-image" src={imageSource}></img>
        </figure>
        <div className="title">{title}</div>
        <div className="bar"></div>
        <div className="details">
          <div className="attribute">
            <span className="label">Prep Time:&nbsp;</span>
            {prepTime}&nbsp;min
          </div>
          <div className="attribute">
            <span className="label">Completion Time:&nbsp;</span>
            {completionTime}&nbsp;min
          </div>
          <div className="attribute">
            <span className="label">Level of Effort:&nbsp;</span>
            <div className="ratings">
              {[...Array(maxRating)].map((el, index) => {
                return (
                  <i
                    className={`fa fa-star${
                      index + 1 <= levelOfEffort ? ' selected-star' : ''
                    }`}
                    key={index}
                  ></i>
                );
              })}
            </div>
          </div>
          <div className="attribute">
            <span className="label">Flavor:&nbsp;</span>
            <div className="ratings">
              {[...Array(maxRating)].map((el, index) => {
                return (
                  <i
                    className={`fa fa-star${
                      index + 1 <= tasteRating ? ' selected-star' : ''
                    }`}
                    key={index}
                  ></i>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="card-back">
        <IngredientList ingredients={ingredients} />
      </div>
    </div>
  );
}

export default Card2;
