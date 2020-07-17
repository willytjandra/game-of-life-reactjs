import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  describe('render', () => {
    it('should display heading', () => {
      const { getByTestId } = render(<App />);
      expect(getByTestId('app-heading')).toHaveTextContent("Conway's Game of Life");
    });
  });
});
