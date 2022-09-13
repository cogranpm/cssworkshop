import React, { ReactNode } from "react";
import { VOID_ELEMENTS } from "~src/models/elements";
import { HtmlElement } from "~src/models/htmlElement";
import { HtmlDocument } from "~src/models/htmlDocument";
import { convertAttributeValuesToObject, createElementStyles, createNamedStyles } from "~src/models/uiHelpers";
import { labelFont } from "~src/shared/styles";

export type PreviewProps = {
    doc: HtmlDocument | undefined
};


export const HtmlPreview = (props: PreviewProps) => {

    const createElement = (element: HtmlElement, nullChildren: boolean): ReactNode => {
        if (element.type === "textBody") {
            return element.body;
        } else {
            return React.createElement(
                element.type,
                { ...convertAttributeValuesToObject(element.attributes), style: createElementStyles(element) },
                nullChildren ? null : renderElements(element.children));
        }
    };

    const parseElement = (element: HtmlElement): ReactNode => {
        return createElement(element, (element.children.length === 0 || VOID_ELEMENTS.includes(element.type)));
    };

    const renderElement = (element: HtmlElement) => {
        return parseElement(element);
    };

    const renderElements = (elements: HtmlElement[]) => {
        const nodeList: ReactNode[] = [];
        for (const element of elements) {
            nodeList.push(renderElement(element));
        }
        return nodeList;
    };

    return (
        <>
            {props.doc !== undefined
                ?
                <div>
                  <p style={{
                    fontFamily: labelFont,
                    fontSize: "14pt",
                    fontWeight: "bold"
                  }}>Preview</p>
                  <hr/>
                    <div>
                        {renderElements(props.doc.elements)}
                    </div>
                    <style dangerouslySetInnerHTML={{
                        __html: createNamedStyles(props.doc.namedStyles)
                    }}></style>
                </div>
                :
               ""
            }
        </>
    );
};
