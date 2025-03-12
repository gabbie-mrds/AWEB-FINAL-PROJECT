// import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

const CONNECTION_STRING = "mongodb+srv://admin:adminbangketaeskwela@cluster0.rg07k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const DATABASENAME = "MyDb";

// let database = null;

// async function dbConnect() {
//   try {
//     const client = await MongoClient.connect(CONNECTION_STRING);
//     database = client.db(DATABASENAME);
//     console.log(`Yay! Now connected to Cluster`);
//     return database;
//   } catch (error) {
//     console.error("Database connection failed:", error);
//     throw error;
//   }
// }

// const db = dbConnect();

const db = mongoose.connect(CONNECTION_STRING);

export default db;