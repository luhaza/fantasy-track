import express from "express";
import { PORT, mongoDBURL_users } from "./config.js";
import mongoose from "mongoose";
import { Athlete } from "./models/athleteModel.js"
import { User } from './models/userModel.js';


const app = express();
// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policy
// app.use(cors());

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Fantasy Track Website')
});

//Route for getting all athletes from database
app.get('/athletes', async (request, response) => {
    try{
        const athletes = await Athlete.find({});
        return response.status(200).json({
            count: athletes.length,
            data: athletes, 
    }); 
    } catch (error) {
        console.log(error.message); 
        response.status(500).send({message: error.message}); 
    }
});

app.post('/test-users', async (request, response) => {
    try {
        if (
            !request.body.username ||
            !request.body.email ||
            !request.body.password ||
            !request.body.activeCompetitions
        ) {
            return response.status(400).send({
                message: 'Send all required fields: username, email, password, activeCompetitions',
            });
        }
        const newUser = {
            username: request.body.username,
            email: request.body.email,
            password: request.body.password,
            activeCompetitions: request.body.activeCompetitions,
        };

        const user = await User.create(newUser);

        return response.status(201).send(user);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

mongoose
    .connect(mongoDBURL_users)
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

