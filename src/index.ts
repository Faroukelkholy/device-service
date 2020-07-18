import config from './config';
import restServer from './adapters/rest'

restServer.startServer(config.HTTP_PORT);