import IGetDevicesPort from '../../../../ports/input/devices/IGetDevicesPort';
import RestError from '../../../../utils/restError'
export default function getDevicesFactory(getDevicesUseCase: IGetDevicesPort) {
    return async function getDevices(req: any, res: any, next: any) {
        try {
            const devices = await getDevicesUseCase.getDevices();
            res.status(200).json({
                status: "success",
                data: devices
            });
        } catch (err) {
            console.log("err :", err);
            const errorMessage = "server could not process request";
            const restError = RestError(errorMessage);
            res.status(500).json(restError)
        }
    }
}