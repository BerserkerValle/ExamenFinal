const db = require('../config/db.config.js');
const JuegosAlquilado = db.JuegosAlquilado;

exports.create = async (req, res) => {
    try {
        const juego = {
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

        const result = await JuegosAlquilado.create(juego);
        res.status(200).json({
            message: `Juego creado exitosamente con id = ${result.ID_Juego}`,
            juego: result,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el juego",
            error: error.message
        });
    }
};

exports.retrieveAll = async (req, res) => {
    try {
        const juegos = await JuegosAlquilado.findAll();
        res.status(200).json({
            message: "Todos los juegos obtenidos exitosamente",
            juegos: juegos
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los juegos",
            error: error.message
        });
    }
};

exports.getById = async (req, res) => {
    try {
        const juego = await JuegosAlquilado.findByPk(req.params.id);
        if (juego) {
            res.status(200).json({
                message: `Juego obtenido exitosamente con id = ${req.params.id}`,
                juego: juego
            });
        } else {
            res.status(404).json({
                message: `No se encontró un juego con id = ${req.params.id}`
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el juego",
            error: error.message
        });
    }
};

exports.updateById = async (req, res) => {
    try {
        const juego = await JuegosAlquilado.findByPk(req.params.id);
        if (juego) {
            const updatedObject = {
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

            await juego.update(updatedObject);
            res.status(200).json({
                message: `Juego actualizado exitosamente con id = ${req.params.id}`,
                juego: updatedObject
            });
        } else {
            res.status(404).json({
                message: `No se encontró un juego con id = ${req.params.id}`
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar el juego",
            error: error.message
        });
    }
};

exports.deleteById = async (req, res) => {
    try {
        const juego = await JuegosAlquilado.findByPk(req.params.id);
        if (juego) {
            await juego.destroy();
            res.status(200).json({
                message: `Juego eliminado exitosamente con id = ${req.params.id}`
            });
        } else {
            res.status(404).json({
                message: `No se encontró un juego con id = ${req.params.id}`
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el juego",
            error: error.message
        });
    }
};
