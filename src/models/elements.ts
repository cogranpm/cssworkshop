import { ANCHOR_ATTRIBUTES, AREA_ATTRIBUTES, AUDIO_ATTRIBUTES, BASE_ATTRIBUTES, BLOCK_QUOTE_ATTRIBUTES, BUTTON_ATTRIBUTES, CANVAS_ATTRIBUTES, COL_ATTRIBUTES, COL_GROUP_ATTRIBUTES, DATA_ATTRIBUTES, DEL_ATTRIBUTES, DETAILS_ATTRIBUTES, DIALOG_ATTRIBUTES, EMBED_ATTRIBUTES, FIELDSET_ATTRIBUTES, FORM_ATTRIBUTES, IFRAME_ATTRIBUTES, IMG_ATTRIBUTES, INPUT_ATTRIBUTES, INS_ATTRIBUTES, LABEL_ATTRIBUTES, LINK_ATTRIBUTES, LI_ATTRIBUTES, MAP_ATTRIBUTES, MENU_ATTRIBUTES, META_ATTRIBUTES, METER_ATTRIBUTES, OBJECT_ATTRIBUTES, OL_ATTRIBUTES, OPTGROUP_ATTRIBUTES, OPTION_ATTRIBUTES, OUTPUT_ATTRIBUTES, PROGRESS_ATTRIBUTES, SCRIPT_ATTRIBUTES, SELECT_ATTRIBUTES, SLOT_ATTRIBUTES, SOURCE_ATTRIBUTES, STYLE_ATTRIBUTES, TABLE_ATTRIBUTES, TD_ATTRIBUTES, TEXTAREA_ATTRIBUTES, TH_ATTRIBUTES, TRACK_ATTRIBUTES, VIDEO_ATTRIBUTES } from "./attributes";

export const TEXT_BODY_ELEMENT = "textBody";
export const VOID_ELEMENTS = [
    "area",
    "base",
    "br",
    "col",
    "command",
    "embed",
    "hr",
    "img",
    "input",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
];


export const TABLE_ELEMENTS = new Map<string, string[]>(
    [
        ["caption", []],
        ["col", COL_ATTRIBUTES],
        ["colgroup", COL_GROUP_ATTRIBUTES],
        ["table", TABLE_ATTRIBUTES],
        ["tbody", []],
        ["td", TD_ATTRIBUTES],
        ["tfoot", []],
        ["th", TH_ATTRIBUTES],
        ["thead", []],
        ["tr", []],
    ]
);

export const FORM_ELEMENTS = new Map<string, string[]>(
    [
        ["button", BUTTON_ATTRIBUTES],
        ["datalist", []],
        ["fieldset", FIELDSET_ATTRIBUTES],
        ["form", FORM_ATTRIBUTES],
        ["input", INPUT_ATTRIBUTES],
        ["label", LABEL_ATTRIBUTES],
        ["legend", []],
        ["meter", METER_ATTRIBUTES],
        ["optgroup", OPTGROUP_ATTRIBUTES],
        ["option", OPTION_ATTRIBUTES],
        ["output", OUTPUT_ATTRIBUTES],
        ["progress", PROGRESS_ATTRIBUTES],
        ["select", SELECT_ATTRIBUTES],
        ["textarea", TEXTAREA_ATTRIBUTES]
    ]
);

export const SCRIPTING_ELEMENTS = new Map<string, string[]>(
    [
        ["canvas", CANVAS_ATTRIBUTES],
        ["noscript", []],
        ["script", SCRIPT_ATTRIBUTES]
    ]
);

export const METADATA_ELEMENTS = new Map<string, string[]>(
    [
        ["base", BASE_ATTRIBUTES],
        ["head", []],
        ["link", LINK_ATTRIBUTES],
        ["meta", META_ATTRIBUTES],
        ["style", STYLE_ATTRIBUTES],
        ["title", []]
    ]
);

export const SECTIONING_ELEMENTS = new Map<string, string[]>(
    [
        ["body", []],
        ["address", []],
        ["article", []],
        ["aside", []],
        ["footer", []],
        ["header", []],
        ["h1", []],
        ["h2", []],
        ["h3", []],
        ["h4", []],
        ["h5", []],
        ["h6", []],
        ["main", []],
        ["nav", []],
        ["section", []]
    ]
);

export const TEXT_ELEMENTS = new Map<string, string[]>(
    [
        ["blockquote", BLOCK_QUOTE_ATTRIBUTES],
        ["dd", []],
        ["div", []],
        ["dl", []],
        ["dt", []],
        ["figcaption", []],
        ["figure", []],
        ["hr", []],
        ["li", LI_ATTRIBUTES],
        ["menu", MENU_ATTRIBUTES],
        ["ol", OL_ATTRIBUTES],
        ["p", []],
        ["pre", []],
        ["ul", []]
    ]
);

export const INLINE_TEXT_ELEMENTS = new Map<string, string[]>(
    [
        ["a", ANCHOR_ATTRIBUTES],
        ["abbr", []],
        ["b", []],
        ["bdi", []],
        ["bdo", []],
        ["br", []],
        ["cite", []],
        ["code", []],
        ["data", DATA_ATTRIBUTES],
        ["dfn", []]
    ]
);

export const INLINE_TEXT_ELEMENTS_A = new Map<string, string[]>(
    [
        ["em", []],
        ["i", []],
        ["kbd", []],
        ["mark", []],
        ["q", []],
        ["rp", []],
        ["rt", []],
        ["ruby", []],
        ["s", []]
    ]
);

export const INLINE_TEXT_ELEMENTS_B = new Map<string, string[]>(
    [
        ["samp", []],
        ["small", []],
        ["span", []],
        ["strong", []],
        ["sub", []],
        ["sup", []],
        ["time", []],
        ["u", []],
        ["var", []],
        ["wbr", []]
    ]
);

export const IMAGE_MULTIMEDIA_ELEMENTS = new Map<string, string[]>(
    [
        ["area", AREA_ATTRIBUTES],
        ["audio", AUDIO_ATTRIBUTES],
        ["img", IMG_ATTRIBUTES],
        ["map", MAP_ATTRIBUTES],
        ["track", TRACK_ATTRIBUTES],
        ["video", VIDEO_ATTRIBUTES]
    ]
);

export const EMBEDDED_ELEMENTS = new Map<string, string[]>(
    [
        ["embed", EMBED_ATTRIBUTES],
        ["iframe", IFRAME_ATTRIBUTES],
        ["object", OBJECT_ATTRIBUTES],
        ["picture", []],
        ["portal", []],
        ["source", SOURCE_ATTRIBUTES]
    ]
);


export const DEMARCATING_ELEMENTS = new Map<string, string[]>(
    [
        ["del", DEL_ATTRIBUTES],
        ["ins", INS_ATTRIBUTES]
    ]
);

export const INTERACTIVE_ELEMENTS = new Map<string, string[]>(
    [
        ["details", DETAILS_ATTRIBUTES],
        ["dialog", DIALOG_ATTRIBUTES],
        ["summary", []]
    ]
);

export const WEBCOMPONENT_ELEMENTS = new Map<string, string[]>(
    [
        ["slot", SLOT_ATTRIBUTES],
        ["template", []]
    ]
);


export const ALL_ELEMENTS = new Map([
    ...DEMARCATING_ELEMENTS,
    ...EMBEDDED_ELEMENTS,
    ...FORM_ELEMENTS,
    ...IMAGE_MULTIMEDIA_ELEMENTS,
    ...INLINE_TEXT_ELEMENTS,
    ...INLINE_TEXT_ELEMENTS_A,
    ...INLINE_TEXT_ELEMENTS_B,
    ...INTERACTIVE_ELEMENTS,
    ...METADATA_ELEMENTS,
    ...SCRIPTING_ELEMENTS,
    ...SECTIONING_ELEMENTS,
    ...TABLE_ELEMENTS,
    ...TEXT_ELEMENTS,
    ...WEBCOMPONENT_ELEMENTS,
]);

export const SVG_ELEMENTS = [
    "svg",
    "a",
    "animate",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "defs",
    "desc",
    "discard",
    "ellipse",
    "feBlend",
    "feColorMatrix",
    "feCompositeTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLightning",
    "feSpotLight",
    "feTitle",
    "feTurbulence",
    "filter",
    "foreignObject",
    "g",
    "hatch",
    "hatchpath",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "metadata",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "script",
    "set",
    "stop",
    "style",
    "switch",
    "symbol",
    "text",
    "textPath",
    "title",
    "tspan",
    "use",
    "view"
];

export const MATH_ELEMENTS = [
    "math",
    "maction",
    "menclose",
    "merror",
    "mfenced",
    "mfac",
    "mi",
    "multiscripts",
    "mn",
    "mo",
    "mover",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "ms",
    "mspace",
    "msqrt",
    "mstyle",
    "msub",
    "msup",
    "msubsup",
    "mtable",
    "mtd",
    "mtext",
    "mtr",
    "munder",
    "munderover",
    "semantics",
    "annotation",
    "annotation-xml"
];


/*
  import {
    AnchorHTMLAttributes,
    DetailedHTMLFactory,
    ReactHTML,
    HTMLAttributes,
    BlockquoteHTMLAttributes,
    AreaHTMLAttributes,
    AudioHTMLAttributes,
    BaseHTMLAttributes,
    ScriptHTMLAttributes,
    SelectHTMLAttributes,
    SourceHTMLAttributes,
    StyleHTMLAttributes,
    TableHTMLAttributes,
    TdHTMLAttributes,
    TextareaHTMLAttributes,
    ThHTMLAttributes,
    TimeHTMLAttributes,
    TrackHTMLAttributes,
    VideoHTMLAttributes,
    WebViewHTMLAttributes,
    ButtonHTMLAttributes,
    CanvasHTMLAttributes,
    ColHTMLAttributes,
    ColgroupHTMLAttributes,
    DataHTMLAttributes,
    DelHTMLAttributes,
    DetailsHTMLAttributes,
    DialogHTMLAttributes,
    EmbedHTMLAttributes,
    FieldsetHTMLAttributes,
    FormHTMLAttributes,
    MenuHTMLAttributes,
    MetaHTMLAttributes,
    MeterHTMLAttributes,
    ObjectHTMLAttributes,
    OlHTMLAttributes,
    OptgroupHTMLAttributes,
    OptionHTMLAttributes,
    OutputHTMLAttributes,
    ParamHTMLAttributes,
    ProgressHTMLAttributes,
    QuoteHTMLAttributes,
    SlotHTMLAttributes,
    HtmlHTMLAttributes,
    IframeHTMLAttributes,
    ImgHTMLAttributes,
    InputHTMLAttributes,
    InsHTMLAttributes,
    KeygenHTMLAttributes,
    LabelHTMLAttributes,
    LiHTMLAttributes,
    LinkHTMLAttributes,
    MapHTMLAttributes
} from "react";
*/


/* next step is to use the react
   typescript definitions to lookup
   the attributes for an element
   so looking at these you can see the
   types of attributes per elements
   eg: AudioHTMLAttributes

*/

/*
export const videoAttrDefs: VideoHTMLAttributes<HTMLVideoElement> = {
    height: undefined,
    playsInline: undefined,
    poster: undefined,
    width: undefined,
    disablePictureInPicture: undefined,
    disableRemotePlayback: undefined
};

export const htmlDefs: ReactHTML = {
    a: {} as DetailedHTMLFactory<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
    abbr: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    address: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    area: {} as DetailedHTMLFactory<AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>,
    article: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    aside: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    audio: {} as DetailedHTMLFactory<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>,
    b: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    base: {} as DetailedHTMLFactory<BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>,
    bdi: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    bdo: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    big: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    blockquote: {} as DetailedHTMLFactory<BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>,
    body: {} as DetailedHTMLFactory<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>,
    br: {} as DetailedHTMLFactory<HTMLAttributes<HTMLBRElement>, HTMLBRElement>,
    button: {} as DetailedHTMLFactory<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    canvas: {} as DetailedHTMLFactory<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>,
    caption: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    cite: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    code: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    col: {} as DetailedHTMLFactory<ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>,
    colgroup: {} as DetailedHTMLFactory<ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>,
    data: {} as DetailedHTMLFactory<DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>,
    datalist: {} as DetailedHTMLFactory<HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>,
    dd: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    del: {} as DetailedHTMLFactory<DelHTMLAttributes<HTMLModElement>, HTMLModElement>,
    details: {} as DetailedHTMLFactory<DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>,
    dfn: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    dialog: {} as DetailedHTMLFactory<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>,
    div: {} as DetailedHTMLFactory<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    dl: {} as DetailedHTMLFactory<HTMLAttributes<HTMLDListElement>, HTMLDListElement>,
    dt: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    em: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    embed: {} as DetailedHTMLFactory<EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>,
    fieldset: {} as DetailedHTMLFactory<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>,
    figcaption: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    figure: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    footer: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    form: {} as DetailedHTMLFactory<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
    h1: {} as DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
    h2: {} as DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
    h3: {} as DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
    h4: {} as DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
    h5: {} as DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
    h6: {} as DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
    head: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLHeadElement>,
    header: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    hgroup: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    hr: {} as DetailedHTMLFactory<HTMLAttributes<HTMLHRElement>, HTMLHRElement>,
    html: {} as DetailedHTMLFactory<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>,
    i: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    iframe: {} as DetailedHTMLFactory<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>,
    img: {} as DetailedHTMLFactory<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
    input: {} as DetailedHTMLFactory<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    ins: {} as DetailedHTMLFactory<InsHTMLAttributes<HTMLModElement>, HTMLModElement>,
    kbd: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    keygen: {} as DetailedHTMLFactory<KeygenHTMLAttributes<HTMLElement>, HTMLElement>,
    label: {} as DetailedHTMLFactory<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>,
    legend: {} as DetailedHTMLFactory<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>,
    li: {} as DetailedHTMLFactory<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>,
    link: {} as DetailedHTMLFactory<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>,
    main: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    map: {} as DetailedHTMLFactory<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>,
    mark: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    menu: {} as DetailedHTMLFactory<MenuHTMLAttributes<HTMLElement>, HTMLElement>,
    menuitem: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    meta: {} as DetailedHTMLFactory<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>,
    meter: {} as DetailedHTMLFactory<MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>,
    nav: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    noscript: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    "object": {} as DetailedHTMLFactory<ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>,
    ol: {} as DetailedHTMLFactory<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>,
    optgroup: {} as DetailedHTMLFactory<OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>,
    option: {} as DetailedHTMLFactory<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>,
    output: {} as DetailedHTMLFactory<OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>,
    p: {} as DetailedHTMLFactory<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>,
    param: {} as DetailedHTMLFactory<ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>,
    picture: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    pre: {} as DetailedHTMLFactory<HTMLAttributes<HTMLPreElement>, HTMLPreElement>,
    progress: {} as DetailedHTMLFactory<ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>,
    q: {} as DetailedHTMLFactory<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>,
    rp: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    rt: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    ruby: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    s: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    samp: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    slot: {} as DetailedHTMLFactory<SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>,
    script: {} as DetailedHTMLFactory<ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>,
    section: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    select: {} as DetailedHTMLFactory<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
    small: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    source: {} as DetailedHTMLFactory<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>,
    span: {} as DetailedHTMLFactory<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
    strong: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    style: {} as DetailedHTMLFactory<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>,
    sub: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    summary: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    sup: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    table: {} as DetailedHTMLFactory<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>,
    template: {} as DetailedHTMLFactory<HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>,
    tbody: {} as DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>,
    td: {} as DetailedHTMLFactory<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>,
    textarea: {} as DetailedHTMLFactory<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
    tfoot: {} as DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>,
    th: {} as DetailedHTMLFactory<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>,
    thead: {} as DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>,
    time: {} as DetailedHTMLFactory<TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>,
    title: {} as DetailedHTMLFactory<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>,
    tr: {} as DetailedHTMLFactory<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>,
    track: {} as DetailedHTMLFactory<TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>,
    u: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    ul: {} as DetailedHTMLFactory<HTMLAttributes<HTMLUListElement>, HTMLUListElement>,
    "var": {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    video: {} as DetailedHTMLFactory<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>,
    wbr: {} as DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>,
    webview: {} as DetailedHTMLFactory<WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>
};
*/

