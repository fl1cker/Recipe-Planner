import './Card.css';

function Card({
  title,
  prepTime,
  completionTime,
  rating,
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
          <div className="rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
        </div>
      </div>
      <div className="card-back">
        <table border="1">
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>Amount</th>
              <th>Unit</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((ingredient) => {
              return (
                <tr key={ingredient.name}>
                  <td>{ingredient.name}</td>
                  <td>{ingredient.amount}</td>
                  <td>{ingredient.unit}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Card;
