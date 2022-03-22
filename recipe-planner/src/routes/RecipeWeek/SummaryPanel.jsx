import { DaysOfWeek } from '../../models/DaysOfWeek';
import SummaryIngredientsList from './SummaryIngredientsList';
import './SummaryPanel.css';

function SummaryPanel({ cardData, closePanel, submit }) {
  return (
    <div className="summary-wrapper">
      <h1 className="header">Meal Summary</h1>
      <i className="fa fa-close" onClick={closePanel}></i>
      <table className="days-of-week">
        <tbody>
          {DaysOfWeek.map((day, index) => {
            return (
              <tr key={day}>
                <td className="day-of-week">{day}</td>
                <td className="meal-title">
                  {cardData[index]?.title || 'N/A'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h1 className="header">Ingredient Summary</h1>
      <SummaryIngredientsList cardData={cardData} />
      <div className="button-container">
        <button className="cancel-button" onClick={closePanel}>
          Cancel
        </button>
        <button className="submit-button" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default SummaryPanel;
