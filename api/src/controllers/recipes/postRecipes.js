const { Recipe } = require('../../db');

const postRecipes = async (req, res) => {
  const { name, image, healthScore, summary, diets, steps } = req.body;
  try {
    if (!name || !image || !healthScore || !summary || !diets || !steps) {
      throw new Error('Falto recibir un dato Obligatorio');
    }
    scoreint = parseInt(healthScore);
    const dbRecipe = await Recipe.create({
      name,
      image,
      healthScore: scoreint,
      summary,
      steps,
    });
    await dbRecipe.addDiet(diets); //addActivitidades
    return res.status(200).json(dbRecipe.dataValues);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = postRecipes;
