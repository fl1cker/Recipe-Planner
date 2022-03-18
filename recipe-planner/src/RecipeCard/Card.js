import './Card.css';
import IngredientList from './IngredientList';
import RecipeAttribute from './RecipeAttribute';
import RecipeRating from './RecipeRating';
import RecipeSource from './RecipeSource';

function Card({ cardData, refreshDay }) {
  const {
    title,
    prepTime,
    completionTime,
    levelOfEffort,
    tasteRating,
    ingredients,
    imageSource,
    recipeSource,
  } = cardData;

  function handleCardClick(event) {
    const el = event.currentTarget;
    el.classList.toggle('selected');
  }

  function handleRefreshClick(e) {
    e.stopPropagation();
    refreshDay();
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
          <RecipeAttribute
            label="Prep Time"
            value={prepTime}
            description="min"
          />
          <RecipeAttribute
            label="Completion Time"
            value={completionTime}
            description="min"
          />
          <RecipeRating
            label="Level Of Effort"
            maxRating="5"
            rating={levelOfEffort}
          />
          <RecipeRating label="Flavor" maxRating="5" rating={tasteRating} />
          <RecipeSource {...recipeSource} />
        </div>
      </div>
      <div className="card-back">
        <IngredientList ingredients={ingredients} />
      </div>
      <i
        className="fa fa-refresh card-button card-button-refresh"
        onClick={handleRefreshClick}
      ></i>
      <i className="fa fa-trash card-button card-button-clear"></i>
    </div>
  );
}

export default Card;
