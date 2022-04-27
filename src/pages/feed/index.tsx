import React, {useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import api from '../../services/api';

import {InputSearch, Card} from '../../components';

import * as S from './styles';

export interface CharacterProps {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'Unknown';
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
}

export const Feed = () => {
  const [pageStatus, setPageStatus] = useState('idle');
  const [dataCharacters, setDataCharacters] = useState<CharacterProps[]>([]);
  const [totalCharacters, setTotalCharacters] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>();
  const [page, setPage] = useState<number>(2);

  const nextPage = useCallback(async () => {
    if (page === totalPages) {
      setTotalCharacters(0);
      setPage(1);
      return;
    }

    setPageStatus('loading');
    setPage(page + 1);

    const response = await api.get(`/character/?page=${page}`);

    if (response.status !== 200) {
      setPageStatus('error');

      setTotalCharacters(0);
      setPage(1);
      return;
    }

    setPageStatus('sucess');

    setDataCharacters(rest => [...rest, ...response.data.results]);
    setTotalPages(response.data.info.pages);
    setTotalCharacters(response.data.info.count);
  }, [page, totalPages]);

  const filterSearch = useCallback(async search => {
    setPageStatus('loading');

    const response = await api.get(`/character/?name=${search}`);

    if (response.status !== 200) {
      setPageStatus('error');

      setTotalCharacters(0);
      setPage(1);
      return;
    }

    setPageStatus('sucess');

    setDataCharacters([...response.data.results]);
    setTotalPages(response.data.info.pages);
    setTotalCharacters(response.data.info.count);
  }, []);

  useEffect(() => {
    const getAllCharacters = async () => {
      setPageStatus('loading');

      const response = await api.get('/character/');

      if (response.status !== 200) {
        setPageStatus('error');

        setTotalCharacters(0);
        setPage(1);
        return;
      }

      setPageStatus('sucess');

      setDataCharacters(response.data.results);

      setTotalPages(response.data.info.pages);
      setTotalCharacters(response.data.info.count);
    };

    getAllCharacters();
  }, []);

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Title>Listagem</S.Title>
        <S.NumberOfCharacters>
          {totalCharacters} personagens
        </S.NumberOfCharacters>
      </S.HeaderContainer>

      <InputSearch
        placeholder="Busque por um personagem"
        searchFilter={e => filterSearch(e.nativeEvent.text)}
      />

      <FlatList
        style={{padding: 15}}
        data={dataCharacters}
        keyExtractor={item => String(item.id)}
        renderItem={({item: character}) => <Card character={character} />}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        onEndReached={nextPage}
        ListEmptyComponent={() => (
          <S.EmptyList>
            <S.EmptyText>Personagem não encontrado</S.EmptyText>
          </S.EmptyList>
        )}
        ListFooterComponent={
          pageStatus === 'loading' ? (
            <S.Loading size="small" color="#1e2047" />
          ) : (
            <S.FooterComponent />
          )
        }
      />
    </S.Container>
  );
};
