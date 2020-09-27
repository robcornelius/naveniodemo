import axios from 'axios';

export const getAllCharacters = (url, people, resolve, reject) => {
    axios.get(url)
    .then(response => {
      const returnedPeople = people.concat(response.data.results);
      if (response.data.next !== null) {
        getAllCharacters(response.data.next, returnedPeople, resolve, reject)
      } else {
        resolve(returnedPeople);
      }
    })
    .catch(err => {
      console.error(err);
      reject('something went wrong')
    })
  }

