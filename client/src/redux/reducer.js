import {
  GETALLRECIPES,
  GETALLDIETS,
  ORDERBYNAME,
  ORDERBYHEALTSCORE,
  ORDERBYDIETS,
  GETRECIPEBYID,
  DELETEFILTERS,
  CREATERECIPE,
  FILTERSEARCHBAR,
  GETRECIPESBYQUERY,
  ORDERBYORIGIN,
  RESETDETAIL,
} from './actionTypes';

const initialState = {
  recipes: [],
  allRecipes: [],
  diets: [],
  detailRecipe: {},
  created: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALLRECIPES:
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload,
      };
    case GETALLDIETS:
      return {
        ...state,
        diets: action.payload,
      };

    case ORDERBYNAME:
      const byName =
        action.payload === 'ascendente'
          ? [...state.recipes].sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          : action.payload === 'descendente'
          ? [...state.recipes].sort((a, b) => {
              if (a.name > b.name) return -1;
              if (a.name < b.name) return 1;
              return 0;
            })
          : [...state.allRecipes];
      return {
        ...state,
        recipes: byName,
      };

    case ORDERBYHEALTSCORE:
      const byHealtScore =
        action.payload === 'ascendente'
          ? [...state.recipes].sort((a, b) => {
              if (a.healthScore > b.healthScore) return 1;
              if (a.healthScore < b.healthScore) return -1;
              return 0;
            })
          : action.payload === 'descendente'
          ? [...state.recipes].sort((a, b) => {
              if (a.healthScore > b.healthScore) return -1;
              if (a.healthScore < b.healthScore) return 1;
              return 0;
            })
          : [...state.allRecipes];
      return {
        ...state,
        recipes: byHealtScore,
      };

    case ORDERBYDIETS:
      const filtrado = state.allRecipes.filter((elemento) =>
        elemento.diets.some((element) => {
          return element === action.payload;
        })
      );
      return {
        ...state,
        recipes: filtrado,
      };

    case GETRECIPEBYID:
      return {
        ...state,
        detailRecipe: action.payload,
      };

    case DELETEFILTERS:
      return {
        ...state,
        recipes: [...state.allRecipes],
      };

    case CREATERECIPE:
      return {
        ...state,
        created: true,
      };

    case FILTERSEARCHBAR:
      const filterRecipes = state.allRecipes;
      const filterfinish = filterRecipes.filter((recipe) => {
        const name = recipe.name.toLowerCase();
        if (name.includes(action.payload)) return recipe;
      });
      return {
        ...state,
        recipes: filterfinish,
      };

    case GETRECIPESBYQUERY:
      return {
        ...state,
        recipes: action.payload,
      };

    case ORDERBYORIGIN:
      let sort = [];
      if (action.payload === 'DataBase') {
        sort = state.allRecipes.filter((element) => element.db === true);
      } else {
        sort = state.allRecipes.filter((element) => element.db !== true);
      }
      return {
        ...state,
        recipes: sort,
      };
    case RESETDETAIL:
      return {
        ...state,
        detailRecipe: {},
      };
    default:
      return state;
  }
};

export default reducer;
