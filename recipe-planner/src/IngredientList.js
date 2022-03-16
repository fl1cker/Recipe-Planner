import './IngredientList.css';

function IngredientList({ ingredients }) {
  return (
    <table className="table">
      <tbody className="table-body">
        {ingredients.map(({ name, amount, unit }) => {
          return (
            <tr className="table-row" key={name}>
              <td className="name">{name}</td>
              <td className="amount">{amount}</td>
              <td className="unit">{unit}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default IngredientList;
