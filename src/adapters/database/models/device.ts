import { v4 as uuidv4 } from 'uuid';
import mongoose  from 'mongoose'
const Schema = mongoose.Schema;

const deviceSchema = new Schema({
    _id: { type: String, default: uuidv4 },
    name: String,
    firmwareVersion: String,
    firmwareRevision: String,
});

export default mongoose.model('Device', deviceSchema);

