import './Card.css';
import IngredientList from './IngredientList';

const maxRating = 5;

function Card({
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
          <div className="times">
            <div className="prep-time">
              <span className="time-description">Prep Time</span>
              <br />
              {prepTime} min
            </div>
            <div className="completion-time">
              <span className="time-description">Completion Time</span>
              <br />
              {completionTime} min
            </div>
          </div>
          <div className="ratings">
            <div className="level-of-effort">
              <span className="rating-description">LOE</span>
              <sup>{levelOfEffort}</sup>&frasl;<sub>5</sub>
              <i className="fa fa-star selected-star"></i>
            </div>
            <div className="taste-rating">
              <span className="rating-description">Flavor</span>
              <sup>{tasteRating}</sup>&frasl;<sub>5</sub>
              <i className="fa fa-star selected-star"></i>
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

export default Card;
