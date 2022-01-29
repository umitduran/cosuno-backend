const CompanyService = require('../../services/company/company.js');

module.exports = {
  getAllCompanies: (req, res) => {
    CompanyService.getAllCompanies()
      .then((companies) => res.send(companies))
      .catch((err) => res.status(400).json(err));
  },
};
