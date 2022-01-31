const Companies = require('../../models/company/companies');

module.exports = {
  getAllCompanies: async ({ searchParams, specialities }) => {
    try {
      const companies = Companies.filter((company) => {
        let isValidCompany = true;
        if (Array.isArray(specialities) && specialities.length > 0) {
          const index = specialities.indexOf(company?.specialities[0]?.id);
          isValidCompany = index >= 0;
        }
        if (searchParams && isValidCompany)
          isValidCompany = company.name
            .toLocaleLowerCase()
            .includes(searchParams.toLocaleLowerCase());
        if (isValidCompany) return company;
      });
      return companies;
    } catch (error) {
      throw error;
    }
  },
};
