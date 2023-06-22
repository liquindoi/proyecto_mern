

const registrar = ( req, res ) => {
    console.log(req.body);

    const { email, password, nombre } = req.body;
    console.log(email);
    console.log(password);
    console.log(nombre);


    res.json({msg: "Registrando usuario..."});
};

const perfil = ( req, res ) => {
    res.json({msg: "Mostrando Perfil"});
};

export {
    registrar,
    perfil
};

// Para enviar la informacion, usamos el métddo POST con el JSON en el body de la petición