import './Card.css';
import IngredientList from './IngredientList';
import RecipeAttribute from './RecipeAttribute';
import RatingSystem from '../../RatingSystem';
import RecipeSource from './RecipeSource';
import CardButtons from './CardButtons';

function Card({ cardData, refreshDay, clearDay }) {
  const {
    title,
    prepTime,
    completionTime,
    levelOfEffort,
    tasteRating,
    ingredients,
    imageSource,
    recipeSource,
  } = cardData || {};

  function handleCardClick(event) {
    const el = event.currentTarget;
    el.classList.toggle('selected');
  }

  function handleRefreshClick(e) {
    e.stopPropagation();
    e.currentTarget.closest('.card-wrapper').classList.remove('selected');
    refreshDay();
  }

  function handleClearClick(e) {
    e.stopPropagation();
    clearDay();
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
          <div className="attribute">
            <span className="label">Level Of Effort</span>:&nbsp;
            <RatingSystem
              label=""
              maxRating="5"
              currentRating={levelOfEffort}
            />
          </div>
          <div className="attribute">
            <span className="label">Flavor</span>:&nbsp;
            <RatingSystem maxRating="5" currentRating={tasteRating} />
          </div>

          <RecipeSource {...recipeSource} />
          <CardButtons
            refreshDay={handleRefreshClick}
            clearDay={handleClearClick}
          />
        </div>
      </div>
      <div className="card-back">
        <IngredientList ingredients={ingredients} />
        <CardButtons
          refreshDay={handleRefreshClick}
          clearDay={handleClearClick}
        />
      </div>
    </div>
  );
}

export default Card;
