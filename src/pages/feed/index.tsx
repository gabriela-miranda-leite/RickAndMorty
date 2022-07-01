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
  const [totalCharacters, setTotalCharacters] = useState<number>();
  const [totalPages, setTotalPages] = useState<number>();
  const [search, setSearch] = useState<string>();
  const [page, setPage] = useState<number>(2);

  const nextPage = useCallback(async () => {
    try {
      if (page === totalPages) {
        setPage(1);
        return;
      }

      setPageStatus('loading');
      setPage(page + 1);

      const response = search
        ? await api.get(`/character/?page=${page}&name=${search}`)
        : await api.get(`/character/?page=${page}`);

      setPageStatus('success');

      setDataCharacters(rest => [...rest, ...response.data.results]);
      setTotalPages(response.data.info.pages);
      setTotalCharacters(response.data.info.count);
    } catch (error) {
      setPageStatus('error');

      setTotalCharacters(0);
      setPage(1);
    }
  }, [page, search, totalPages]);

  const filterSearch = useCallback(async () => {
    try {
      setDataCharacters([]);
      setPageStatus('loading');

      const response = await api.get(`/character/?name=${search}`);

      setPageStatus('success');

      setDataCharacters([...response.data.results]);
      setTotalPages(response.data.info.pages);
      setTotalCharacters(response.data.info.count);
    } catch (error) {
      setPageStatus('error');
      setTotalCharacters(0);
      setPage(1);
    }
  }, [search]);

  useEffect(() => {
    try {
      const getAllCharacters = async () => {
        setPageStatus('loading');

        const response = await api.get('/character/');

        setPageStatus('success');

        setDataCharacters(response.data.results);

        setTotalPages(response.data.info.pages);
        setTotalCharacters(response.data.info.count);
      };

      getAllCharacters();
    } catch (error) {
      setPageStatus('error');

      setTotalCharacters(0);
      setPage(1);
    }
  }, []);

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Title>Listagem</S.Title>
        <S.NumberOfCharacters>
          {totalCharacters
            ? `${totalCharacters} personagens`
            : 'Nenhum personagem'}
        </S.NumberOfCharacters>
      </S.HeaderContainer>

      <InputSearch
        placeholder="Busque por um personagem"
        value={search}
        onChangeText={text => {
          setSearch(text);
        }}
        onSubmitEditing={filterSearch}
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
            {pageStatus !== 'loading' && (
              <S.EmptyText>Personagem não encontrado</S.EmptyText>
            )}
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
