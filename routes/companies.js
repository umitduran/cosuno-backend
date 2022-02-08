const express = require('express');
const router = express.Router();
const CompanyController = require('../api/controllers/company/company');

/* GET companies listing. */
router.get('/', CompanyController.getAllCompanies);

module.exports = router;
