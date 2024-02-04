import express from 'express';
import { Meet } from '../models/meetModel.js';
import { MeetConnection, MeetModel } from '../index.js'


const meetsRouter = express.Router();
// userRouter.use(express.json())

meetsRouter.post('/', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.division ||
            !request.body.meetDate ||
            !request.body.registerDate ||
            !request.body.players ||
            !request.body.maxPlayers
        ) {
            return response.status(400).send({
                message: 'Send all required fields: username, email, password, activeCompetitions',
            });
        }
        const newMeet = {
            name: request.body.name,
            division: request.body.division,
            meetDate: request.body.meetDate,
            registerDate: request.body.registerDate,
            players: request.body.players,
            maxPlayers: request.body.maxPlayers,
        };

        const meet = await MeetModel.create(newMeet);

        return response.status(201).send(meet);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for getting all meets from database
meetsRouter.get('/', async (request, response) => {
    try{
        const meets = await MeetModel.find({});
        return response.status(200).json({
            count: meets.length,
            data: meets, 
    }); 
    } catch (error) {
        console.log(error.message); 
        response.status(500).send({message: error.message}); 
    }
});

// Route for getting a meet from database by id
meetsRouter.get('/:id', async (request, response) => {
    try{
        const { id } = request.params; 
        const meet = await MeetModel.findOne({ id });
        return response.status(200).json(meet); 
    } catch (error) {
        console.log(error.message); 
        response.status(500).send({message: error.message}); 
    }
}); 

// update user


// delete a user


// list all users

export default meetsRouter;