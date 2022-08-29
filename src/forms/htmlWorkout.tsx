import React, { useState, useEffect } from 'react';
import { HtmlBuilder } from './htmlBuilder';
import { NamedStyleBuilder } from './namedStylesBuilder';
import { NamedStyleEditor } from './namedStyleEditor';
import { HtmlWorkoutlist } from "./htmlWorkoutlist";
import { HtmlPreview } from './htmlPreview';
import { HtmlElement } from "~src/models/htmlElement";
import { HtmlDocument } from "~src/models/htmlDocument";
import { NamedStyle } from "~src/models/namedStyle";
import { divElement } from "~src/models/elementConstants";
import { ElementEditor } from './htmlEditor';
import {
    ReflexContainer,
    ReflexSplitter,
    ReflexElement
} from 'react-reflex';
import { makeElement, makeRootElement } from '~src/models/htmlElementFactory';
import { EditorType } from '~src/models/uiHelpers';
import { BuilderHeader } from "./builderHeader";
import { testData } from "~src/models/htmlDocumentFactory";
import { borderDef } from '~src/shared/styles';

export interface HtmlWorkoutProps {
    document: HtmlDocument | undefined;
}

const builderSectionStyle = {
    display: "grid",
    gridTemplateColumns: "280px 1fr",
    borderBottom: borderDef,
    borderLeft: borderDef
};

const builderContentStyle = {
    padding: "0",
    borderLeft: borderDef
};

export const HtmlWorkout = (props: HtmlWorkoutProps) => {

    const [documents, setDocuments] = useState(testData);
    const [doc, setDoc] = useState<HtmlDocument | undefined>(props.document);
    const [selectedElement, setSelectedElement] = useState<HtmlElement | undefined>(undefined);
    const [selectedStyle, setSelectedStyle] = useState<NamedStyle | undefined>(undefined);
    const [activeEditor, setActiveEditor] = useState(EditorType.Elements);
    const [title, setTitle] = useState(doc ? doc.title : "");


    useEffect(() => {
        if (doc) {
            if (title !== doc.title) {
                doc.title = title;
            }
        }
    }, [title]);

  useEffect(() => {
      updateDocuments();
  }, [doc]);

    const updateDocuments = () => {
        const updatedDocuments = documents.map((document) => {
            if (doc && document.id === doc.id) {
                return doc;
            } else {
                return document;
            }
        });
        setDocuments(updatedDocuments);
    };

    const trashHandler = async (element: HtmlElement | undefined, isRoot: boolean) => {
        if (element) {
            if (!isRoot && selectedElement) {
                const updatedElements = element.children.filter((e) => e.id !== selectedElement.id);
                element.children = updatedElements;
                updateElements();
            } else {
                if (doc) {
                    setDoc({ ...doc, elements: doc.elements.filter((deletedElement) => deletedElement.id !== element.id) });
                }
            }
            setSelectedElement(undefined);
        }
    };

    const addHandler = async (element: HtmlElement | undefined, isRoot: boolean) => {
        if (!isRoot && element) {
            const newElement = makeElement(divElement, element);
            updateElements();
        } else {
            if (doc) {
                setDoc({ ...doc, elements: [...doc.elements, makeRootElement(divElement, doc.elements.length)] });
            }
        }
    };

    const saveHandler = (element: HtmlElement) => {
        if (element) {
            updateElements();
        }
    };

    const updateElements = () => {
        if (selectedElement && doc) {
            const updatedElements = doc.elements.map((a) => {
                if (a.id === selectedElement.id) {
                    return { ...selectedElement };
                }
                else {
                    return a;
                }
            });
            setDoc({ ...doc, elements: updatedElements });
        }
    };

    const updateStyles = () => {
        if (selectedStyle && doc) {
            const updatedStyles = doc.namedStyles.map((namedStyle) => {
                if (namedStyle.id === selectedStyle.id) {
                    return { ...selectedStyle };
                } else {
                    return namedStyle;
                }
            });
            setDoc({ ...doc, namedStyles: updatedStyles });
        }
    };

    const onChangeTitle = async (e: any) => {
        setTitle((current) => e.target.value);
    };

    return (
        <div className="workoutContainer">
            <ReflexContainer orientation="vertical">
                <ReflexElement className="left-pane" minSize={200}>
                    <div className="pane-content leftPanel">
                        <ReflexContainer orientation="horizontal">
                            <ReflexElement className="left-pane" minSize={200}>
                                <div className="pane-content">
                                    <div style={builderSectionStyle}>
                                        <HtmlWorkoutlist
                                            documents={documents}
                                            setDocuments={setDocuments}
                                            selectedDocument={doc}
                                            setSelectedDocument={setDoc} />
                                        <div style={builderContentStyle}>
                                            <BuilderHeader
                                                doc={doc}
                                                setActiveEditor={setActiveEditor}
                                                activeEditor={activeEditor}
                                                onChangeTitle={onChangeTitle}
                                            />
                                            {activeEditor === EditorType.Elements ?
                                                <HtmlBuilder
                                                    document={doc}
                                                    selectedElement={selectedElement}
                                                    setSelectedElement={setSelectedElement}
                                                    addHandler={addHandler}
                                                    trashHandler={trashHandler}
                                                    saveHandler={saveHandler}
                                                    updateElements={updateElements}
                                                />
                                                :
                                                <NamedStyleBuilder
                                                    doc={doc}
                                                    selectedStyle={selectedStyle}
                                                    setSelectedStyle={setSelectedStyle}
                                                    updateDoc={setDoc}
                                                />
                                            }
                                        </div>
                                    </div>
                                </div>
                            </ReflexElement>
                            <ReflexSplitter propagate={true} />
                            <ReflexElement className="right-pane">
                                <div className="content-pane">
                                    <HtmlPreview doc={doc} />
                                </div>
                            </ReflexElement>
                        </ReflexContainer>
                    </div>
                </ReflexElement>
                <ReflexSplitter propagate={true} />
                <ReflexElement className="right-pane" >
                    <div className="pane-content" style={{ height: "100%" }}>
                        {selectedElement && activeEditor === EditorType.Elements ?
                            <ElementEditor
                                element={selectedElement}
                                saveHandler={saveHandler}
                            /> : (activeEditor === EditorType.NamedStyles ?
                                <NamedStyleEditor
                                    selectedStyle={selectedStyle}
                                    setSelectedStyle={setSelectedStyle}
                                    updateStyles={updateStyles} /> : "")}
                    </div>
                </ReflexElement>
            </ReflexContainer>
        </div>
    )
};