import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom'; 
import App, {addBall} from './App';

it('renders without crashing', () => {
  rtl.render(<App />)
});

test("verify that ball and strike are present", () => {
  const {getByText} = rtl.render(<App />);

  getByText("Ball");
  getByText("Strike");
});

// test("addBall adds one to count", () => {
//   expect(addBall().toBe(0));
// });

test("very strike button is present", () => {
  const {getByTestId} = rtl.render(<App />);

  getByTestId(/strike/i);
});