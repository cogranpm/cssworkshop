import cssSyntax from "~src/models/syntaxes.json";

export const parseSyntax = (syntax: string): string[] => {
    return parseSyntaxItem(syntax);

}

const parseSyntaxItem = (syntaxItem: string): string[] => {
    const validItems = new Array<string>();
    const items = syntaxItem.split("|");
    for (const item of items) {
        processItem(item, validItems);
    }
    return validItems;
};

const processItem = (subItem: string, validItems: string[]) => {
    const strippedItem = subItem.trim();
    if (strippedItem.startsWith("<")) {
        processLookupItem(strippedItem, validItems);
    } else {
        if (!strippedItem.startsWith("<") && !strippedItem.startsWith("[") && strippedItem.length > 0) {
            validItems.push(strippedItem);
        }
    }
};

const processLookupItem = (item: string, validItems: string[]) => {
    //look it up in cssSyntax
    //strip the <> from it

    //need more rules, if color etc

    const valuesObject = cssSyntax[removeAngleBrackets(item)];
    if (valuesObject) {
        const values = valuesObject.syntax;
        const valuesParsed = values.split("|");
        for (const parsedItem of valuesParsed) {
            //need a recursive call here to processItem in case parsedItem is a lookup
            processItem(parsedItem, validItems);
        }
    }
};

const removeAngleBrackets = (item: string): string => {
    let anglesRemoved = item.replace("<", "");
    anglesRemoved = anglesRemoved.replace(">", "");
    return anglesRemoved;
};
