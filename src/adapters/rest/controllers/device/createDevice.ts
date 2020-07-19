import ICreateDevicePort from '../../../../ports/input/devices/ICreateDevicePort';
import RestError from '../../../../utils/restError'
import Device from '../../../../domain/entity/device';

export default function createDeviceFactory(CreateDeviceUseCase: ICreateDevicePort) {
    return async function createDevice(req: any, res: any, next: any) {
        try {
            const deviceEntity: Device = new Device();
            deviceEntity.name = req.body.name as string;
            deviceEntity.firmwareVersion = req.body.firmwareVersion as string;
            deviceEntity.firmwareRevision = req.body.firmwareRevision as string;
            deviceEntity.deviceValidator();

            const deviceInserted: Device = await CreateDeviceUseCase.createDevice(deviceEntity);

            res.status(201).json({
                status: "success",
                data: { _id: deviceInserted._id }
            });
        } catch (err) {
            console.log("createDevice controller err :", err);
            if (err.message === 'name is missing.') {
                const errorMessage = err.message;
                const restError = RestError(errorMessage);
                res.status(400).json(restError)
                return;
            }

            const errorMessage = "server could not process request";
            const restError = RestError(errorMessage);
            res.status(500).json(restError)
        }
    }
}
