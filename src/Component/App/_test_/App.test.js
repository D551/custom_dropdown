import React from 'react'
import { render } from '@testing-library/react';
import App from '../App';

describe('should test App.jsx', () => {
  beforeEach(() => {
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
  });
  test('should render App.js', () => {
    const { asFragment } = render(< App />);
    expect(asFragment(< App />)).toMatchSnapshot();
  });
});