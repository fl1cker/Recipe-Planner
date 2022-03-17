import './App.css';
import Card from './Card.js';
import Card2 from './Card2.js';

const daysOfTheWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const cardData = {
  title: 'Acorn Squash Stuffed With Barley',
  imageSource: 'pizza.jpg',
  prepTime: '15',
  completionTime: '60',
  levelOfEffort: 2,
  tasteRating: 3,
  ingredients: [
    {
      name: 'Vegetable Oil',
      amount: 4,
      unit: 'fl oz',
    },
    {
      name: 'Cookie Dough',
      amount: 2,
      unit: 'oz',
    },
  ],
};

function App() {
  return (
    <div className="app">
      <div className="cards">
        {daysOfTheWeek.slice(0, 5).map((day) => {
          return (
            <div className="day-card" key={day}>
              <div className="day">{day}</div>
              <Card {...cardData} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
