import React, { useState } from "react";
import { cssGroups, StyleDefinition, styleDefs } from "~src/models/styles";
import { parseSyntax } from "~src/shared/webParsing";
import { Gear } from "react-bootstrap-icons";
import { labelStyle, listStyle } from "~src/shared/styles";

export type StyleEditorProps = {
    styles: Map<string, string>;
    saveHandler: () => void;
};

export const StyleEditor = (props: StyleEditorProps) => {

    //help button was pushed on it
    const [selectedItem, setSelectedItem] = useState<string>("");
    const [group, setGroup] = useState<string>("");

    const getListLength = () => {
        return (group.length > 0) ? styleDefs.length : styleDefs.length / 6;
    };

    const getHelpValues = (styleDef: StyleDefinition): React.ReactNode[] => {
        const values = parseSyntax(styleDef.syntax).map((helpValue) => {
            return (
                <li>
                    <button
                        onClick={(e) => pushHelpValue(e, styleDef.name, helpValue)}
                    >
                        {helpValue}
                    </button>
                </li>)
        });
        return values;
    };

    const pushHelpValue = (e: any, styleName: string, helpValue: string) => {
        e.preventDefault();
        props.styles.set(styleName, helpValue);
        props.saveHandler();
        setSelectedItem("");
    };

    const onHelp = (e: any, styleName: string) => {
        //show a panel with helper stuff
        e.preventDefault();
        if (selectedItem === styleName) {
            setSelectedItem("");
        } else {
            setSelectedItem(styleName);
        }
    };

    const handleChange = (e: any, styleName: string) => {
        const value = e.target.value;
        props.styles.set(styleName, value);
        props.saveHandler();
    };

    const containerStyle = {
        marginBottom: "5px"
    };


    const renderStyle = (styleDef: StyleDefinition) => {
        return (
            <li>
                <div style={containerStyle}>
                    <label
                        htmlFor={styleDef.name}
                        className="formLabel"
                    >
                        {`${styleDef.name}`}
                    </label>
                    <input
                        type="text"
                        name={styleDef.name}
                        id={`idx-${styleDef.name}`}
                        onChange={(e) => handleChange(e, styleDef.name)}
                        value={(props.styles.get(styleDef.name)) || ""}
                    />
                    <button onClick={(e) => onHelp(e, styleDef.name)}><Gear /></button>
                    <span
                        className="helpPanel"
                        style={{ display: selectedItem === styleDef.name ? "flex" : "none" }}
                        id={`help-${styleDef.name}`}>
                        <ul style={listStyle}>
                            {getHelpValues(styleDef)}
                            <li>
                                <a href={styleDef.mdnUrl} target="_blank">MDN</a>
                            </li>
                        </ul>
                    </span>
                </div>
            </li>);
    };

    const renderLists = (range: number[]) => {
        return range.map((idx) => {
            return (
                <ul>
                    {
                        styleDefs.slice(
                            (getListLength() * (idx - 1)), getListLength() * idx)
                            .map((styleDef) => shouldRenderStyle(styleDef) ? renderStyle(styleDef) : "")
                    }
                </ul>
            )
        })
    };

    const shouldRenderStyle = (styleDef: StyleDefinition): boolean => {
        if (group.length > 0) {
            return (styleDef.groups.includes(group));
        } else {
            return true;
        }
    }

    const renderPickerButtons = () => {
        return cssGroups.map((x) => {
            return (
                <span>
                    <button
                        style={labelStyle}
                        className={x === group ? "toggled" : ""}
                        onClick={(e) => selectGroup(e, x)}>
                        {x}
                    </button>
                </span>
            );
        });
    };

    const selectGroup = (e: any, selectedGroup: string) => {
        e.preventDefault();
        if (selectedGroup === group) {
            setGroup("");
        } else {
            setGroup(selectedGroup);
        }
    }

    const pickerButtonGridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)"
    };

    return (
        <>
            <div style={pickerButtonGridStyle}>
                {renderPickerButtons()}
            </div>
            {(group.length > 0)
                ?
                <div className="styleList">
                    {renderLists([1])}
                </div>

                :
                <>
                    <div className="styleList">
                        {renderLists([1, 2])}
                    </div>
                    <div className="styleList">
                        {renderLists([3, 4])}
                    </div>
                    <div className="styleList">
                        {renderLists([5, 6])}
                    </div>
                </>
            }
        </>
    );
};
