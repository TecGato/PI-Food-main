const { Recipe, Diets } = require('../../db');
const axios = require('axios');
require('dotenv').config();
const { URL_API, API_KEY_8 } = process.env;

const getRecipesById = async (req, res) => {
  const { idRecipe } = req.params;
  try {
    const receta = await Recipe.findByPk(idRecipe);
    if (receta) {
      const dietas = await receta.getDiets();
      const dietasString = dietas.map((dieta) => dieta.name);
      const dbRes = { ...receta.toJSON(), diets: dietasString };
      if (dbRes) return res.status(200).json(dbRes);
    }
    const apiRes = await axios(
      `${URL_API}/${idRecipe}/information?apiKey=${API_KEY_8}`
    );
    const data = apiRes.data;
    if (data) {
      const recipeDetail = {
        id: idRecipe,
        name: data.title,
        image: data.image,
        healthScore: data.healthScore,
        summary: data.summary,
        diets: data.diets,
        steps: data.analyzedInstructions[0]?.steps.map((element) => {
          return {
            number: element.number,
            step: element.step,
          };
        }),
      };
      return res.status(200).json(recipeDetail);
    }
    throw new Error(`No existe receta con el ID ${idRecipe}`);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = { getRecipesById };
