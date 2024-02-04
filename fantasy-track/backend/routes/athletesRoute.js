import express from 'express';
import { Athlete } from '../models/athleteModel.js';


const athletesRouter = express.Router();
// userRouter.use(express.json())

//Route for getting all athletes from database
athletesRouter.get('/', async (request, response) => {
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

// Route for getting an athlete from database by first name
athletesRouter.get('/:_id', async (request, response) => {
    try{
        const { _id } = request.params; 
        const athlete = await Athlete.findOne({ _id });
        return response.status(200).json(athlete); 
    } catch (error) {
        console.log(error.message); 
        response.status(500).send({message: error.message}); 
    }
}); 

// update user


// delete a user


// list all users

export default athletesRouter;