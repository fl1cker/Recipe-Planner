import logo from './logo.svg';
import './App.css';
import Card from './Card.js';

const daysOfTheWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const cardData = {
  title: 'Acorn Squash Stuffed With Barley',
  imageSource: 'pizza.jpg',
  prepTime: '15',
  completionTime: '60',
  rating: 5,
  ingredients: [
    {
      name: 'Fucks',
      amount: 0,
      unit: 'To Give',
    },
    {
      name: 'Time',
      amount: 0,
      unit: 'To Put Up With Your Shit',
    },
  ],
};

function App() {
  return (
    <div className="app">
      <div className="cards">
        {daysOfTheWeek.slice(0, 5).map((day, index) => {
          return (
            <div className="day-card" key={day}>
              <div className="day">{day}</div>
              <Card {...cardData} key={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
