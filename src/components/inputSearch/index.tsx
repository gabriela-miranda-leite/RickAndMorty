import React from 'react';

import {
  TextInputProps,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  KeyboardAvoidingView,
} from 'react-native';

import * as S from './styles';

interface InputSearchProps extends TextInputProps {
  searchFilter?:
    | ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
    | undefined;
}

export const InputSearch: React.FC<InputSearchProps> = ({
  placeholder,
  searchFilter,
  ...rest
}) => {
  return (
    <KeyboardAvoidingView behavior="position">
      <S.Container>
        <S.SearchIcon name="search" size={20} color="#1E2047" />
        <S.SearchInput
          placeholder={placeholder}
          autoCorrect={false}
          autoCapitalize="none"
          onChange={searchFilter}
          {...rest}
        />
      </S.Container>
    </KeyboardAvoidingView>
  );
};
