import { v4 as uuidv4 } from 'uuid';
import mongoose from 'mongoose'
const Schema = mongoose.Schema;
var validate = require('uuid-validate');

const deviceSchema = new Schema({
    _id: { type: String, default: uuidv4, validate: validateIsUuid },
    name: String,
    firmwareVersion: String,
    firmwareRevision: String,
});

function validateIsUuid(_id: any) {
    console.log("validateIsUuid id:,", _id)
    if (validate(_id)) return Promise.reject(new Error('Not valid uuid id'))

}

export default mongoose.model('Device', deviceSchema);

