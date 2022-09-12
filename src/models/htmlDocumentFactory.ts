import { HtmlDocument } from "./htmlDocument";
import { HtmlElement } from "./htmlElement";
import { NamedStyle } from "./namedStyle";
import { makeTestData } from './htmlElementFactory';
import { make as makeNamedStyle } from "~src/models/namedStyleFactory";
import { uniqueId } from "~src/shared/uuid";

export const make = (title: string, description: string, elements: HtmlElement[], namedStyles: NamedStyle[]): HtmlDocument => {
    return { id: uniqueId(), _rev: "", title: title, description: description, elements: elements, namedStyles: namedStyles };
};

const makeTestNamedStyles = (): NamedStyle[] => {
    return new Array<NamedStyle>(
        makeNamedStyle("#myid", new Map<string, string>([
            ["background-color", "white"]
        ])),
        makeNamedStyle("#someid", new Map<string, string>([
            ["background-color", "green"]
        ])),
    );
};


export const testData = [
    make("css grid", "demo of css grids", makeTestData(1), makeTestNamedStyles()),
    make("web apis", "demo of web apis", makeTestData(2), makeTestNamedStyles()),
];
