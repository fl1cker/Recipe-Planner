import './RecipeWeek.css';
import Card from './Card';
import { useState, useEffect } from 'react';
import EmptyCardContents from './EmptyCardContents';
import SummaryPanel from './SummaryPanel';
import DragAndDrop from '../../DragAndDrop';
import { DaysOfWeek } from '../../models/DaysOfWeek';
import { getAllRecipes } from '../../services/recipe-service';

function RecipeWeek() {
  const [allRecipes, setAllRecipes] = useState([]);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllRecipes();
      setAllRecipes(data);
    };

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    setCardData(populateWeek());
  }, [allRecipes]);

  function populateWeek() {
    const meals = [];
    for (let i = 0; i < 7; i++) {
      meals.push(getRandomMeal());
    }

    return meals;
  }

  function getRandomMeal() {
    return allRecipes[Math.floor(Math.random() * allRecipes.length)];
  }

  function getDateRangeFromThisWeek() {
    const today = new Date();
    const first = today.getDate() - today.getDay() + 1;

    const monday = new Date(today.setDate(first));

    const last = monday.getDate() + 6;
    const sunday = new Date(today.setDate(last));

    return `${monday.getMonth() + 1} / ${monday.getDate()} - 
      ${sunday.getMonth() + 1} / ${sunday.getDate()}`;
  }

  function handleRefreshDayClick(index) {
    cardData[index] = getRandomMeal();

    const newData = [...cardData];
    setCardData(newData);
  }

  function handleClearDayClick(index) {
    const newData = [...cardData];
    newData[index] = null;

    setCardData(newData);
  }

  function handleFinalizeClick() {
    document.querySelector('.summary-panel').classList.add('show');
  }

  function handleClosePanel() {
    document.querySelector('.summary-panel').classList.remove('show');
  }

  function handleSubmit() {
    console.log('submitting');
    handleClosePanel();
  }

  function swapCards(startIndex, dropIndex) {
    const startNode = document.querySelectorAll('.card-wrapper')[startIndex];
    const dropNode = document.querySelectorAll('.card-wrapper')[dropIndex];

    const flippedOpposite =
      startNode.classList.contains('selected') !=
      dropNode.classList.contains('selected');

    const cardList = [
      ...startNode.querySelectorAll('.card-front, .card-back'),
      ...dropNode.querySelectorAll('.card-front, .card-back'),
    ];

    if (flippedOpposite) {
      startNode.classList.toggle('selected');
      dropNode.classList.toggle('selected');

      cardList.forEach((node) => {
        node.classList.add('skip-animation');
      });
    }

    const newArray = [...cardData];
    const placeHolder = newArray[startIndex];
    newArray[startIndex] = newArray[dropIndex];
    newArray[dropIndex] = placeHolder;

    setCardData(newArray);

    cardList.forEach((node) => {
      setTimeout(() => {
        node.classList.remove('skip-animation');
      }, 1);
    });
  }

  return (
    <div className="recipe-week-wrapper">
      <div className="date-range-header">
        This Week's Recipes:&nbsp;
        <span className="date-range">{getDateRangeFromThisWeek()}</span>
        <button
          type="button"
          className="finalize-button"
          onClick={handleFinalizeClick}
        >
          Finalize
        </button>
      </div>
      <div className="cards">
        {cardData.map((card, index) => {
          return (
            <div className="day-card" key={DaysOfWeek[index]}>
              <div className="day">{DaysOfWeek[index]}</div>
              <DragAndDrop
                key={card?.id}
                index={index}
                swapMethod={(x, y) => swapCards(x, y)}
              >
                {card ? (
                  <Card
                    cardData={card}
                    refreshDay={() => handleRefreshDayClick(index)}
                    clearDay={() => handleClearDayClick(index)}
                  />
                ) : (
                  <EmptyCardContents
                    refreshDay={() => handleRefreshDayClick(index)}
                  />
                )}
              </DragAndDrop>
            </div>
          );
        })}
      </div>
      <div className="summary-panel">
        <SummaryPanel
          cardData={cardData}
          closePanel={handleClosePanel}
          submit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default RecipeWeek;
