import express from "express";
import { PORT, mongoDBURL_users, mongoDBURL_d3ne, mongoDBURL_meets } from "./config.js";
import mongoose from "mongoose";
import { MongoClient } from "mongodb"; 
import { Athlete } from "./models/athleteModel.js"
import { User } from './models/userModel.js';
import athletesRoute from './routes/athletesRoute.js'
import usersRoute from './routes/usersRoute.js'
import meetsRoute from './routes/meetsRoute.js'
import cors from 'cors';
import athleteSchema from "./models/athleteModel.js"; 
import userSchema from "./models/userModel.js"; 
import meetSchema from "./models/meetModel.js"; 

const app = express();

// Middleware for parsing request body
app.use(express.json());

//cors allow only selected localhost ports
app.use(
      cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
      })
);

// Middleware for handling CORS policy
app.use(cors());

// connecting ...
app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Fantasy Track Website')
});

//MongoDB MongoClient setup for Meets Database
const options = {};
const dbName = 'meets'; 
const client = new MongoClient(mongoDBURL_meets, options);

async function connectToDatabase() {
    try {
      await client.connect();
      console.log('Connected to MongoDB using MongoClient');
  
    //   MongoClient usage
      const db = client.db(dbName);
      const collections = await db.listCollections().toArray();

      for (const collection of collections){
        const collectionName = collection.name;
        console.log(collectionName); 
      }
        
      console.log('MongoClient Result');
    } finally {
      await client.close();
    }
  }

connectToDatabase(); 

//mongoose setup for user & d3ne database

//d3ne database data
const conn2 = mongoose.createConnection(mongoDBURL_d3ne); 
const AthleteModel = conn2.model('Athlete', athleteSchema);
const MeetModel = conn2.model('Meet', meetSchema); 
export { conn2 as AthleteConnection, AthleteModel}; 
export { conn2 as MeetConnection, MeetModel}; 

//user database data;
const conn = await mongoose.createConnection(mongoDBURL_users).asPromise();
const UserModel = conn.model('User', userSchema); 
export { conn as UserConnection, UserModel}; 

app.use('/athletes', athletesRoute); 
app.use('/test-users', usersRoute); 
app.use('/meets', meetsRoute); 

// Mongoose setup
mongoose
    .connect(mongoDBURL_d3ne)
    .then(() => {
        console.log('App connected to the server');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        });
    })
    .catch((error) => {
        console.log(error);
    });

// const db = mongoose.connection; 
const db2 = conn.useDb('users');

db2.on('error', console.error.bind(console, 'MongoDB connection error:'));
db2.once('open', () => {
  console.log('Connected to MongoDB');
});
