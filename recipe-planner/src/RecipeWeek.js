import './RecipeWeek.css';
import Card from './RecipeCard/Card';
import { SampleData } from './temp/sample-data';
import { useState } from 'react';
import EmptyCardContents from './RecipeCard/EmptyCardContents';

const daysOfTheWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

function RecipeWeek() {
  const [cardData, setCardData] = useState(populateWeek(7));

  function handleRefreshDayClick(index) {
    cardData[index] = getRandomMeal();

    const newData = [...cardData];
    setCardData(newData);
  }

  function handleClearDayClick(index) {
    console.log('handling in RecipeWeek');
    cardData[index] = null;

    const newData = [...cardData];
    setCardData(newData);
  }

  return (
    <>
      <h1 className="date-range-header">
        Weekly Recipe:&nbsp;
        <span className="date-range">{getDateRangeFromThisWeek()}</span>
      </h1>
      <div className="cards">
        {daysOfTheWeek.slice(0, 7).map((day, index) => {
          return (
            <div className="day-card" key={day}>
              <div className="day">{day}</div>
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
            </div>
          );
        })}
      </div>
    </>
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
