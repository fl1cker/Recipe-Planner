import './CardButtons.css';

function CardButtons({ refreshDay, clearDay }) {
  return (
    <>
      <i
        className="fa fa-refresh card-button card-button-refresh"
        onClick={refreshDay}
      ></i>
      {clearDay && (
        <i
          className="fa fa-trash card-button card-button-clear"
          onClick={clearDay}
        ></i>
      )}
    </>
  );
}

export default CardButtons;
