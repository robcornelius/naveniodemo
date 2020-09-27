import React, {useState} from 'react';
import {unmountComponentAtNode} from 'react-dom';
import {render} from '@testing-library/react';
import {act} from 'react-dom/test-utils';
import Dropdown from './dropdown';
import axios from 'axios'

let container = null;

jest.mock('axios');

const dummyData = {
  data: {
    next: null,
    results: [
      {name: 'foo'},
      {name: 'bar'}
    ]
  }
}
axios.get.mockImplementationOnce(() => {
  return Promise.resolve(dummyData)
});

test ('renders a control with dummy data', () => {
  container = document.createElement('div');
  document.body.appendChild(container);


  const dropdownLabel = document.querySelector('.selectedCharacterBox .dropdown a');
  const dropdownDiv = document.querySelector('.dropdown-menu');
  act(() => {
    render(<Dropdown/>, container);
  });
  expect(dropdownLabel.innerHTML).toBe('Select Character');
  act(() => {
    dropdownLabel.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
  expect (dropdownDiv.classList.contains('show')).toBeTruthy();
  const dropDownNames = document.getElementsByTagName('dropdown-item');
  act(() => {
    dropDownNames[0].dispatchEvent(new MouseEvent('click', {bubbles: true}))
  });
  expect(dropdownLabel.innerHTML).toBe('foo');
  expect (dropdownDiv.classList.contains('show')).toBeFalsey();


  unmountComponentAtNode(container);
  container.remove();
  container = null;
})
