import './Card.css';
import IngredientList from './IngredientList';
import RecipeAttribute from './RecipeAttribute';
import RecipeRating from './RecipeRating';
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
    const wrapper = e.currentTarget.closest('.card-wrapper');
    wrapper.classList.add('skip-animation');
    wrapper.classList.remove('selected');
    setTimeout(() => {
      wrapper.classList.remove('skip-animation');
    }, 0.75);
    refreshDay();
  }

  function handleClearClick(e) {
    console.log('handling clear');
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
          <RecipeRating
            label="Level Of Effort"
            maxRating="5"
            rating={levelOfEffort}
          />
          <RecipeRating label="Flavor" maxRating="5" rating={tasteRating} />
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
