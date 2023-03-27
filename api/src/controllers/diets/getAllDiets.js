const { Diets } = require('../../db');

const getAllDiets = async (req, res) => {
  try {
    const allDiets = await Diets.findAll();
    res.status(200).json(allDiets);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = getAllDiets;
