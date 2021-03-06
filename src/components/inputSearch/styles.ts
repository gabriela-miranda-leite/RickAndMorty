import styled from 'styled-components/native';

import {TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {theme} from '../../styles/theme';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  background-color: ${theme.colors.text.light};
  border-radius: 6px;
  margin: -30px 15px 0;
`;

export const SearchInput = styled(TextInput)`
  color: ${theme.colors.text.dark};
`;

export const SearchIcon = styled(Icon)`
  padding: 15px;
`;
