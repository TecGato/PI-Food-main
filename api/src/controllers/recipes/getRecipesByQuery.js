const { Recipe, Diets } = require('../../db');
const { Op } = require('sequelize');
const axios = require('axios');
require('dotenv').config();
const { URL_API, API_KEY_1 } = process.env;

const getRecipesByQuery = async (req, res) => {
  const { name } = req.query;
  try {
    if (!name) {
      const recetas = await Recipe.findAll();
      const dbRes = await Promise.all(
        recetas.map(async (receta) => {
          const dietas = await receta.getDiets();
          const dietasString = dietas.map((dieta) => dieta.name);
          return { ...receta.toJSON(), diets: dietasString };
        })
      );

      const response = await axios(
        `${URL_API}/complexSearch?apiKey=${API_KEY_1}&&number=100&&addRecipeInformation=true&&instructionsRequired=true`
      );
      const recipeDetail = response.data.results.map((elemento) => {
        return {
          id: elemento.id,
          name: elemento.title,
          image: elemento.image,
          healthScore: elemento.healthScore,
          summary: elemento.summary,
          diets: elemento.diets,
          steps: elemento.analyzedInstructions[0]?.steps.map((element) => {
            return {
              number: element.number,
              step: element.step,
            };
          }),
        };
      });
      const infTotal = dbRes.concat(recipeDetail);

      return res.status(200).json(infTotal);
    }

    const recetas = await Recipe.findAll();
    const dbRes = await Promise.all(
      recetas.map(async (receta) => {
        const dietas = await receta.getDiets();
        const dietasString = dietas.map((dieta) => dieta.name);
        return { ...receta.toJSON(), diets: dietasString };
      })
    );
    const apiRes = await axios(
      `${URL_API}/complexSearch?apiKey=${API_KEY_1}&&titleMatch=${name}&&addRecipeInformation=true&&instructionsRequired=true`
    );
    const data = apiRes.data;
    if (!data) {
      res.status(200).json(dbRes);
    }
    const recipeDetail = data.results.map((elemento) => {
      return {
        id: elemento.id,
        name: elemento.title,
        image: elemento.image,
        healthScore: elemento.healthScore,
        summary: elemento.summary,
        diets: elemento.diets,
        steps: elemento.analyzedInstructions[0]?.steps.map((element) => {
          return {
            number: element.number,
            step: element.step,
          };
        }),
      };
    });
    const infTotal = dbRes.concat(recipeDetail);

    if (infTotal.length < 1)
      throw new Error(`No existe recetas que incluyan ${name}`);
    res.status(200).json(infTotal);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = getRecipesByQuery;
