import React from "react";
import { HtmlDocument } from "~src/models/htmlDocument";
import { NamedStyle } from "~src/models/namedStyle";
import { Plus, Trash } from 'react-bootstrap-icons';
import { make } from "~src/models/namedStyleFactory";
import {
    builderContainerStyle, listContainerStyle,
    columnStyle, builderBarStyle, buttonIconStyle,
    imageButtonStyle
} from "~src/shared/styles";

export interface NamedStyleBuilderProps {
    doc: HtmlDocument | undefined;
    selectedStyle: NamedStyle | undefined;
    setSelectedStyle: React.Dispatch<React.SetStateAction<NamedStyle | undefined>>;
    updateDoc: React.Dispatch<React.SetStateAction<HtmlDocument | undefined>>;
};

export const NamedStyleBuilder = (props: NamedStyleBuilderProps) => {


    const addHandler = (e: any) => {
        if (props.doc) {
            const newElement = make();
            props.updateDoc({ ...props.doc, namedStyles: [...props.doc.namedStyles, newElement] });
        }
    };

    const trashHandler = (e: any) => {
        if (props.doc) {
            if (props.selectedStyle) {
                const updatedElements = props.doc.namedStyles.filter(
                    (element) => element.id !== (props.selectedStyle ? props.selectedStyle.id : ""));
                props.updateDoc({ ...props.doc, namedStyles: updatedElements });
                props.setSelectedStyle(undefined);
            }
        }
    };

    const selectItem = (element: NamedStyle) => {
        props.setSelectedStyle(element);
    };

    const renderItem = (element: NamedStyle) => {
        return (
            <li
                className={"element " + ((props.selectedStyle && props.selectedStyle.id === element.id) ? "selectedElement" : "normalElement")}
                key={element.id}
                onClick={() => selectItem(element)}
            >
                {element.selector}
            </li >
        );
    };


    return (
        <div>
            <div style={columnStyle}>
                <div style={builderBarStyle}>
                    <button
                        type="button"
                        onClick={addHandler}
                        disabled={props.doc === undefined}
                        style={imageButtonStyle}
                    >
                        add
                        <Plus style={buttonIconStyle} />
                    </button>
                    <button
                        type="button"
                        disabled={(props.selectedStyle === undefined || props.doc === undefined)}
                        onClick={trashHandler}
                        style={imageButtonStyle}
                    >
                        trash
                        <Trash style={buttonIconStyle} /></button>
                </div>
                {props.doc
                    ?
                    <div style={listContainerStyle}>
                        <ul className="elementList">
                            {props.doc.namedStyles.map((namedStyle) => renderItem(namedStyle))}
                        </ul>
                    </div>
                    :
                    ""
                }
            </div>
        </div>
    );
};
