import express from 'express';
import { User } from '../models/userModel.js';

const userRouter = express.Router();
// userRouter.use(express.json())

// create user
userRouter.post('/test-users', async (request, response) => {
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

// update user


// delete a user


// list all users

export default userRouter;