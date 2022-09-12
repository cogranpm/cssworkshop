import React from 'react';
import { Plus, Trash, Hammer } from 'react-bootstrap-icons';
import { HtmlElement } from "~src/models/htmlElement";
import { builderBarStyle, buttonIconStyle, imageButtonStyle } from '~src/shared/styles';


export type BuilderBarProps = {
    isRoot: boolean;
    element: HtmlElement | undefined;
    addHandler: (e: HtmlElement | undefined, isRoot: boolean) => void;
    trashHandler: (e: HtmlElement | undefined, isRoot: boolean) => void;
}


export const BuilderBar = (props: BuilderBarProps) => {
    return (
        <div style={builderBarStyle}>
            <button
                type="button"
                onClick={() => props.addHandler(props.element, props.isRoot)}
                style={imageButtonStyle}
            >
                add
                <Plus style={buttonIconStyle} />
            </button>
            <button
                type="button"
                disabled={(props.element === undefined)}
                onClick={() => props.trashHandler(props.element, props.isRoot)}
                style={imageButtonStyle}
            >
                trash
                <Trash style={buttonIconStyle} /></button>
        </div>
    )
};
