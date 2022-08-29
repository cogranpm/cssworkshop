import React from "react";
import { NamedStyle } from "~src/models/namedStyle";
import { StyleEditor } from "./stylesEditor";

export interface NamedStyleEditorProps {
    selectedStyle: NamedStyle | undefined;
    setSelectedStyle: React.Dispatch<React.SetStateAction<NamedStyle | undefined>>;
    updateStyles: () => void;
};

export const NamedStyleEditor = (props: NamedStyleEditorProps) => {

    const onChangeHandler = (e: any) => {
        if (props.selectedStyle) {
            props.selectedStyle.selector = e.target.value;
            props.updateStyles();
        }
    };

    const containerStyle = {
        padding: "10px",
        margin: "5px"
    };

    const renderStyleEditor = (namedStyle: NamedStyle) => {
        return (
            <div>
                <div style={containerStyle}>
                    <label
                        htmlFor="selector"
                        className="formLabel"
                    >
                        selector
                    </label>
                    <input id="selector" name="selector" type="text" value={namedStyle.selector} onChange={onChangeHandler} />
                </div>
                <StyleEditor styles={namedStyle.properties} saveHandler={props.updateStyles} />
            </div>
        );
    };

    return (
        <div>
            {props.selectedStyle
                ?
                renderStyleEditor(props.selectedStyle)
                : ""
            }
        </div>
    );
}
