const baseUrl = 'https://rickandmortyapi.com/api';

export const getEpisodesData = async (pattern, page = 1, nameFilter = '') => {
  try {
    const request = await fetch(`${baseUrl}/${pattern}?page=${page}&name=${nameFilter}`);
    const data = request.json()

    return data;

  } catch (error) {
    console.error(error)
  }
}
