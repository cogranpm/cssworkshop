import React, { useState } from "react";
import { HtmlDocument } from "~src/models/htmlDocument";
import { make } from "~src/models/htmlDocumentFactory";
import { Plus, Trash } from 'react-bootstrap-icons';
import { borderDef, builderBarStyle, backgroundColor, imageButtonStyle, buttonIconStyle } from "~src/shared/styles";

export interface HtmlWorkoutListProps {
    documents: HtmlDocument[];
    setDocuments: React.Dispatch<React.SetStateAction<HtmlDocument[]>>;
    selectedDocument: HtmlDocument | undefined;
    setSelectedDocument: React.Dispatch<React.SetStateAction<HtmlDocument | undefined>>;
}

const backgroundStyle = {
    backgroundColor: backgroundColor,
    padding: "4px",
    margin: "0",
    borderTop: borderDef
};

const childContainerStyle = {
    backgroundColor: "transparent",
    margin: "5px"
};

const listStyle = {
    backgroundColor: backgroundColor,
    listStyleType: "none",
    margin: "0",
    padding: "0"
};


export const HtmlWorkoutlist = (props: HtmlWorkoutListProps) => {

    const onSelectItem = (item: HtmlDocument) => {
        props.setSelectedDocument(item);
    };

    const addHandler = () => {
        const newDoc = make("untitled", "", [], []);
        props.setDocuments([...props.documents, newDoc]);
    };

    const trashHandler = () => {
        if (props.selectedDocument) {
            const docCopy = props.selectedDocument as HtmlDocument;
            props.setDocuments(props.documents.filter((doc) => doc.id !== docCopy.id));
            props.setSelectedDocument(undefined);
        }
    };

    return (
        <div style={backgroundStyle}>
            <div style={builderBarStyle}>
                <button
                    type="button"
                    onClick={() => addHandler()}
                    style={imageButtonStyle}
                >
                    add
                    <Plus style={buttonIconStyle}/>
                </button>
                <button
                    type="button"
                    disabled={(props.selectedDocument === undefined)}
                    onClick={() => trashHandler()}
                    style={imageButtonStyle}
                >
                    trash
                    <Trash style={buttonIconStyle} /></button>
            </div>
            <div style={childContainerStyle}>
                <ul style={listStyle}>
                    {props.documents.map((item) => {
                        return (
                            <li
                                key={item.id}
                                className={`element ${props.selectedDocument && props.selectedDocument.id === item.id ? 'selectedElement' : 'normalElement'}`}
                                onClick={(e: any) => onSelectItem(item)}
                            >
                                {item.title}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div >
    );
};
