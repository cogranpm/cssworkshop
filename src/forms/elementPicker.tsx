import React, { useState } from "react";
import {
    EMBEDDED_ELEMENTS, FORM_ELEMENTS, IMAGE_MULTIMEDIA_ELEMENTS,
    INLINE_TEXT_ELEMENTS, INLINE_TEXT_ELEMENTS_A, INLINE_TEXT_ELEMENTS_B, METADATA_ELEMENTS,
    SECTIONING_ELEMENTS, TABLE_ELEMENTS, TEXT_BODY_ELEMENT, TEXT_ELEMENTS
} from "~src/models/elements";
import { HtmlElement } from "~src/models/htmlElement";
import { labelStyle, sectionHeaderStyle } from "~src/shared/styles";

export type ElementPickerProps = {
    element: HtmlElement;
    saveHandler: (element: HtmlElement) => void;
}


export const ElementPicker = (props: ElementPickerProps) => {


    const handleTextBodyChange = (e: any) => {
        props.element.body = e.target.value;
        props.saveHandler(props.element);
    };

    const handleChange = (e: any) => {
        props.element.type = e.target.value;
        props.saveHandler(props.element);
    };

    const renderRadio = (element: string) => {
        return (
            <div key={element} className="elementSelector">
                <input type="radio"
                    id={`${element}`}
                    name="element"
                    checked={props.element.type === element}
                    value={element}
                    onChange={handleChange} />
                <label
                    htmlFor={`${element}`}
                    style={labelStyle}
                >
                    {`${element}`}
                </label>
            </div>
        );
    };

    const renderElement = (element: string) => {
        return renderRadio(element);
    };

    const textBodyContainerStyle = {
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        marginBottom: "10px"
    };

    const elementsContainerStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 100px)",
        gap: "20px",
        padding: "5px"
    };

    const fieldsetStyle = {
        border: "none"
    };

    const renderElements = () => {
        return (
            <fieldset style={fieldsetStyle}>
                <div style={textBodyContainerStyle}>
                    <div key={`TEXTBODY`} >
                        {renderElement(TEXT_BODY_ELEMENT)}
                    </div>
                    <div>
                        <textarea
                            id="textBody"
                            value={props.element.body}
                            onChange={handleTextBodyChange}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>

                </div>
                <div style={elementsContainerStyle}>
                    <div>
                        <div style={sectionHeaderStyle}>Section</div>
                        <div key={`SECTIONING`} >
                            {[...SECTIONING_ELEMENTS.keys()].map((element) => {
                                return renderElement(element);
                            }
                            )}
                        </div>
                    </div>

                    <div>
                        <div style={sectionHeaderStyle}>Text</div>
                        <div key={`TEXT`}>
                            {[...TEXT_ELEMENTS.keys()].map((element) => {
                                return renderElement(element);
                            }
                            )}
                        </div>
                    </div>

                    <div>
                        <div style={sectionHeaderStyle}>Inline</div>
                        <div key={`INLINETEXT`}>
                            {[...INLINE_TEXT_ELEMENTS.keys()].map((element) => {
                                return renderElement(element);
                            }
                            )}
                        </div>
                    </div>

                    <div>
                        <div style={sectionHeaderStyle}>Inline</div>
                        <div key={`INLINETEXT_A`}>
                            {[...INLINE_TEXT_ELEMENTS_A.keys()].map((element) => {
                                return renderElement(element);
                            }
                            )}
                        </div>
                    </div>

                    <div>
                        <div style={sectionHeaderStyle}>Inline</div>
                        <div key={`INLINETEXT_B`}>
                            {[...INLINE_TEXT_ELEMENTS_B.keys()].map((element) => {
                                return renderElement(element);
                            }
                            )}
                        </div>
                    </div>

                    <div>
                        <div style={sectionHeaderStyle}>Multimedia</div>
                        <div key={`IMAGEMEDIA`}>
                            {[...IMAGE_MULTIMEDIA_ELEMENTS.keys()].map((element) => {
                                return renderElement(element);
                            }
                            )}
                        </div>
                    </div>

                    <div>
                        <div style={sectionHeaderStyle}>Forms</div>
                        <div key={`FORM`}>
                            {[...FORM_ELEMENTS.keys()].map((element) =>
                                renderElement(element)
                            )
                            }
                        </div>
                    </div>

                    <div>
                        <div style={sectionHeaderStyle}>Tables</div>
                        <div key={`TABLE`}>
                            {[...TABLE_ELEMENTS.keys()].map((element) =>
                                renderElement(element)
                            )}
                        </div>
                    </div>

                    <div>
                        <div style={sectionHeaderStyle}>Metadata</div>
                        <div key={`METADATA`}>
                            {[...METADATA_ELEMENTS.keys()].map((element) => {
                                return renderElement(element);
                            }
                            )}
                        </div>
                    </div>

                    <div>
                        <div style={sectionHeaderStyle}>Embedded</div>
                        <div key={`EMBEDDED`}>
                            {[...EMBEDDED_ELEMENTS.keys()].map((element) => {
                                return renderElement(element);
                            }
                            )}
                        </div>
                    </div>
                </div>
            </fieldset>
        );
    };

    return (
        <div>
            {renderElements()}
        </div>
    );
};
