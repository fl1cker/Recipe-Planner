export const DaysOfWeekIndex = {
  M: 0,
  T: 1,
  W: 2,
  Th: 3,
  F: 4,
  S: 5,
  Su: 6,
};

export const DaysOfWeek = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

export function getNamedDayFromIndex(index) {
  const namedDay = Object.keys(DaysOfWeekIndex).find(
    (x) => DaysOfWeekIndex[x] === index
  );

  return namedDay;
}
