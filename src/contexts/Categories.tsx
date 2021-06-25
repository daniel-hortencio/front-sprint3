import React, { useState, createContext, useEffect } from 'react';
import { api } from '../services/api';
import { NavLinkTypes } from '../types/navLinksTypes';

import { useMessage, useLoading } from '../hooks';

interface ICategoriesProvider {
  categories: NavLinkTypes[] | undefined;
  setCategories: React.Dispatch<
    React.SetStateAction<NavLinkTypes[] | undefined>
  >;
}

export const CategoriesContext = createContext({} as ICategoriesProvider);

export const CategoriesProvider: React.FC = ({ children }) => {
  const [categories, setCategories] = useState<NavLinkTypes[] | undefined>();

  const { addMessage } = useMessage();
  const { addRequest, removeRequest } = useLoading();

  useEffect(() => {
    addRequest();

    api
      .getCategories()
      .then((res: any) => {
        setCategories(res);

        addMessage({
          status: 'success',
          text: 'Categorias carregadas com sucesso',
        });
      })
      .catch((err: any) => {
        console.log(err);

        addMessage({
          status: 'error',
          text: 'Não foi possível carregar as categorias',
        });
      })
      .finally(() => removeRequest());
  }, []);

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        setCategories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
