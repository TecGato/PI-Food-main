const { Router } = require('express');
const { getRecipesById } = require('../controllers/recipes/getRecipesById');
const getRecipesByQuery = require('../controllers/recipes/getRecipesByQuery');
const postRecipes = require('../controllers/recipes/postRecipes');
const router = Router();

router.get('/:idRecipe', (req, res) => {
  getRecipesById(req, res);
});

router.get('/', (req, res) => {
  getRecipesByQuery(req, res);
});

router.post('/', (req, res) => {
  postRecipes(req, res);
});

module.exports = router;
