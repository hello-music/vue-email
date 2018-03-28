export const insertAtIndex = (array, index, newItem) => [
  ...array.slice(0, index),
  newItem,
  ...array.slice(index + 1, array.length)
];

export const removeAtIndex = (array, index) => [
  ...array.slice(0, index),
  ...array.slice(index + 1, array.length)
];

export const isEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
  return re.test(String(email).toLowerCase());
};

export const getActionName = (moduleName, actionName) =>
  `${moduleName}/${actionName}`;
