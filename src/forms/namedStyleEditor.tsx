import React from "react";
import { NamedStyle } from "~src/models/namedStyle";
import { labelStyle } from "~src/shared/styles";
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
        display: "grid",
        gridTemplateColumns: "85px 1fr",
        padding: "10px",
        margin: "5px 0 5px 0"
    };

    const renderStyleEditor = (namedStyle: NamedStyle) => {
        return (
            <div style={{ margin: "0", padding: "0" }}>
                <div style={containerStyle}>
                    <label
                        htmlFor="selector"
                        style={labelStyle}
                    >
                        selector:
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
