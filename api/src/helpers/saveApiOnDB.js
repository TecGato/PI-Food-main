const axios = require('axios');
const { Recipe, Diets } = require('../db');
require('dotenv').config();
const { URL_API, API_KEY_1 } = process.env;

const saveApiOnDB = async () => {
  const response = await axios(
    `${URL_API}/complexSearch?apiKey=${API_KEY_1}&&number=100&&addRecipeInformation=true&&instructionsRequired=true`
  );
  const data = response.data;
  if (data) {
    const allData = data.results.map(async (recipe) => {
      const dbRecipe = await Recipe.create({
        id: recipe.id,
        name: recipe.title,
        image: recipe.image,
        healthScore: recipe.healthScore,
        summary: recipe.summary,
        steps: recipe.analyzedInstructions[0]?.steps.map((element) => {
          return {
            number: element.number,
            step: element.step,
          };
        }),
      });
      let dietDB = await Diets.findAll({
        where: { name: recipe.diets },
      });
      await dbRecipe.addDiet(dietDB);
    });
  }
};

module.exports = saveApiOnDB;
