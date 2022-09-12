import React from "react";
import { HtmlDocument } from "~src/models/htmlDocument";
import { borderDef, labelFont, labelFontSize, labelStyle, tabsStyle, tabLabelStyle } from "~src/shared/styles";

export interface DocumentBuilderProps {
    doc: HtmlDocument | undefined;
    setDoc: (doc: HtmlDocument) => void;
}

const titleEditorStyle = {
    marginTop: "15px",
    padding: "5px"
};

const textAreaLabelStyle = { ...labelStyle, ...{ verticalAlign: "middle" } };

const inputStyle = {
    padding: "0 10px",
    margin: "0",
    boxSizing: "border-box",
    fontFamily: "inherit",
    fontSize: "100%"
};

const textAreaStyle = {
    ...inputStyle, ...{
        verticalAlign: "middle",
    }
};

const formStyle = {
    position: "relative",
    height: "400px",
    padding: "1em",
    background: "#FFF"
};


export const DocumentBuilder = (props: DocumentBuilderProps) => {

    const onChangeTitle = (e: any) => {
        if (props.doc) {
            props.doc.title = e.target.value;
            props.setDoc({ ...props.doc });
        }
    };

    const onChangeDescription = (e: any) => {
        if (props.doc) {
            props.doc.description = e.target.value;
            props.setDoc({ ...props.doc });
        }

    };

    return (

        <div style={titleEditorStyle}>
            <form style={formStyle}>
                <label className="formLabel" style={labelStyle} htmlFor="documentTitle">
                    Document Title
                </label>
                <input
                    disabled={props.doc === undefined}
                    name="documentTitle"
                    type="text"
                    style={inputStyle}
                    onChange={onChangeTitle}
                    value={props.doc ? props.doc.title : ""} />
                <p />
                <label className="formLabel" style={textAreaLabelStyle} htmlFor="description">
                    Description
                </label>
                <textarea
                    disabled={props.doc === undefined}
                    style={textAreaStyle}
                    name="description"
                    onChange={onChangeDescription}
                    cols={40}
                    rows={15}
                    value={props.doc ? props.doc.description : ""} />

            </form>
        </div>
    );
};
