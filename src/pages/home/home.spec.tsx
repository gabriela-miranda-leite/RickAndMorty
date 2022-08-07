import React from 'react';
import {render} from '@testing-library/react-native';

import {ThemeProvider} from 'styled-components/native';
import {theme} from '../../styles/theme';

import {Home} from '.';

const Provider: React.FC = ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('Home page', () => {
  it('should have a correct button name', () => {
    const {getByTestId} = render(<Home />);
    const nameButton = getByTestId('text-button');

    expect(nameButton.props.children).toContain('Prosseguir');
  });

  it('button color must match the global style', () => {
    const {getByTestId} = render(<Home />, {wrapper: Provider});
    const continueButton = getByTestId('continue-button');

    expect(continueButton.props.style.backgroundColor).toEqual(
      theme.colors.primary,
    );
  });

  it('should render logo image', () => {
    const {getByTestId} = render(<Home />);
    const logo = require('../../assets/logo.png');

    expect(getByTestId('logo-image').props.source).toBe(logo);
  });

  it('should render background image', () => {
    const {getByTestId} = render(<Home />);
    const background = require('../../assets/home.png');

    expect(getByTestId('background-image').props.source).toBe(background);
  });
});
