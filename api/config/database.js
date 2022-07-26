import mongoose from 'mongoose'
import config from './index.js'

const db = mongoose.connection;

db.on('connecting', ()=>{
    console.log('Intentando conectar a la base de datos 📖');
});
db.on('error', ()=>{
    console.log('Ha ocurrido un error en la conexión de la base de datos ❌');
});
db.on('connected', ()=>{
    console.log('Conexión establecida con la base de datos ✅ ');
})
db.on('discconected', ()=>{
    console.log('Se ha desconectado de la base de datos');
});
db.on('reconnected', ()=>{
    console.log('Se ha reconectado de la base de datos');
});

export default () => {
    console.log(process.env.NODE_ENV);
    let databaseUri;
    let databaseName;
    if (process.env.NODE_ENV === 'test') {
        databaseUri = config.databaseTest.uri;
        databaseName = config.databaseTest.name;
    } else {
        databaseUri = config.database.uri;
        databaseName = config.database.name
    }
    mongoose.connect(`${databaseUri}/ ${databaseName}`)
}