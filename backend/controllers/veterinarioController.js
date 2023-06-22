import Veterinario from '../models/Veterinario.js';

const registrar = async ( req, res ) => {
    

    // const { email, password, nombre } = req.body;

    try {
        const veterinario = new Veterinario(req.body);
        const veterinarioGuardado = await veterinario.save();
        res.json(veterinarioGuardado);
    } catch (error) {
        console.log(error);
    }
    /*console.log(email);
    console.log(password);
    console.log(nombre);*/



};

const perfil = ( req, res ) => {
    res.json({msg: "Mostrando Perfil"});
};

export {
    registrar,
    perfil
};

// Para enviar la informacion, usamos el métddo POST con el JSON en el body de la petición