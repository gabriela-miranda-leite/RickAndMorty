import React, {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FavoriteContextProps {
  updatedFavorite: (characterId: number) => void;
  favoritesCharacterList: number[];
}

interface FavoriteProviderProps {
  children: ReactNode;
}

const FavoriteContext = createContext({} as FavoriteContextProps);

const FavoriteProvider = ({children}: FavoriteProviderProps) => {
  const [favoritesCharacterList, setFavoritesCharacterList] = useState(
    [] as number[],
  );

  const updatedFavorite = async (characterId: number) => {
    const isFavorite = favoritesCharacterList.includes(characterId);

    isFavorite
      ? removeCharacterFavoriteList(characterId)
      : setFavoritesCharacterList(prevState => [...prevState, characterId]);

    await setAsyncStorage(favoritesCharacterList);
  };

  const removeCharacterFavoriteList = (characterId: number) => {
    const listFilter = favoritesCharacterList.filter(id => characterId !== id);
    setFavoritesCharacterList(listFilter);
  };

  const getAsyncStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@favorite_list');

      return jsonValue != null
        ? setFavoritesCharacterList(JSON.parse(jsonValue))
        : null;
    } catch (e) {}
  };

  const setAsyncStorage = async (value: number[]) => {
    try {
      const jsonValue = JSON.stringify(value);

      await AsyncStorage.setItem('@favorite_list', jsonValue);
    } catch (e) {}
  };

  useEffect(() => {
    getAsyncStorage();
  }, []);

  useEffect(() => {
    setAsyncStorage(favoritesCharacterList);
  }, [favoritesCharacterList]);

  return (
    <FavoriteContext.Provider value={{favoritesCharacterList, updatedFavorite}}>
      {children}
    </FavoriteContext.Provider>
  );
};

const useFavorite = () => {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error('useFavorite must be used within a FavoriteProvider');
  }

  return context;
};

export {FavoriteProvider, useFavorite};
