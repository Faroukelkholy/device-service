import { v4 as uuidv4 } from 'uuid';
import mongoose from 'mongoose'
const Schema = mongoose.Schema;
var validate = require('uuid-validate');

const deviceSchema = new Schema({
    deviceId: { type: String, unique: true, required: true, default: uuidv4 },
    name: { type: String, required: true },
    firmwareVersion: String,
    firmwareRevision: String,
});





export default mongoose.model('Device', deviceSchema);

