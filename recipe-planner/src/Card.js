import './Card.css';

function Card() {
  return (
    <div className="card-wrapper">
      <div className="card-front">
        <figure className="figure">
          <img className="food-image" src="pizza.jpg"></img>
        </figure>
        <div className="title">Acorn Squash Stuffed With Barley</div>
        <div className="bar"></div>
        <div className="details">
          <div className="times">
            <div className="prep-time">
              <span className="time-description">Prep Time</span>
              <br />
              15 min
            </div>
            <div className="completion-time">
              <span className="time-description">Completion Time</span>
              <br />
              60 min
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
            <tr>
              <td>Fucks</td>
              <td>0</td>
              <td>To Give</td>
            </tr>
            <tr>
              <td>Time</td>
              <td>0</td>
              <td>To Put Up With Your Shit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Card;
