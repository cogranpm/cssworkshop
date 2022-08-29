import React, { useState } from "react";
import {
    EMBEDDED_ELEMENTS, FORM_ELEMENTS, IMAGE_MULTIMEDIA_ELEMENTS,
    INLINE_TEXT_ELEMENTS, INLINE_TEXT_ELEMENTS_A, INLINE_TEXT_ELEMENTS_B, METADATA_ELEMENTS,
    SECTIONING_ELEMENTS, TABLE_ELEMENTS, TEXT_BODY_ELEMENT, TEXT_ELEMENTS
} from "~src/models/elements";
import { HtmlElement } from "~src/models/htmlElement";
import { AttributeEditor } from "./attributeEditor";
import { StyleEditor } from "./stylesEditor";
import { ElementPicker } from "./elementPicker";
import { labelStyle, tabsStyle, tabLabelStyle, borderDef } from "~src/shared/styles";

export type ElementPickerProps = {
    element: HtmlElement;
    saveHandler: (element: HtmlElement) => void;
}

const ELEMENT_TAB = 0;
const ATTRIBUTE_TAB = 1;
const STYLE_TAB = 2;

const formContainerStyle = {
  borderTop: borderDef,
  borderRight: borderDef,
  borderBottom: borderDef
};

export const ElementEditor = (props: ElementPickerProps) => {

    const [selectedTab, setSelectedTab] = useState(ELEMENT_TAB);

    const saveStyle = () => {
        props.saveHandler(props.element);
    };

    return (
        <div>
            <div style={tabsStyle}>
                <label
                    style={tabLabelStyle(selectedTab === ELEMENT_TAB)}
                    onClick={(e: any) => setSelectedTab(ELEMENT_TAB)}
                >
                    Elements
                </label>

                <label
                    style={tabLabelStyle(selectedTab === ATTRIBUTE_TAB)}
                    onClick={(e: any) => setSelectedTab(ATTRIBUTE_TAB)}
                >
                    Attributes
                </label>
                <label
                    style={tabLabelStyle(selectedTab === STYLE_TAB)}
                    onClick={() => setSelectedTab(STYLE_TAB)}>
                    Style
                </label>
            </div>
            <div style={formContainerStyle}>
                <form>
                    <div style={{
                        visibility: selectedTab === ELEMENT_TAB ? "visible" : "hidden",
                        maxHeight: selectedTab === ELEMENT_TAB ? 5000 : 0
                    }}>

                        <ElementPicker
                            element={props.element}
                            saveHandler={props.saveHandler}
                        />
                    </div>

                    <div style={{
                        visibility: selectedTab === ATTRIBUTE_TAB ? "visible" : "hidden",
                        maxHeight: selectedTab === ATTRIBUTE_TAB ? 5000 : 0
                    }}>
                        <div>
                            <AttributeEditor
                                element={props.element}
                                saveHandler={props.saveHandler}
                            />
                        </div>
                    </div>
                    <div style={{
                        visibility: selectedTab === STYLE_TAB ? "visible" : "hidden",
                        maxHeight: selectedTab === STYLE_TAB ? 5000 : 0
                    }}>
                        <div>
                            <br />
                            <StyleEditor
                                styles={props.element.styles}
                                saveHandler={saveStyle}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
};
