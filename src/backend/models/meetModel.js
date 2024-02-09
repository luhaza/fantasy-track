import mongoose from "mongoose";

const meetSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        division:{
            type: Number,
            required: true,
        },
        meetDate:{
            type: String,
            required: true,
        },
        registerDate:{
            type: String,
            required: true,
        },
        players:{
            type: Number,
            required: true,
        },
        maxPlayers:{
            type: Number,
            required: true,
        },
    }
); 
export default meetSchema;
export const Meet = mongoose.model('Meet', meetSchema); 