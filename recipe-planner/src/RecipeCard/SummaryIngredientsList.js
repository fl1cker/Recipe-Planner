import './SummaryIngredientsList.css';
import { getNamedDayFromIndex } from '../models/DaysOfWeek';
import { sortByName } from '../helper-functions';

const convert = require('convert-units');
const keySplit = '|';

function SummaryIngredientsList({ cardData }) {
  function getIngredientConversion(element) {
    const ingredient = element;
    try {
      ingredient.amount = convert(element.amount).from(element.unit).to('oz');
      ingredient.unit = 'oz';
    } catch {
      try {
        ingredient.amount = convert(element.amount)
          .from(element.unit)
          .to('fl-oz');
        ingredient.unit = 'fl-oz';
      } catch {
        console.error(element, 'cannot be converted to oz or fl-oz');
      }
    }

    return ingredient;
  }

  function aggregateIngredients() {
    const ingredientsByDay = {};
    const allIngredients = cardData
      .filter((card) => card?.ingredients)
      .flatMap((card, index) => {
        card.ingredients.forEach((ingredient) => {
          if (ingredientsByDay[ingredient.name]) {
            ingredientsByDay[ingredient.name].push(index);
          } else {
            ingredientsByDay[ingredient.name] = [index];
          }
        });

        return card.ingredients;
      });

    const ingredientDictionary = {};

    allIngredients.forEach((element) => {
      let ingredient = new Object({
        name: element.name,
        unit: '',
        amount: '',
      });

      ingredient =
        element.unit === 'unit' ? element : getIngredientConversion(element);

      const key = `${ingredient.name}${keySplit}${ingredient.unit}`;

      if (ingredientDictionary[key]) {
        ingredientDictionary[key] += ingredient.amount;
      } else {
        ingredientDictionary[key] = ingredient.amount;
      }
    });

    const minimizedIngredientList = [];

    Object.keys(ingredientDictionary).forEach((key) => {
      let [name, currentUnit] = key.split(keySplit);
      let amount = ingredientDictionary[key];

      let newUnit = currentUnit;

      if (newUnit !== 'unit') {
        const { val, unit } = convert(ingredientDictionary[key])
          .from(currentUnit)
          .toBest();
        amount = val;
        newUnit = unit;
      }

      const days = ingredientsByDay[name];

      minimizedIngredientList.push({
        name,
        amount,
        unit: newUnit,
        days,
      });
    });

    return minimizedIngredientList;
  }

  function insertIngredientDetailsForDay(ingredient, index) {
    const ingredientDetails = cardData[index]?.ingredients.find(
      (x) => x.name === ingredient
    );
    return ingredientDetails ? (
      <div className="ingredient-breakdown-day-amount">
        <span>
          {ingredientDetails.amount} {ingredientDetails.unit}(s)
        </span>
      </div>
    ) : (
      ''
    );
  }

  function displayIngredients() {
    const ingredientAggregateList = aggregateIngredients();
    return (
      <table>
        <tbody>
          {ingredientAggregateList.sort(sortByName).map((ingredient) => {
            return (
              <tr key={`${ingredient.name}${keySplit}${ingredient.unit}`}>
                <td>{ingredient.name}</td>
                <td>{`${ingredient.amount} ${ingredient.unit}(s)`}</td>
                <td>
                  {ingredient.days?.map((day, index) => [
                    <div className="ingredient-breakdown-day" key={day}>
                      [{getNamedDayFromIndex(day)}]
                      {insertIngredientDetailsForDay(ingredient.name, day)}
                    </div>,
                  ])}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  return displayIngredients();
}

export default SummaryIngredientsList;
