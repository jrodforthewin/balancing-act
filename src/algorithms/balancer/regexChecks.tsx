export const hasCsv = (expr: string) => {
  const regex = /[,]/gm;
  return regex.exec(expr) != null;
};

export const hasOpeningBracket = (expr: string) => {
  const regex = /[{[(]/gm;
  return regex.exec(expr) != null;
};

export const hasClosingBracket = (expr: string) => {
  const regex = /[}\])]/gm;
  return regex.exec(expr) != null;
};

const getRegexForClosingBracket = (char: string) => {
  if (char === ')') return /\(/gm;
  if (char === ']') return /\[/gm;
  if (char === '}') return /\{/gm;
  return undefined;
};

export const hasBalance = (char: string, openBrackets: string[]) => {
  const lastItem = openBrackets.pop();
  const regex = getRegexForClosingBracket(char);
  return lastItem !== undefined && regex !== undefined && regex.exec(lastItem) !== null;
};
