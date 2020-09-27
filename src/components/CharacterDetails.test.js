import React, {useState} from 'react';
import ReactDom from 'react-dom';
import {render} from '@testing-library/react';
import CharacterDetails from './CharacterDetails';
import App from '../App';


test('renders an empty table', () => {

  const {container, getByText} = render (
    <App>
        <CharacterDetails/>
    </App>
  );

  const headers = ['Gender', 'Birth year', 'Height', 'Mass', 'Hair Color'];
  headers.forEach(str => {
    expect(getByText(str)).toBeInTheDocument();
  })
});

test('renders dummy data into the table', () => {

  const dummyData = {
    name: 'Rob',
    gender: 'male',
    height: '182',
    mass: '103',
    hair_color: 'balding'
  }

  const {container, getAllByText} = render (
    <App dummyContext={dummyData}>
      <CharacterDetails/>
    </App>
  );

  for (const [key, value] of Object.entries(dummyData)) {
    if (key === 'name') {
      expect(getAllByText(value).length).toBe(2);
    } else {
      expect(getAllByText(value).length).toBe(1);
    }
  }

})
