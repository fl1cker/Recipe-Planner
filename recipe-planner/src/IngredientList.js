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
                {amount} {unit}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function sortByName(a, b) {
  const first = a.name.toUpperCase();
  const second = b.name.toUpperCase();

  if (first < second) {
    return -1;
  }
  if (second > first) {
    return 1;
  }
  return 0;
}

export default IngredientList;
