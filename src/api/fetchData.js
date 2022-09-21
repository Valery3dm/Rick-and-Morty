
const baseUrl = 'https://rickandmortyapi.com/api';

export const getApiData = async (pattern, page = 1, gender = '', status = '', species = '', nameFilter = '') => {
    try {
      const request = await fetch(`${baseUrl}/${pattern}?page=${page}&status=${status}&gender=${gender}&species=${species}&name=${nameFilter}`);
      const data = request.json()
  
      return data;
  
    } catch (error) {
      console.error(error)
    }
  }
