import 'localenv';


const {
    DEBUG,
    HTTP_SERVER,
    HTTP_PORT,
    DB_HOST,
    DB_PORT,
    DB_NAME,
} = process.env

export default {
    DEBUG,
    HTTP_SERVER,
    HTTP_PORT,
    DB_HOST,
    DB_PORT,
    DB_NAME,
}; 

// export default  process.env
