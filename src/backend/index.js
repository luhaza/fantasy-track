import express from "express";
import { PORT, mongoDBURL_users, mongoDBURL_d3ne, beta_url } from "./config.js";
import mongoose from "mongoose";
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

//cors allow only selected
app.use(
      cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
      })
);

// Middleware for handling CORS policy
// app.use(cors());

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Fantasy Track Website')
});

// athlete and meet data; 
// const conn = mongoose.createConnection(mongoDBURL_d3ne); 
// const AthleteModel = conn.model('Athlete', athleteSchema);
// const MeetModel = conn.model('Meet', meetSchema); 
// export { conn as AthleteConnection, AthleteModel}; 
// export { conn as MeetConnection, MeetModel}; 

// //user data;
// const conn2 = mongoose.createConnection(mongoDBURL_users);
// const UserModel = conn2.model('User', userSchema); 
// export { conn2 as UserConnection, UserModel}; 

app.use('/athletes', athletesRoute); 
app.use('/users', usersRoute); 
app.use('/meets', meetsRoute); 

mongoose
    .connect(beta_url)
    .then(() => {
        console.log('App connected to the database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        });
    })
    .catch((error) => {
        console.log(error);
    });

const db = mongoose.connection; 

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

