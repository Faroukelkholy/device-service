# katulu_challenge


## Table of contents
* [Documentation](#Documentation)
* [Technologies](#Technologies)
* [Deployment](#Deployment)
* [Example](#Example)
* [Testing](#Testing)


## Documentation

> documentation resides at ./doc folder. It includes class diagram and rest api specification.  

## Technologies

Project is created with:

* Node
* Express
* Mongo
* Docker
* Jest

## Deployment

> Note: The app will start with a seeder. 

```
$ docker-compose up -d
```

## Example

Application will be up and running on port 8080 and cruds available are:

> curl http://localhost:8080/devices
> curl http://localhost:8080/devices/99b297dd-cb11-4513-b3b2-f798af12a83f
> curl -d '{"name": "curlTest","firmwareRevision": "0.1.0","firmwareVersion": "1.1.0"}' -H "Content-Type: application/json" -X POST http://localhost:8080/devices

More details on endpoint specification in the doc folder.
	
## Testing

> 1.first get a bash shell in the container 
> 2.excute the test cases

```
$ docker exec -it device /bin/bash
$ npm test
```

