import axios from 'axios';
import { useQuery } from 'react-query';

export const fetchData = async () => {
  let responseData = [];
  let nextPage = 'https://rickandmortyapi.com/api/character/?page=1';

  while (nextPage !== null) {
    try {
      const response = await axios.get(nextPage);
      nextPage = response.data.info.next;
      responseData = responseData.concat(response.data.results);
    } catch (error) {
      throw new Error('Failed to fetch data from the API.');
    }
  }
  console.log('Fetched')
  console.log(responseData);
  return responseData;
};


export const useCharacters = () => {
    return useQuery('Characters', fetchData, {
        staleTime: 600000, // 10 minutes (in milliseconds)
      });
  };
