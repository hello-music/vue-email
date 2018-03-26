export const insertAtIndex = (array, index, newItem) => [
  ...array.slice(0, index),
  newItem,
  ...array.slice(index + 1, array.length)
];

export const removeAtIndex = (array, index) => [
  ...array.slice(0, index),
  ...array.slice(index + 1, array.length)
];
