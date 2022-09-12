import React, { useEffect } from "react";
import { ALL_ELEMENTS } from "~src/models/elements";
import { GLOBAL_ATTRIBUTES } from "~src/models/attributes";
import { HtmlElement } from "~src/models/htmlElement";
import { labelStyle, listStyle, listItemStyle } from "~src/shared/styles";

export type AttributeEditorProps = {
    element: HtmlElement;
    saveHandler: (element: HtmlElement) => void;
};

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(340px, 345px))",
  alignItems: "start",
  justifyContent: "start",
};

export const AttributeEditor = (props: AttributeEditorProps) => {

    useEffect(() => {

    });

    const getAttributeValue = (attributeName: string) => {
        const existing = props.element.attributes.find(([key, value]) => {
            return key === attributeName;
        });
        if (existing) {
            return existing[1];
        } else {
            return "";
        }
    };

    const setAttributeValue = (attributeName: string, value: string) => {
        const existing = props.element.attributes.find(([key, value]) => {
            return key === attributeName;
        });
        if (existing) {
            existing[1] = value;
            props.element.attributes = ([...props.element.attributes]);
        } else {
            props.element.attributes = [...props.element.attributes, [attributeName, value]];
        }
        props.saveHandler(props.element);
    };

    const renderGlobalAttributes = (startingIndex: number, endingIndex: number) => {
        return (
            <ul style={listStyle}>
                {GLOBAL_ATTRIBUTES.map((attribute, idx) =>
                    idx < endingIndex && idx >= startingIndex ?
                        renderBody(attribute)
                        : ""
                )}
            </ul>
        );
    };

    const renderBody = (attribute: string) => {
        return (
            <li style={listItemStyle}>
                    <label
                        style={labelStyle}
                        className="formLabel"
                        htmlFor={attribute}
                    >
                        {attribute.toLowerCase()}
                    </label>
                    <input
                        name={attribute}
                        value={getAttributeValue(attribute)}
                        onChange={(e) => setAttributeValue(attribute, e.target.value)}
                    />
            </li>
        );
    }


    const renderTagAttributes = (pickedElement: string[]) => {

        return (
            <ul style={listStyle} >
                {pickedElement.map((attribute) => renderBody(attribute))}
            </ul>
        );
    };

    const renderAttributes = () => {
        const pickedElement = ALL_ELEMENTS.get(props.element.type);
        return (
            <div style={containerStyle}>
                {pickedElement ?
                    pickedElement.length > 0 ?
                        <div>
                            {renderTagAttributes(pickedElement)}
                        </div> : ""
                    : ""
                }
                <div>
                    {renderGlobalAttributes(0, GLOBAL_ATTRIBUTES.length / 2)}
                </div>
                <div>
                    {renderGlobalAttributes(GLOBAL_ATTRIBUTES.length / 2, GLOBAL_ATTRIBUTES.length)}
                </div>
            </div>
        );
    };

    return renderAttributes();
};
