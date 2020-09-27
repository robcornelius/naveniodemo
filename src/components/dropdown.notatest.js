import React, {useState} from 'react';
import {unmountComponentAtNode} from 'react-dom';
import {render} from '@testing-library/react';
import {act} from 'react-dom/test-utils';
import Dropdown from './dropdown';
import axios from 'axios'

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEatch(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test ('renders a control with dummy data', () => {

  jest.mock('axios');

  

})
