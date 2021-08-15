import '@testing-library/jest-dom';
import isBalanced from '../algorithms/balancer';

describe('Testing if brackets are balanced', () => {
    test('] should be false', () => {
        expect(isBalanced(']')).toBe(false);
    });
    test('( should be false', () => {
        expect(isBalanced('(')).toBe(false);
    });
    test('([{}]) Should be true', () => {
        expect(isBalanced("([{}])")).toBe(true);
    });
    test('([{}] Should be false', () => {
        expect(isBalanced("([{}]")).toBe(false);
    });
    test('{[{}{}]}[()], {{}{}}, []{}() should be true', ()=> {
        expect(isBalanced('{[{}{}]}[()], {{}{}}, []{}()')).toBe(true);
    });
    test('{()}[), {(}) should be false', ()=> {
        expect(isBalanced('{()}[), {(})')).toBe(false);
    });
    test('{[()]},[]{({(),()})}, [([],[])] should be true', ()=> {
        expect(isBalanced('{[()]},[]{({(),()})}, [([],[])]')).toBe(true);
    });
    test('{[()]},[]{({(),()})}, [([],,[])] should be true', ()=> {
        expect(isBalanced('{[()]},[]{({(),()})}, [([],,[])]')).toBe(false);
    });
})
