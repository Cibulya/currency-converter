export const singleConversion = (
  defCurrency: number,
  newCurrcency: number,
  scale: number,
  newScale: number
) => {
  const result = Number((((defCurrency / newCurrcency) * scale) / newScale).toFixed(6));
  return result;
};

export const calcScale = (newScale: number, currScale: number) => {
  const result = newScale / currScale;
  return result;
};

export const calcBynSingleConsversion = (defScale: number, newScale: number) => {
  const result = Number((defScale / newScale).toFixed(6));
  return result;
};
