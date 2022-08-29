import { NamedStyle } from "./namedStyle";
import { uniqueId } from "~src/shared/uuid";

export const make = (selector: string | undefined = "selector", properties: Map<string, string> | undefined = new Map<string, string>()): NamedStyle => {
    return { id: uniqueId(), selector: selector, properties: properties };
};


