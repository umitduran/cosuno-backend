const Companies = require('../../models/company/companies');

module.exports = {
  getAllCompanies: async (req, res) => {
    try {
      const companies = Companies;
      return companies;
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
};
