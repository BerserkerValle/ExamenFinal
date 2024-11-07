const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config'); 

module.exports = sequelize.define('JuegosAlquilados', {
    ID_Juego: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre_Juego: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Genero: {
        type: DataTypes.STRING
    },
    Plataforma: {
        type: DataTypes.STRING
    },
    Fecha_Lanzamiento: {
        type: DataTypes.DATE
    },
    Precio_Alquiler: {
        type: DataTypes.FLOAT
    },
    Disponibilidad: {
        type: Sequelize.BOOLEAN
    },
    Fecha_Alquiler: {
        type: DataTypes.DATE
    },
    Fecha_Devolucion: {
        type: DataTypes.DATE
    },
    Nombre_Cliente: {
        type: DataTypes.STRING
    },
    Comentarios: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'juegos_alquilados',
    timestamps: false
});
