import mongoose from 'mongoose';

const conectarDB = async () => {
    try {
        // Atención a los passwords con caracteres como @ o # hay que codificarlos 
        const db = await mongoose.connect(process.env.MONGO_URI,{
           useNewUrlParser: true,
           useUnifiedTopology: true
        });
        const url = `${db.connection.host}:${db.connection.port}`;
        console.log(`Mongo conectado en: ${url}`);
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
};

export default conectarDB; 