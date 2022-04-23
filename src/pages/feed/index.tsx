import React from 'react';

import {InputSearch} from '../../components';

import * as S from './styles';

export const Feed = () => {
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Title>Listagem</S.Title>
        <S.NumberOfCharacters> 64 personagens</S.NumberOfCharacters>
      </S.HeaderContainer>

      <InputSearch placeholder="Busque por um personagem" />
    </S.Container>
  );
};
