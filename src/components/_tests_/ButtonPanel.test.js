/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import buttonPanel from '../ButtonPanel';
import Button from '../Button';

test('1. Panel Rendering', () => {
  let buttons = document.getElementsByTagName('button');
  expect(buttons.length).toBe(0);
  render(<Button name="foo" type="button" clickHandler={() => {}} />);
  buttons = document.getElementsByTagName('button');
  expect(buttons.length).toBe(1);
});

test('2. Types for the props', () => {
  expect(buttonPanel.propTypes.clickHandler).toBe(PropTypes.func.isRequired);
});
