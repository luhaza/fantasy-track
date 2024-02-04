import mongoose from "mongoose";

const athleteSchema = mongoose.Schema(
    {
        _id:{
            type: String,
            required: true, 
        },
        first:{
            type: String,
            required: true,
        },
        last:{
            type: String,
            required: true,
        },
        school:{
            type: String,
            required: true,
        },
        gender:{
            type: String,
            required: true,
        },
        event:{
            type: String,
            required: true,
        },
        value:{
            type: Number,
            required: true,
        },
        grade:{
            type: Number,
            required: true,
        },
    }
); 
export default athleteSchema; 
export const Athlete = mongoose.model('Athlete', athleteSchema); 