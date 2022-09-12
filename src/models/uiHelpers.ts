import { HtmlElement } from "./htmlElement";
import { NamedStyle } from "./namedStyle";

export enum EditorType {
    Document,
    Elements,
    NamedStyles
};



export const calculateListItemClassName = (element: HtmlElement) => {
    let className = "element"
    if (element.selected) {
        className = `${className} selectedElement`;
    } else {
        className = `${className} normalElement`;
    }
    return className;
};

export const resetSelectedChild = (parent: HtmlElement, newChild: HtmlElement | undefined) => {
    if (parent) {
        for (const child of parent.children) {
            child.selected = false;
        }
    }
    if (newChild) {
        newChild.selected = true;
    }
};

export const convertAttributeValuesToObject = (values: [string, string][]): {} => {
    if (values.length === 0) {
        return {};
    } else {
        let bigObject = {};
        for (const attributeValue of values) {
            if (attributeValue[1]) {
                bigObject[attributeValue[0]] = attributeValue[1];
            }
        };
        return bigObject;
    }
};

export const createElementStyles = (element: HtmlElement): {} => {
    if (element.styles.size > 0) {
        let styles = {};
        element.styles.forEach((value, key, map) => {
            styles[renameStyleProperty(key)] = value;
        });
        return styles;
    } else {
        return {
        };
    }
};

export const createNamedStyles = (styles: NamedStyle[]): string => {
    if (styles.length > 0) {
        let stylesObject = "";
        styles.forEach((style: NamedStyle) => {
            let styleProperties = "";
            style.properties.forEach((value, key, map) => {
                styleProperties += `${key}: ${value};`;
            });
            stylesObject += `${style.selector} {${styleProperties}} \n\n`;
        });
        return stylesObject;
    } else {
        return {
        };
    }
};

const renameStyleProperty = (property: string): string => {
    if (property.includes("-")) {
        return snakeToCamel(property);
    } else {
        return property;
    }
};

const snakeToCamel = (str: string): string => {
    return str.toLowerCase().replace(/([-_][a-z])/g, group =>
        group
            .toUpperCase()
            .replace('-', '')
            .replace('_', '')
    );
};
