import React, { useState } from "react";
import { HtmlDocument } from "~src/models/htmlDocument";
import { make } from "~src/models/htmlDocumentFactory";
import { Plus, Trash, FileEarmarkFill } from 'react-bootstrap-icons';
import { borderDef, builderBarStyle, backgroundColor, imageButtonStyle, buttonIconStyle, labelStyle, labelFont } from "~src/shared/styles";
import { remove } from "~src/repository/workoutRepository";

export interface HtmlWorkoutListProps {
    documents: HtmlDocument[];
    setDocuments: React.Dispatch<React.SetStateAction<HtmlDocument[]>>;
    selectedDocument: HtmlDocument | undefined;
    setSelectedDocument: React.Dispatch<React.SetStateAction<HtmlDocument | undefined>>;
}

const backgroundStyle = {
    backgroundColor: backgroundColor,
    padding: "14px",
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

    const trashHandler = async () => {
        if (props.selectedDocument) {
            await remove(props.selectedDocument.id);
            const docCopy = props.selectedDocument as HtmlDocument;
            props.setDocuments(props.documents.filter((doc) => doc.id !== docCopy.id));
            props.setSelectedDocument(undefined);
        }
    };

    return (
        <div style={backgroundStyle}>
            <div style={{ padding: "5px" }}>
                <label style={{ fontFamily: labelFont, fontSize: "13pt", marginRight: "23px" }}>
                    Documents
                </label>
                <div style={builderBarStyle}>
                    <button
                        type="button"
                        onClick={() => addHandler()}
                        style={imageButtonStyle}
                    >
                        add
                        <Plus style={buttonIconStyle} />
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
            </div>
            <div style={childContainerStyle}>
                <ul style={listStyle}>
                    {props.documents.map((item) => {
                        return (
                            <li
                                key={item.id}
                                onClick={(e: any) => onSelectItem(item)}
                                style={{
                                    width: "100%",
                                    fontFamily: "'Roboto', sans-serif",
                                    fontSize: "13pt",
                                    cursor: "hand",
                                    padding: "4px",
                                    color: "#000000",
                                    textAlign: "left",
                                    height: "25px",
                                    backgroundColor: (props.selectedDocument && props.selectedDocument.id === item.id ? "#5073e9" : "transparent")
                                }}
                            >
                                <div style={{ verticalAlign: "middle" }}>
                                    <span style={{ verticalAlign: "middle", marginRight: "2px" }}><FileEarmarkFill /></span>
                                    <span>
                                        <a href="#"
                                            style=
                                            {{
                                              textDecoration: "none",
                                              color: (props.selectedDocument && props.selectedDocument.id === item.id ? "#FFF" : "#000000") }}
                                        >
                                            {item.title}
                                        </a>
                                    </span>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div >
    );
};
