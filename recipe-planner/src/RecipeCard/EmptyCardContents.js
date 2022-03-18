import './Card.css';
import CardButtons from './CardButtons';

function EmptyCardContents({ refreshDay }) {
  return (
    <div className="card-wrapper">
      <div className="card-front"></div>
      <div className="card-back"></div>
      <CardButtons refreshDay={refreshDay} />
    </div>
  );
}

export default EmptyCardContents;
