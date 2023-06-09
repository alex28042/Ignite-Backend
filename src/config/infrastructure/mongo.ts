import {Db, MongoClient, ServerApiVersion} from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri: string | undefined = process.env.MONGO_URI ;

if (!uri) {
    throw new Error("Mongo uri is undefined")
}

export const db: Db = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
}).db("Ignite");


