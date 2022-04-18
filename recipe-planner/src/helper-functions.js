export function sortByName(a, b) {
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

export function getPropertyName(obj, expression) {
  const res = {};
  Object.keys(obj).map((k) => {
    res[k] = () => k;
  });
  return expression(res)();
}
