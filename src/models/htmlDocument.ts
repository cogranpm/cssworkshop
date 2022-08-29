import { HtmlElement } from "./htmlElement";
import { NamedStyle } from "./namedStyle";


export interface HtmlDocument {
    id: string;
    _rev: string;
    title: string;
    description: string;
    elements: HtmlElement[];
    namedStyles: NamedStyle[];
};
