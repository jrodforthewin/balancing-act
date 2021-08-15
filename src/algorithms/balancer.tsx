const isBalanced = (expr: string) => {
    const withoutCommas = validateAndRemoveCommas(expr);
    return withoutCommas != null && allAreBalanced(withoutCommas.split(''));
}

const validateAndRemoveCommas = (expr: string) => {
    const spacesRemoved = expr.replace(/\s/g, '');
    let items :string[] = [];

    const all = spacesRemoved.split('').every(char => {
        let valid = false;
        if(!hasCsv(char))
            valid = true;
        else
        {
            const lastItem = items.pop() || "";
            if(hasClosingBracket(lastItem))
                valid = true;
        }
        items.push(char);
        return valid;
    })

    return all ? spacesRemoved.replace(/,/g,'') : undefined;
}

const allAreBalanced = (items : string[]) => {
    let openBrackets: string[] = [];
    
    const all = items.every(char => {
        if (hasOpeningBracket(char)) {
            openBrackets.push(char);
            return true;
        }
        else {
            if (openBrackets.length === 0)
                return false;
    
            return hasBalance(char, openBrackets);
        }
    });

    return all && openBrackets.length === 0;
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