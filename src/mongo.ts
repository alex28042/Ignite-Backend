import {Db, MongoClient, ServerApiVersion} from "mongodb";

const uri: string | undefined = process.env.MONGO_URI ;

if (!uri) {
    throw new Error("Mongo uri is undefined")
}

const db: Db = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
}).db("Ignite");


module.exports = db;