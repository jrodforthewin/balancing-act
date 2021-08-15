import { allAreBalanced, validateAndRemoveCommas } from './logic';

const isBalanced = (expr: string) => {
  const withoutCommas = validateAndRemoveCommas(expr);
  return withoutCommas != null && allAreBalanced(withoutCommas.split(''));
};

export default isBalanced;
