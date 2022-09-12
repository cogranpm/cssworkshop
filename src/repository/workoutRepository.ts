import localforage from "localforage";
import { HtmlDocument } from "~src/models/htmlDocument";

export const store  = async (model: HtmlDocument) => {
    await localforage.setItem<HtmlDocument>(model.id, model);
};

export const get = async (id: string): Promise<HtmlDocument> => {
    return await localforage.getItem(id) as HtmlDocument;
};

export const remove = async (id: string) => {
    await localforage.removeItem(id);
};

export const getAll = async (): Promise<HtmlDocument[]> => {
    const keys = await localforage.keys();
    const documents = Promise.all(
        keys.map( async (key: string) =>{
            const item = await get(key);
            return item;
        })
    );
    return documents;
};

export const clear = async() => {
    await localforage.clear();
};
