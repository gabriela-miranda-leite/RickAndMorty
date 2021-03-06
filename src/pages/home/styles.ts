import styled from 'styled-components/native';
import {ImageBackground} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {theme} from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
`;

export const Background = styled(ImageBackground).attrs({
  resizeMode: 'cover',
})`
  flex: 1;
  width: 100%;

  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image`
  margin: 20px 50px;
`;

export const ButtonToHome = styled.TouchableOpacity.attrs({activeOpacity: 0.8})`
  height: 50px;
  margin: 0 35px 50px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.primary};
  border-radius: 8px;

  padding: 0px 50px;
`;

export const TextButton = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 16px;
  color: ${theme.colors.text.light};
`;

export const ArrowIcon = styled(Icon)`
  margin: 0 0 2px 5px;
`;
