export const DaysOfWeekIndex = {
  Su: 0,
  M: 1,
  T: 2,
  W: 3,
  Th: 4,
  F: 5,
  S: 6,
};

export const DaysOfWeek = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

export function getNamedDayFromIndex(index) {
  const namedDay = Object.keys(DaysOfWeekIndex).find(
    (x) => DaysOfWeekIndex[x] === index
  );

  return namedDay;
}
