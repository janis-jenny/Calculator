/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import PropTypes from 'prop-types';
import Display from '../Display';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('1. Display rendering', () => {
  render(<Display result="12654" />, container);
  expect(container.textContent).toBe('12654');
});

test('2. Display the default value', () => {
  render(<Display result={undefined} />, container);
  expect(container.textContent).toBe('0');
});

test('3. Types for the props', () => {
  expect(Display.propTypes.result).toBe(PropTypes.string);
});
