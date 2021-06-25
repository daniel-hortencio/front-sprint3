import React, { useState, createContext } from 'react';

interface ISearchProvider {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext({} as ISearchProvider);

export const SearchProvider: React.FC = ({ children }) => {
  const [search, setSearch] = useState<string>('');

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
