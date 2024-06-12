import mongoose from 'mongoose';
const noteSchema = new mongoose.Schema({
    topic:{
        type: String,
        required:true
    },
    details:{
        type: String,
        required:true
    },
    date:{
        type: String,
        required:true
    },
    subject:{
        type: String,
        required:true
    }
})

export default mongoose.model('Notes', noteSchema);