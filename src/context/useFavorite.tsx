import React, {useContext, createContext, useState, ReactNode} from 'react';

interface FavoriteContextProps {
  updatedFavorite: (characterId: number) => void;
  favoritesCharacterList: number[];
}

interface FavoriteProviderProps {
  children: ReactNode;
}

const FavoriteContext = createContext({} as FavoriteContextProps);

const FavoriteProvider = ({children}: FavoriteProviderProps) => {
  const [favoritesCharacterList, setFavoritesCharacterList] = useState([0]);

  const updatedFavorite = (characterId: number) => {
    const isFavorite = favoritesCharacterList.includes(characterId);

    isFavorite
      ? removeCharacterFavoriteList(characterId)
      : setFavoritesCharacterList(prevState => [...prevState, characterId]);
  };

  const removeCharacterFavoriteList = (characterId: number) => {
    const listFilter = favoritesCharacterList.filter(id => characterId !== id);
    setFavoritesCharacterList(listFilter);
  };

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
