import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const HeaderContainer = styled.View`
  background-color: ${theme.colors.primary};
  padding: 40px 15px 60px 15px;

  flex-direction: row;
  width: 100%;

  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.semiBold};
  color: ${theme.colors.text.light};

  font-size: 20px;
`;

export const NumberOfCharacters = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: ${theme.fonts.semiBold};
  color: ${theme.colors.background};
  font-size: 14px;
`;
