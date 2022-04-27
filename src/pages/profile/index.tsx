import React from 'react';

import {Linking, ScrollView} from 'react-native';

import {useNavigation, RouteProp} from '@react-navigation/native';

import {CharacterProps} from '../../pages/feed';
import {useFavorite} from '../../context/useFavorite';

import * as S from './styles';
interface Props {
  route: RouteProp<
    {
      params: {
        character: CharacterProps;
      };
    },
    'params'
  >;
}

export const Profile: React.FC<Props> = ({route}) => {
  const navigation = useNavigation();
  const {favoritesCharacterList, updatedFavorite} = useFavorite();
  const {character} = route.params;

  const searchGoogle = () => {
    return Linking.openURL(
      `https://www.google.com.br/search?q=Rick%20and%20Morty%20${character?.name}`,
    );
  };

  return (
    <S.Container>
      <S.ContentImage>
        <S.CharacterImage source={{uri: character.image}} />
      </S.ContentImage>

      <ScrollView>
        <S.Content>
          <S.FavoriteContainer>
            <S.Name>{character.name}</S.Name>

            <S.ButtonFavorite onPress={() => updatedFavorite(character.id)}>
              {favoritesCharacterList.includes(character.id) ? (
                <S.HeartIcon name="cards-heart" size={30} color="#1E2047" />
              ) : (
                <S.HeartIcon
                  name="cards-heart-outline"
                  size={30}
                  color="#1E2047"
                />
              )}
            </S.ButtonFavorite>
          </S.FavoriteContainer>

          <S.Details>
            <S.DetailsContent>
              <S.Label>Species:</S.Label>
              <S.Info>{character.species}</S.Info>
            </S.DetailsContent>

            <S.DetailsContent>
              <S.Label>Gender:</S.Label>
              <S.Info>{character.gender}</S.Info>
            </S.DetailsContent>
          </S.Details>

          <S.Separator />

          <S.LocationContent>
            <S.Label>Location:</S.Label>
            <S.Info>{character.location.name}</S.Info>
          </S.LocationContent>

          <S.Separator />

          <S.Details>
            <S.DetailsContent>
              <S.Label>Origin:</S.Label>
              <S.Info>{character.origin.name}</S.Info>
            </S.DetailsContent>

            <S.DetailsContent>
              <S.Label>Status:</S.Label>
              <S.Status status={character.status}>{character.status}</S.Status>
            </S.DetailsContent>
          </S.Details>
        </S.Content>
      </ScrollView>

      <S.ButtonGoogle>
        <S.ButtonContent onPress={() => searchGoogle()}>
          Buscar no Google
        </S.ButtonContent>
      </S.ButtonGoogle>
    </S.Container>
  );
};
