import mongoose, { Mongoose } from "mongoose"

const MONGO_URI = process.env.MONGO_URI;


interface MongooseCache {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

declare global {
    var mongooseCashe: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCashe ?? {
    conn: null,
    promise: null
};

if (!global.mongooseCashe)
    global.mongooseCashe = cached;

export async function dbConnect(): Promise<Mongoose> {
    if (cached.conn) return cached.conn;

    if (!MONGO_URI)
        throw new Error("MONGO_URI is not defined")
    if (!cached.promise)
        cached.promise = mongoose.connect(MONGO_URI, {
            bufferCommands: false,
        })
        
    console.log("=============================================");

    console.log("Connecting to MongoDB", MONGO_URI);

    cached.conn = await cached.promise;
    console.log("Connected to MongoDB", cached.conn);


    return cached.conn;
}