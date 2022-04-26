import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../routes';

import * as S from './styles';

import {CharacterProps} from '../../pages/feed';

type ProfileScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'Profile'
>;

type Props = {
  character: CharacterProps;
};

export const Card = ({character}: Props) => {
  const navigation = useNavigation<ProfileScreenProps>();

  return (
    <S.Container onPress={() => navigation.navigate('Profile', {character})}>
      <S.ImageCharacter
        source={{
          uri: character.image,
        }}
      />
      <S.DetailsCharacter>
        <S.NameCharacter>{character.name}</S.NameCharacter>

        <S.DetailsText isLabel>Species:</S.DetailsText>
        <S.DetailsText numberOfLines={1}>{character.species}</S.DetailsText>

        <S.DetailsText isLabel>Origin:</S.DetailsText>

        <S.FavoriteContainer>
          <S.DetailsText numberOfLines={1}>
            {character.origin.name}
          </S.DetailsText>
          <S.HeartIcon name="cards-heart" size={24} color="#1E2047" />
        </S.FavoriteContainer>
      </S.DetailsCharacter>
    </S.Container>
  );
};
