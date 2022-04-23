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
      <S.Background source={require('../../assets/home.png')}>
        <S.Logo source={require('../../assets/logo.png')} />

        <S.ButtonToHome onPress={() => navigation.navigate('Feed')}>
          <S.TextButton>Prosseguir</S.TextButton>
          <S.ArrowIcon name="arrow-forward" size={22} color="#FFFFFF" />
        </S.ButtonToHome>
      </S.Background>
    </S.Container>
  );
};
