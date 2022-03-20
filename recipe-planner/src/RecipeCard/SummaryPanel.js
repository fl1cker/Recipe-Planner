import { DaysOfWeek } from '../models/DaysOfWeek';
import SummaryIngredientsList from './SummaryIngredientsList';
import './SummaryPanel.css';

function SummaryPanel({ cardData, closePanel, submit, isVisible }) {
  return (
    <div className={`summary-wrapper${isVisible ? ' show' : ''}`}>
      <div className="header">Meal Summary</div>
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
      <div className="header">Ingredient Summary</div>
      <SummaryIngredientsList cardData={cardData} />
    </div>
  );
}

export default SummaryPanel;
