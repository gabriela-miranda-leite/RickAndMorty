import React from 'react';

import {TextInputProps, KeyboardAvoidingView} from 'react-native';

import * as S from './styles';

interface InputSearchProps extends TextInputProps {}

export const InputSearch: React.FC<InputSearchProps> = ({
  placeholder,
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
          {...rest}
        />
      </S.Container>
    </KeyboardAvoidingView>
  );
};
