import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {theme} from '../../styles/theme';

interface StatusProps {
  status: 'Alive' | 'Dead' | 'Unknown';
}

export const Container = styled.View`
  flex: 1;
`;

export const ContentImage = styled.View`
  height: 50%;
  position: relative;
`;

export const CharacterImage = styled.Image`
  height: 100%;
`;

export const Content = styled.View`
  padding: 20px;
  height: 40%;
`;

export const FavoriteContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonFavorite = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})``;

export const HeartIcon = styled(Icon)``;

export const Name = styled.Text.attrs({numberOfLine: 1})`
  color: ${theme.colors.text.dark};
  font-family: ${theme.fonts.semiBold};
  font-size: 24px;
  margin-bottom: 30px;
`;

export const Label = styled.Text.attrs({numberOfLine: 1})`
  color: ${theme.colors.text.dark};
  font-family: ${theme.fonts.regular};
  font-size: 16px;
`;

export const Info = styled.Text.attrs({numberOfLine: 1})`
  color: ${theme.colors.text.dark};
  font-family: ${theme.fonts.semiBold};
  font-size: 16px;
`;

export const Details = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const DetailsContent = styled.View`
  width: 50%;
`;

export const LocationContent = styled.View`
  width: 100%;
`;

export const Separator = styled.View`
  margin-bottom: 30px;
`;

export const Status = styled.Text<StatusProps>`
  color: ${theme.colors.text.dark};
  font-family: ${theme.fonts.semiBold};
  font-size: 16px;
  color: ${({status}) => theme.colors.status[status]};
`;

export const ButtonGoogle = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: ${theme.colors.primary};
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

export const ButtonContent = styled.Text`
  font-size: 22px;
  color: ${theme.colors.text.light};
  font-family: ${theme.fonts.regular};
`;
