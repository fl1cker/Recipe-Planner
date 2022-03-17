import './App.css';
import Card from './Card.js';

const daysOfTheWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const cardData = {
  title: 'Acorn Squash Stuffed With Barley',
  imageSource: 'pizza.jpg',
  prepTime: '15',
  completionTime: '60',
  levelOfEffort: 2,
  tasteRating: 3,
  recipeSource: {
    sourceType: 'book',
    location: 'Born To Cook like a dude man guy fo real',
    details: 'pg. 45',
  },
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
