import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../routes';
import {useFavorite} from '../../context/useFavorite';

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
  const {updatedFavorite, favoritesCharacterList} = useFavorite();

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

        <S.DetailsText numberOfLines={1}>{character.origin.name}</S.DetailsText>
      </S.DetailsCharacter>

      <S.ButtonFavorite onPress={() => updatedFavorite(character.id)}>
        {favoritesCharacterList.includes(character.id) ? (
          <S.HeartIcon name="cards-heart" size={30} color="#1E2047" />
        ) : (
          <S.HeartIcon name="cards-heart-outline" size={30} color="#1E2047" />
        )}
      </S.ButtonFavorite>
    </S.Container>
  );
};
