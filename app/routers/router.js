const express = require('express');
const router = express.Router();
const juegos = require('../controllers/juegosalquilados.js');


router.post('/api/juegos/create', juegos.create);
router.get('/api/juegos/all', juegos.retrieveAll);
router.get('/api/juegos/onebyid/:id', juegos.getById);
router.put('/api/juegos/update/:id', juegos.updateById);
router.delete('/api/juegos/delete/:id', juegos.deleteById);

module.exports = router;