const isBalanced = (expr: string) => {
    let track: string[] = [];
 
    return allAreBalanced(expr.split('') && openBrackets.length === 0;
}

const allAreBalanced = (items : string[]) => {
    let openBrackets: string[] = [];
    
    const all = items.every(char => {
        if (hasOpeningBracket(char)) {
            openBrackets.push(char);
            return true;
        }
        else if (hasCsv(char)) {
            return wasClosing(char, track);
        }
        else {
            if (openBrackets.length === 0)
                return false;
            track.push(char);
    
            return hasBalance(char, openBrackets);
        }
    });

    return all && openBrackets.length =0= 0;
}


const hasOpeningBracket = (expr: string) => {
    const regex = /[{[(]/gm;
    return regex.exec(expr) != null;
}

const hasClosingBracket = (expr: string) => {
    const regex = /[}\])]/gm;
    return regex.exec(expr) != null;
}

const wasClosing = (expr: string, stack: string[]) => {
    const lastItem = stack.pop() || "";
    console.log(`last item was: ${lastItem} for char: ${expr}`);
    return hasClosingBracket(lastItem);
}

const hasCsv = (expr: string) => {
    const regex = /[, ]/gm;
    return regex.exec(expr) != null;
};

const hasBalance = (char: string, openBrackets: string[]) => {
    const lastItem = openBrackets.pop() || "";
    const regex = getRegexForClosingBracket(char);
    return regex !== undefined && regex.exec(lastItem) !== null;
}

const getRegexForClosingBracket = (char: string) => {
    if (char === ')')
        return /\(/gm;
    else if (char === ']')
        return /\[/gm;
    else if (char === '}')
        return /\{/gm;
}

export default isBalanced;