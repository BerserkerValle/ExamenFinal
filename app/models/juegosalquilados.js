module.exports = (sequelize, Sequelize) => {
	const JuegosAlquilado = sequelize.define('JuegosAlquilado', {
	  ID_Juego: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
	  },
	  Nombre_Juego: {
			type: Sequelize.STRING
	  },
	  Genero: {
			type: Sequelize.STRING
	  },
	  Plataforma: {
			type: Sequelize.STRING
	  },
	  Fecha_Lanzamiento: {
			type: Sequelize.DATE
	  },
	  Precio_Alquiler: {
			type: Sequelize.DECIMAL
	  },
	  Disponibilidad: {
			type: Sequelize.BOOLEAN,
      defaultValue: true 
	  },
	  Fecha_Alquiler: {
			type: Sequelize.DATE
	  },
	  Fecha_Devolucion: {
			type: Sequelize.DATE
	  },
	  Nombre_Cliente: {
			type: Sequelize.STRING
	  },
	  Comentarios: {
			type: Sequelize.TEXT
	  }
	});
	
	return JuegosAlquilado;
}
