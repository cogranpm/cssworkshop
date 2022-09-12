import React, { Dispatch, ReactNode } from "react";
import { HtmlElement } from "~src/models/htmlElement";
import { BuilderBar } from "./builderBar";
import { calculateListItemClassName } from "~src/models/uiHelpers";
import { Box2Fill, FileFont, Info } from "react-bootstrap-icons";
import { VOID_ELEMENTS } from "~src/models/elements";
import { HtmlDocument } from "~src/models/htmlDocument";
import { builderContainerStyle, listContainerStyle, columnStyle, transparentBackground } from "~src/shared/styles";

export type BuilderProps = {
    document: HtmlDocument | undefined;
    selectedElement: HtmlElement | undefined;
    setSelectedElement: Dispatch<React.SetStateAction<HtmlElement | undefined>>;
    saveHandler: (element: HtmlElement) => void;
    trashHandler: (element: HtmlElement | undefined, isRoot: boolean) => void;
    addHandler: (element: HtmlElement | undefined, isRoot: boolean) => void;
    updateElements: () => void;
};

const itemStyle = {
    display: "grid",
    gridTemplateColumns: "20px 1fr",
    verticalAlign: "middle",
    width: "98%",
    backgroundColor: "transparent"
};


export const HtmlBuilder = (props: BuilderProps) => {
    const unselectAllSiblings = (startingElement: HtmlElement) => {
        for (const other of startingElement.children) {
            other.selected = false;
            unselectAllSiblings(other);
        }
    };

    const selectItem = async (element: HtmlElement) => {
        if (element.parent) {
            element.parent.selectedChild = element;
            unselectAllSiblings(element.parent);
        } else {
            if (props.document) {
                for (const other of props.document.elements) {
                    other.selected = false;
                    unselectAllSiblings(other);
                }
            }
        }
        element.selected = true;
        props.setSelectedElement(element);
        props.updateElements();
    };

    const renderItem = (element: HtmlElement) => {
        return (
            <li
                className={calculateListItemClassName(element)}
                key={element.id}
                onClick={() => selectItem(element)}
            >
                <div style={itemStyle}>
                    <div style={transparentBackground}>
                        {element.type === "textBody" ? <FileFont /> : (VOID_ELEMENTS.includes(element.type) ? <Info /> : <Box2Fill />)}
                    </div>
                    <div style={transparentBackground}>
                        {element.type}
                    </div>
                </div>
            </li >
        );
    };

    const renderColumn = (
        elements: HtmlElement[],
        parent: HtmlElement | undefined,
        isRoot: boolean
    ): ReactNode => {
        return (
            <>
                <div style={columnStyle}>
                    <BuilderBar
                        isRoot={isRoot}
                        addHandler={props.addHandler}
                        trashHandler={props.trashHandler}
                        element={parent ? parent : props.selectedElement}
                    />
                    <div style={listContainerStyle}>
                        <ul className="elementList">
                            {elements.map((element) => renderItem(element))}
                        </ul>
                    </div>
                </div>
                {elements.map((element) => {
                    return element.selected
                        ? renderColumn(element.children, element, false)
                        : "";
                })}
            </>
        );
    };

    return (
        <div style={{ margin: "0", padding: "0", height: "100%" }}>
            <div style={builderContainerStyle}>
                {props.document ?
                    renderColumn(props.document.elements, undefined, true)
                    :
                    ""}

            </div>
        </div>
    );
};
