const express = require('express');

const indexController = require('../controllers/indexController');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Default API');
});

router.get('/todos', indexController.index);
router.get('/todo/:id', indexController.show);
router.post('/todo/create', indexController.create);
router.put('/todo/edit/:id', indexController.update);
router.delete('/todo/delete/:id', indexController.delete);

module.exports = router;