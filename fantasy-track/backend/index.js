import express from "express";
import { PORT, mongoDBURL_users, mongoDBURL_d3ne } from "./config.js";
import mongoose from "mongoose";
import { Athlete } from "./models/athleteModel.js"
import { User } from './models/userModel.js';
import athletesRoute from './routes/athletesRoute.js'
import usersRoute from './routes/usersRoute.js'
import meetsRoute from './routes/meetsRoute.js'
import cors from 'cors';

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

app.use('/athletes', athletesRoute); 
app.use('/test-users', usersRoute); 
app.use('/meets', meetsRoute); 

// app.post('/test-users', async (request, response) => {
//     try {
//         if (
//             !request.body.username ||
//             !request.body.email ||
//             !request.body.password ||
//             !request.body.activeCompetitions
//         ) {
//             return response.status(400).send({
//                 message: 'Send all required fields: username, email, password, activeCompetitions',
//             });
//         }
//         const newUser = {
//             username: request.body.username,
//             email: request.body.email,
//             password: request.body.password,
//             activeCompetitions: request.body.activeCompetitions,
//         };

//         const user = await User.create(newUser);

//         return response.status(201).send(user);

//     } catch (error) {
//         console.log(error.message);
//         response.status(500).send({ message: error.message });
//     }
// });

mongoose
    .connect(mongoDBURL_d3ne)
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

