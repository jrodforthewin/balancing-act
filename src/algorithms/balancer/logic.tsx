import {
  hasBalance,
  hasClosingBracket,
  hasCsv,
  hasOpeningBracket,
} from './regexChecks';

export const validateAndRemoveCommas = (expr: string) => {
  const spacesRemoved = expr.replace(/\s/g, '');
  const items: string[] = [];

  const allAreAfterClosingBrackets = spacesRemoved.split('').every((char) => {
    let valid = false;
    if (!hasCsv(char)) {
      valid = true;
    } else {
      const lastItem = items.pop();
      if (lastItem !== undefined && hasClosingBracket(lastItem)) valid = true;
    }
    items.push(char);
    return valid;
  });

  return allAreAfterClosingBrackets ? spacesRemoved.replace(/,/g, '') : undefined;
};

export const allAreBalanced = (items: string[]) => {
  const openBrackets: string[] = [];

  const all = items.every((char) => {
    if (hasOpeningBracket(char)) {
      openBrackets.push(char);
      return true;
    }
    if (openBrackets.length === 0) return false;

    return hasBalance(char, openBrackets);
  });

  return all && openBrackets.length === 0;
};
