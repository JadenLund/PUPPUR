import React, { useCallback } from "react";
import { useState } from "react";
const FavoritesContext = React.createContext({ favorites: [] });

const FavoriteDogs = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const add = useCallback(
    (favorite) => setFavorites((current) => [...current, favorite]),
    [setFavorites]
  );

  return (
    <FavoritesContext.Provider value={{ favorites, add }}>
      {children}
    </FavoritesContext.Provider>
  );
};
export default FavoriteDogs;
