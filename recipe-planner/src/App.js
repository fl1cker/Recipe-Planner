import './App.css';
import Card from './Card.js';
import { SampleData } from './temp/sample-data';

const daysOfTheWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

function App() {
  let cardData = fetchRandomData();
  console.log(cardData);

  return (
    <div className="app">
      <div className="cards">
        {daysOfTheWeek.slice(0, 7).map((day, index) => {
          return (
            <div className="day-card" key={day}>
              <div className="day">{day}</div>
              <Card {...cardData[index]} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function fetchRandomData() {
  const data = [];
  for (let i = 0; i < 7; i++) {
    data.push(Math.random() <= 0.5 ? SampleData[0] : SampleData[1]);
  }

  return data;
}

export default App;
