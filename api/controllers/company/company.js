const CompanyService = require('../../services/company/company.js');

module.exports = {
  getAllCompanies: (req, res) => {
    let { searchParams, specialities } = req?.query;
    specialities =
      specialities?.split(',').map((specialty) => parseInt(specialty)) || [];
    CompanyService.getAllCompanies({ searchParams, specialities })
      .then((companies) => res.send(companies))
      .catch((err) => res.status(400).json(err));
  },
};
