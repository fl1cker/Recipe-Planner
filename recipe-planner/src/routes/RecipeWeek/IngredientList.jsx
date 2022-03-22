import { sortByName } from '../../helper-functions';
import './IngredientList.css';

function IngredientList({ ingredients }) {
  return (
    <table className="table">
      <tbody className="table-body">
        {ingredients.sort(sortByName).map(({ name, amount, unit }) => {
          return (
            <tr className="table-row" key={name}>
              <td className="name">{name}</td>
              <td className="amount">
                {amount || ''} {unit}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default IngredientList;
