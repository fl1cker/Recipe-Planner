export const validMeasurementsForConversion = [
  'g',
  'oz',
  'lb',
  'ml',
  'tsp',
  'tbsp',
  'fl-oz',
  'cup',
  'pnt',
  'qt',
  'l',
  'gal',
];

export const invalidMeasurementsForConversion = ['pinch', 'whole'];

export const allUnitsOfMeasurement = invalidMeasurementsForConversion.concat(
  validMeasurementsForConversion
);
