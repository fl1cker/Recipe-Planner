import './Card.css';
import CardButtons from './CardButtons';
import './EmptyCardContents.css';

function EmptyCardContents({ isLoading, refreshDay }) {
  return (
    <div className="card-wrapper">
      <div className="card-front empty-meal">
        {!isLoading ? (
          <>
            <span className="title">No Meal Planned.</span>
            <br />
            <br />
            <span>Click the refresh icon to generate a new meal.</span>
          </>
        ) : (
          <p>Loading</p>
        )}
      </div>
      <div className="card-back"></div>
      <CardButtons refreshDay={refreshDay} />
    </div>
  );
}

export default EmptyCardContents;
