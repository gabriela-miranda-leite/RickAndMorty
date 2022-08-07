import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../routes';

import * as S from './styles';

type HomeScreenProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const Home = () => {
  const navigation = useNavigation<HomeScreenProps>();

  return (
    <S.Container>
      <S.Background
        testID="background-image"
        source={require('../../assets/home.png')}>
        <S.Logo testID="logo-image" source={require('../../assets/logo.png')} />

        <S.ButtonToHome
          testID="continue-button"
          onPress={() => navigation.navigate('Feed')}>
          <S.TextButton testID="text-button">Prosseguir</S.TextButton>
          <S.ArrowIcon
            testID="arrow-icon"
            name="arrow-forward"
            size={18}
            color="#FFFFFF"
          />
        </S.ButtonToHome>
      </S.Background>
    </S.Container>
  );
};
