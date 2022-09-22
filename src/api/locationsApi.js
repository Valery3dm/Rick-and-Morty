import { baseUrl } from "./constants";

export const getLocationsData = async (pattern, page = 1, nameFilter = '', typeFilter = '', dimensionFilter = '') => {
  try {
    const request = await fetch(`${baseUrl}/${pattern}?page=${page}&name=${nameFilter}&type=${typeFilter}&dimension=${dimensionFilter}`);
    const data = request.json();

    return data;

  } catch (error) {
    return error;
  }
}
