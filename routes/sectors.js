const express = require('express');
const router = express.Router();
const SectorController = require('../api/controllers/sector/sector');

/* GET sectors listing. */
router.get('/', SectorController.getAllSectors);

module.exports = router;
