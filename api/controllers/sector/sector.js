const SectorService = require('../../services/sector/sector');

module.exports = {
  getAllSectors: (req, res) => {
    try {
      SectorService.getAllSectors()
        .then((sectors) => res.send(sectors))
        .catch((error) => {
          res.status(500).json({
            message: 'Error retrieving sectors',
            error,
          });
        });
    } catch (error) {
      res.status(500).json({
        message: 'Error retrieving sectors',
        error,
      });
    }
  },
};
