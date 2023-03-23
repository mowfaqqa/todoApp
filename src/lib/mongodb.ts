import { Db, MongoClient } from "mongodb";

const MONGODB_URI = "mongodb+srv://muwaffaq:DefaultPa55@todo.il2oeyb.mongodb.net/Todo-App?retryWrites=true&w=majority"
const MONGODB_DB = "Todo-App";

// check the mongo URI
if (!MONGODB_URI) {
    throw new Error('Define the MONGODB_URI environmental variable');
}
// check the MongoDB DB
if (!MONGODB_DB) {
    throw new Error('Define the MONGODB_DB environmental variable');
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null  = null;

export async function connectToDatabase() {
    // check the cached.
    if (cachedClient && cachedDb) {
        // load from cache
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }

    // set the connection options
    const opts : any = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    // Connect to cluster
    let client = new MongoClient(MONGODB_URI!, opts);
    await client.connect();
    let db = client.db(MONGODB_DB);

    // set cache
    cachedClient = client;
    cachedDb = db;

    return {
        client: cachedClient,
        db: cachedDb,
    };
}