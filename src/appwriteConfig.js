import { Client,Databases,Query,Account } from 'appwrite';

export const DATABASE_ID = "656f68a28942b7c3672c";
export const PROJECT_ID = "656f66249af521737de9";
export const COLLECTION_ID_MESSAGES = "656f6925283fc6f81972";

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('656f66249af521737de9');

export const databases = new Databases(client);
export const account = new Account(client);

export default client;