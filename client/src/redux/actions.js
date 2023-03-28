import axios from 'axios';
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

export const getRecipeDetail = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/recipes/${id}`);
    const data = response.data;
    return dispatch({
      type: GETRECIPEBYID,
      payload: data,
    });
  };
};

export const getAllR = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/recipes/');
    const data = response.data;
    return dispatch({
      type: GETALLRECIPES,
      payload: data,
    });
  };
};

export const getAllD = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/diets');
    const data = response.data;
    return dispatch({
      type: GETALLDIETS,
      payload: data,
    });
  };
};

export const orderByName = (order) => {
  return (dispatch) => {
    return dispatch({
      type: ORDERBYNAME,
      payload: order,
    });
  };
};

export const orderByHealtScore = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: ORDERBYHEALTSCORE,
      payload,
    });
  };
};

export const orderByDiets = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: ORDERBYDIETS,
      payload,
    });
  };
};

export const deleteFilters = () => {
  return (dispatch) => {
    return dispatch({
      type: DELETEFILTERS,
    });
  };
};

export const createRecipe = (payload) => {
  return async (dispatch) => {
    const response = await axios.post(
      'http://localhost:3001/recipes/',
      payload
    );
    if (response.status !== 400) {
      return dispatch({
        type: CREATERECIPE,
        payload,
      });
    }
  };
};

export const filterSearchBar = (payload) => {
  return async (dispatch) => {
    return dispatch({
      type: FILTERSEARCHBAR,
      payload,
    });
  };
};

export const getRecipesByQuery = (name) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:3001/recipes/?name=${name}`
    );
    const payload = response.data;
    return dispatch({
      type: GETRECIPESBYQUERY,
      payload,
    });
  };
};

export const orderByOrigin = (payload) => {
  return async (dispatch) => {
    return dispatch({
      type: ORDERBYORIGIN,
      payload,
    });
  };
};

export const resetDetail = (dispatch) => {
  return (dispatch) => {
    return dispatch({
      type: RESETDETAIL,
    });
  };
};
