import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../routes';

import * as S from './styles';

type ProfileScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'Profile'
>;

interface CharacterProps {
  character: {
    id: number;
    name: string;
    image: string;
    species: string;
    origin: {
      name: string;
    };
  };
}

export const Card = ({character}: CharacterProps) => {
  const navigation = useNavigation<ProfileScreenProps>();

  return (
    <S.Container onPress={() => navigation.navigate('Profile')}>
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
          <S.HeartIcon name="cards-heart" size={16} color="#1E2047" />
        </S.FavoriteContainer>
      </S.DetailsCharacter>
    </S.Container>
  );
};
