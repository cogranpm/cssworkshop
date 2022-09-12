import React from "react";
import { HtmlDocument } from "~src/models/htmlDocument";
import { borderDef, labelFont, labelFontSize, labelStyle, tabsStyle, tabLabelStyle } from "~src/shared/styles";
import { EditorType } from '~src/models/uiHelpers';

interface BuilderHeaderProps {
    doc: HtmlDocument | undefined;
    activeEditor: EditorType;
    setActiveEditor: React.Dispatch<React.SetStateAction<EditorType>>;
    onChangeTitle: (e: any) => void;
}

const builderTopbarStyle = {
  width: "100%",
    padding: "0",
    margin: "0",
    display: "grid",
    gridTemplateColumns: "250px 1fr",
    alignContent: "center",
};

const titleEditorStyle = {
    marginLeft: "200px"
};



export const BuilderHeader = (props: BuilderHeaderProps) => {
    return (
        <div style={builderTopbarStyle}>
            <div style={tabsStyle}>
                <label
                    style={tabLabelStyle(props.activeEditor === EditorType.Elements)}
                    onClick={(e: any) => props.setActiveEditor(EditorType.Elements)}
                >
                    Elements
                </label>
                <label
                    style={tabLabelStyle(props.activeEditor === EditorType.NamedStyles)}
                    onClick={(e: any) => props.setActiveEditor(EditorType.NamedStyles)}
                >
                    Named Styles
                </label>
            </div>
            <div style={titleEditorStyle}>
                <label className="formLabel" style={labelStyle} htmlFor="documentTitle">
                    Document Title
                </label>
                <input
                    disabled={props.doc === undefined}
                    name="documentTitle"
                    type="text"
                    onChange={(e: any) => props.onChangeTitle(e)}
                    value={props.doc ? props.doc.title : ""} />
            </div>
        </div>
    );
}
