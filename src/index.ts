import config from './config';
import restServer from './adapters/rest/index'

restServer.startServer(config.HTTP_PORT);