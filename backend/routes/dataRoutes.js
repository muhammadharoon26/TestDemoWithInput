const express = require('express');
const DataController = require('../controllers/dataController');
const DataModel = require('../models/dataModel');

const router = express.Router();
const dataController = new DataController(DataModel);

router.post('/', dataController.saveData.bind(dataController));
router.get('/', dataController.getData.bind(dataController));

module.exports = router;