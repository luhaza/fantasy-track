import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Athlete } from "./models/athleteModel.js"


const app = express();
// Middleware for parsing request body
// app.use(express.json());

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

mongoose
    .connect(mongoDBURL)
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

