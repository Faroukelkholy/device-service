import { v4 as uuidv4 } from 'uuid';
export default class Device {
    _id?: string
    name: string
    firmwareVersion: string
    firmwareRevision: string
}