import ExpressServer from './express/expressServer';

const expressServer = new ExpressServer();

expressServer.initControllers();

export default expressServer;