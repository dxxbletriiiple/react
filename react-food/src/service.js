import { API_URL } from './config';

const getData = async (path, query = '') => {
	return await (await fetch(`${API_URL}${path}${query}`)).json();
};

export const getMealById = async (mealId) => {
	return await getData('lookup.php?i=', mealId);
};

export const getAllCategories = async () => {
	return await getData('categories.php', '');
};
export const getFilteredCategory = async (catName) => {
	return await getData('fiter.php?c=', catName);
};

/* import { API_URL } from './config';

const getMealById = async (mealId) => {
	const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
	return await response.json();
};

const getAllCategories = async () => {
	const response = await fetch(API_URL + 'categories.php');
	return await response.json();
};

const getFilteredCategory = async (catName) => {
	const response = await fetch(API_URL + 'filter.php?c=' + catName);
	return await response.json();
};

export { getMealById, getAllCategories, getFilteredCategory }; */
