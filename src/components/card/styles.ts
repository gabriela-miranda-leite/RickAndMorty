import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../styles/theme';

interface ColorTextProps {
  isLabel?: boolean;
}

export const Container = styled.TouchableOpacity.attrs({activeOpacity: 0.8})`
  width: 100%;
  height: 150px;

  flex-direction: row;

  border-radius: 6px;
  background-color: ${theme.colors.text.light};
  margin-bottom: 15px;
`;

export const ImageCharacter = styled.Image`
  width: 50%;
`;

export const DetailsCharacter = styled.View`
  padding: 5px 15px 10px 10px;
  width: 50%;
`;

export const NameCharacter = styled.Text.attrs({numberOfLines: 1})`
  font-size: 20px;
  color: ${theme.colors.text.dark};
  font-family: ${theme.fonts.semiBold};
`;

export const DetailsText = styled.Text<ColorTextProps>`
  width: 70%;
  color: ${({isLabel}) =>
    isLabel ? theme.colors.text.dark : theme.colors.text.info};
  font-size: 16px;
  font-family: ${({isLabel}) =>
    isLabel ? theme.fonts.regular : theme.fonts.semiBold};
`;

export const FavoriteContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;

  justify-content: space-between;
  width: 100%;
`;

export const HeartIcon = styled(Icon)``;
