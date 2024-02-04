import express from 'express';
import { User } from '../models/userModel.js';

const userRouter = express.Router();

// create user
userRouter.post('/', async (request, response) => {
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
// userRouter.put('/:id', async (request, response) => {
//     try {
//       if (
//         !request.body.title ||
//         !request.body.author ||
//         !request.body.publishYear
//       ) {
//         return response.status(400).send({
//           message: 'Send all required fields: title, author, publishYear',
//         });
//       }
  
//       const { id } = request.params;
  
//       const result = await Book.findByIdAndUpdate(id, request.body);
  
//       if (!result) {
//         return response.status(404).json({ message: 'Book not found' });
//       }
  
//       return response.status(200).send({ message: 'Book updated successfully' });
//     } catch (error) {
//       console.log(error.message);
//       response.status(500).send({ message: error.message });
//     }
//   });


// delete a user


// list all users
userRouter.get('/', async (request, response) => {
    try {
      const users = await User.find({});
  
      return response.status(200).json({
        count: users.length,
        data: users,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

export default userRouter;