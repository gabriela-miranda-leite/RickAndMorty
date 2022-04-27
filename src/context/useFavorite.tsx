import React, {useContext, createContext, useState, ReactNode} from 'react';

interface FavoriteContextProps {
  setIsFavorite: (isFavorite: boolean) => void;
  isFavorite: boolean;
}

interface FavoriteProviderProps {
  children: ReactNode;
}

const FavoriteContext = createContext({} as FavoriteContextProps);

const FavoriteProvider = ({children}: FavoriteProviderProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <FavoriteContext.Provider value={{isFavorite, setIsFavorite}}>
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
