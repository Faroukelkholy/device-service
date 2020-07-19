import { v4 as uuidv4 } from 'uuid';
import mongoose from 'mongoose'
const Schema = mongoose.Schema;
var validate = require('uuid-validate');

const deviceSchema = new Schema({
    _id: { type: String, default: uuidv4 },
    name: { type: String, required: true },
    firmwareVersion: String,
    firmwareRevision: String,
});



export default mongoose.model('Device', deviceSchema);

