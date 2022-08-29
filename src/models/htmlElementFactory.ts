import { uniqueId } from "~src/shared/uuid";
import { divElement, textBodyElement } from "./elementConstants";
import { HtmlElement } from "./htmlElement";

export const makeRootElement = (type: string, index: number) => {
    const element = {
        id: uniqueId(),
        type: type,
        index: index,
        parent: undefined,
        children: new Array<HtmlElement>(),
        body: "",
        selectedChild: undefined,
        selected: false,
        showPicker: false,
        attributes: new Array<[string, string]>(),
        styles: new Map<string, string>()
    };
    return element;
};

export const makeElement = (type: string, parent: HtmlElement): HtmlElement => {
    const index = parent.children.length;
    const element = {
        id: uniqueId(),
        type: type,
        index: index,
        parent: parent,
        children: new Array<HtmlElement>(),
        body: "",
        selected: false,
        showPicker: false,
        selectedChild: undefined,
        attributes: new Array<[string, string]>(),
        styles: new Map<string, string>()
    };
    parent.children.push(element);
    return element;
};

export const makeTestData = (seed: number): HtmlElement[] => {
    const evenSeed = seed % 2 == 0;
    const rootElementCount = evenSeed ? 5 : 3;
    let elements: HtmlElement[] = [];
    for (let i = 0; i < rootElementCount; i++) {
        elements.push(makeRootElement(divElement, i));
    }
    if (evenSeed) {
        makeChildren(["Oxygen", "Chlorine", "Flourine"], elements[0]);
        makeChildren(["Mercury", "Iron", "Titanium"], elements[0]);
    }
    return elements;
};

export const makeChildren = (titles: string[], parent: HtmlElement) => {
    const levelParent = makeElement(divElement, parent);
    titles.forEach((title) => {
        const container = makeElement(divElement, levelParent);
        const tb = makeElement(textBodyElement, container);
        tb.body = title;
    });
};





/*
  const makeDiv = (index: number, parent: HtmlElement | undefined): HtmlElement => {
  return { id: uniqueId(), type: 'div', index: index, parent: parent, children: [] };
  };

  const makeGenericChild = (type: string, index: number, parent: HtmlElement): HtmlElement => {
  return { id: uniqueId(), type: type, index: index, parent: parent, children: [] };
  };

  const makeTextElement = (index: number, parent: HtmlElement, body: string): HtmlElement => {
  return { id: uniqueId(), type: "textBody", index: index, parent: parent, body: body, children: []};
  };


const root = makeDiv(0, undefined);
const a = makeDiv(0, root);
const firstSpan = makeGenericChild("span", 1, root);
const secondSpan = makeGenericChild("span", 2, root);
root.children = [a, firstSpan, secondSpan];
firstSpan.children = [makeTextElement(0, firstSpan, "bananas")];
secondSpan.children = [makeTextElement(0, secondSpan, "fishes")];

const b = makeDiv(0, a);
a.children = [b, makeGenericChild("dl", 1, a), makeGenericChild("dl", 2, a)];

const c = makeDiv(0, b);
b.children = [c, makeGenericChild("img", 1, b), makeGenericChild("img", 2, b)];

const d = makeDiv(0, c);
const e = makeGenericChild("h1", 1, c);
const e2 = makeGenericChild("h2", 2, c);
c.children = [d, e, e2, makeTextElement(2, c, "I am a text Element")];

e.children = [makeTextElement(0, e, "Hello world")];
e2.children = [makeTextElement(0, e2, "Sub Header")];

const roota = makeDiv(1, undefined);
const rootb = makeDiv(2, undefined);

const loadElements = (): HtmlElement[] => {
    return [
        root,
        roota,
        rootb
    ];
};


*/
