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
