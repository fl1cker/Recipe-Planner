import './Card.css';
import IngredientList from './IngredientList';

const maxRating = 5;
const websiteRegex = /:\/\/(.*?)\//;

function Card({
  title,
  prepTime,
  completionTime,
  levelOfEffort,
  tasteRating,
  ingredients,
  imageSource,
  recipeSource,
}) {
  function handleCardClick(event) {
    const el = event.currentTarget;
    el.classList.toggle('selected');
  }

  function displaySource() {
    let location = '';

    switch (recipeSource.sourceType.toLowerCase()) {
      case 'website': {
        location = websiteRegex.exec(recipeSource.location)[1];

        return (
          <a
            className="location"
            onClick={(e) => e.stopPropagation()}
            href={recipeSource.location}
            target="_blank"
          >
            {location}
          </a>
        );
      }
      case 'book': {
        return (
          <span className="location">
            {recipeSource.location} - {recipeSource.details}
          </span>
        );
      }
      default: {
        return <span className="location">{recipeSource.location}</span>;
      }
    }
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
            <span className="label">Prep Time</span>:&nbsp;
            {prepTime}&nbsp;min
          </div>
          <div className="attribute">
            <span className="label">Completion Time</span>:&nbsp;
            {completionTime}&nbsp;min
          </div>
          <div className="attribute">
            <span className="label">Level of Effort</span>:&nbsp;
            <span className="ratings">
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
            </span>
          </div>
          <div className="attribute">
            <span className="label">Flavor</span>:&nbsp;
            <span className="ratings">
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
            </span>
          </div>
          <div className="attribute">
            <span className="label">Source</span>:&nbsp;
            {displaySource()}
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
