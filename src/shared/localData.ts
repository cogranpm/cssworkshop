
import PouchDB from 'pouchdb-browser';
import pouchFind from 'pouchdb-find';
import { logSystemError } from './errorHandling';

const DB_PREFIX = "workouts";


//export const testName = `${DB_PREFIX}-test`;

//export let dbLookups: PouchDB.Database<{}>;

export async function initializeLocalDatabases() {
    try {
        PouchDB.plugin(pouchFind);
        //dbTest = new PouchDB(testName);

        /*
         await dbLookups.createIndex({
             index: { fields: ['name'] }
         });
         */

    } catch (error) {
        let message = "Error on initializing local database";
        logSystemError(error, message);
    }
}

export async function closeLocalDatabases() {
    try {
        //await dbLookups.close();

    } catch (error) {
        let message = "Error on closing local database";
        logSystemError(error, message);
    }
}