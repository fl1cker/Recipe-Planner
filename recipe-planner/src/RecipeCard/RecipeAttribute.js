function RecipeAttribute({ label, value, description }) {
  return (
    <div className="attribute">
      <span className="label">{label}</span>:&nbsp;
      {value}&nbsp;{description}
    </div>
  );
}

export default RecipeAttribute;
