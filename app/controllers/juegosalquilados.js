const db = require('../config/db.config.js');
const JuegosAlquilado = db.JuegosAlquilado;

exports.create = (req, res) => {
    let juego = {};

    try {
        juego.Nombre_Juego = req.body.Nombre_Juego;
        juego.Genero = req.body.Genero;
        juego.Plataforma = req.body.Plataforma;
        juego.Fecha_Lanzamiento = req.body.Fecha_Lanzamiento;
        juego.Precio_Alquiler = req.body.Precio_Alquiler;
        juego.Disponibilidad = req.body.Disponibilidad;
        juego.Fecha_Alquiler = req.body.Fecha_Alquiler;
        juego.Fecha_Devolucion = req.body.Fecha_Devolucion;
        juego.Nombre_Cliente = req.body.Nombre_Cliente;
        juego.Comentarios = req.body.Comentarios;

        JuegosAlquilado.create(juego).then(result => {
            res.status(200).json({
                message: "Upload Successfully a Juego with id = " + result.ID_Juego,
                juego: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

exports.retrieveAll = (req, res) => {
    JuegosAlquilado.findAll()
        .then(juegos => {
            res.status(200).json({
                message: "Get all Juegos Successfully!",
                juegos: juegos
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

exports.getById = (req, res) => {
    let juegoId = req.params.id;
    JuegosAlquilado.findByPk(juegoId)
        .then(juego => {
            res.status(200).json({
                message: "Successfully Get a Juego with id = " + juegoId,
                juego: juego
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

exports.updateById = async (req, res) => {
    try {
        let juegoId = req.params.id;
        let juego = await JuegosAlquilado.findByPk(juegoId);

        if (!juego) {
            res.status(404).json({
                message: "Not Found for updating a Juego with id = " + juegoId,
                juego: "",
                error: "404"
            });
        } else {
            let updatedObject = {
                Nombre_Juego: req.body.Nombre_Juego,
                Genero: req.body.Genero,
                Plataforma: req.body.Plataforma,
                Fecha_Lanzamiento: req.body.Fecha_Lanzamiento,
                Precio_Alquiler: req.body.Precio_Alquiler,
                Disponibilidad: req.body.Disponibilidad,
                Fecha_Alquiler: req.body.Fecha_Alquiler,
                Fecha_Devolucion: req.body.Fecha_Devolucion,
                Nombre_Cliente: req.body.Nombre_Cliente,
                Comentarios: req.body.Comentarios
            };
            await JuegosAlquilado.update(updatedObject, { returning: true, where: { ID_Juego: juegoId } });

            res.status(200).json({
                message: "Update successfully a Juego with id = " + juegoId,
                juego: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> Can not update a Juego with id = " + req.params.id,
            error: error.message
        });
    }
}

exports.deleteById = async (req, res) => {
    try {
        let juegoId = req.params.id;
        let juego = await JuegosAlquilado.findByPk(juegoId);

        if (!juego) {
            res.status(404).json({
                message: "Does Not exist a Juego with id = " + juegoId,
                error: "404",
            });
        } else {
            await juego.destroy();
            res.status(200).json({
                message: "Delete Successfully a Juego with id = " + juegoId,
                juego: juego,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> Can NOT delete a Juego with id = " + req.params.id,
            error: error.message,
        });
    }
}
