const { Router } = require('express');
const getAllDiets = require('../controllers/diets/getAllDiets');
const router = Router();

router.get('/', (req, res) => {
  getAllDiets(req, res);
});

module.exports = router;
