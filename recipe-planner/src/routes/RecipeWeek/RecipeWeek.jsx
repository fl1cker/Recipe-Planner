import './RecipeWeek.css';
import Card from './Card';
import { SampleData } from '../../temp/sample-data';
import { useState } from 'react';
import EmptyCardContents from './EmptyCardContents';
import SummaryPanel from './SummaryPanel';
import DragAndDrop from '../../DragAndDrop';
import { DaysOfWeek } from '../../models/DaysOfWeek';

function RecipeWeek() {
  const [cardData, setCardData] = useState(populateWeek(7));

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
    const newArray = [...cardData];
    const placeHolder = newArray[startIndex];
    newArray[startIndex] = newArray[dropIndex];
    newArray[dropIndex] = placeHolder;

    setCardData(newArray);
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
        {DaysOfWeek.map((day, index) => {
          return (
            <div className="day-card" key={day}>
              <div className="day">{day}</div>
              <DragAndDrop
                key={day}
                index={index}
                swapMethod={(x, y) => swapCards(x, y)}
              >
                {cardData[index] ? (
                  <Card
                    cardData={cardData[index]}
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

function populateWeek(daysToPopulate) {
  const meals = [];
  for (let i = 0; i < daysToPopulate; i++) {
    meals.push(getRandomMeal());
  }

  return meals;
}

function getRandomMeal() {
  return Math.random() <= 0.5 ? SampleData[0] : SampleData[1];
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

export default RecipeWeek;
