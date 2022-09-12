export const borderDef = "1px solid darkgrey";
export const labelFont = "'Roboto', san serif";
export const labelFontSize = "13px";

export const backgroundColor = "#e7eaed";

export const transparentBackground = { backgroundColor: "transparent" };

export const buttonIconStyle = { verticalAlign: "middle" };

export const labelStyle = {
    fontFamily: labelFont,
    fontSize: labelFontSize
};

export const sectionHeaderStyle = {
    fontFamily: "'Roboto', san serif",
    fontSize: "15px",
    fontWeight: "bold"
};

export const listContainerStyle = {
    height: "100%"
};

export const listStyle = {
    listStyleType: "none",
    paddingLeft: "0",
    margin: "5px"
};

export const listItemStyle = {
    margin: "2px 0",
    padding: "4px"
};

export const columnStyle = {
    marginTop: "0",
    height: "100%",
    padding: "15px",
    borderBottom: borderDef,
    borderRight: borderDef
};

export const builderBarStyle = {
    display: "inline-grid",
    gridTemplateColumns: "60px 60px",
    columnGap: "5px",
    background: "transparent",
    margin: "2px 0 5px 5px"
};

export const builderContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(6, 200px)",
    gridTemplateRows: "auto",
};

export const tabsStyle = {
    display: "inline-grid",
    gridTemplateColumns: "repeat(auto-fill, 125px)",
    height: "100%",
    width: "100%",
    padding: "0",
    margin: "0",
    justifyContent: "start"
};


export const tabLabelStyle = (selected: boolean) => {
    return {
        cursor: "pointer",
        fontFamily: labelFont,
        fontSize: labelFontSize,
        fontWeight: selected ? "bold" : "normal",
        backgroundColor: selected ? "transparent" : backgroundColor,
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        borderTop: borderDef,
        borderLeft: borderDef,
        borderRight: borderDef,
        padding: "2px",
        height: "25px",
        lineHeight: "25px",
        width: "120px",
        textAlign: "center"
    }
};

export const imageButtonStyle = {
    verticalAlign: "middle",
    fontFamily: labelFont,
};
