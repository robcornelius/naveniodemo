import axios from 'axios';
import * as Utils from './characterList';

jest.mock('axios');

const dummyOne = {
  data: {
    next: 'foo',
    results: [{name: 'foo'}, {name: 'bar'}]
  }
}
const dummyTwo = {
  data: {
    next: null,
    results: [{name: 'bar'}, {name: 'foo'}]
  }
}
axios.get.mockImplementationOnce(() => {
  return Promise.resolve(dummyOne)
}).mockImplementationOnce(() => {
  return Promise.resolve(dummyTwo)
})

test('makes two calls and gets data for each one then combines them', () => {
  new Promise((resolve, reject) => {
    Utils.getAllCharacters('foo', [], resolve, reject)
  })
  .then(response => {
    expect(response).toEqual([...dummyOne, ...dummyTwo]);
  })
})
