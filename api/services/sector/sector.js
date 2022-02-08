const Sectors = require('../../models/sector/sectors.js');

module.exports = {
  getAllSectors: async () =>  {
    try {
      return Sectors;
    } catch (error) {
      throw error;
    }
  },
}
