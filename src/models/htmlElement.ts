export type HtmlElement = {
    id: string;
    type: string;
    index: number;
    children: HtmlElement[];
    parent?: HtmlElement;
    selectedChild?: HtmlElement;
    body: string;
    showPicker: boolean;
    selected: boolean;
    attributes: [string, string][];
    styles: Map<string, string>;
};
