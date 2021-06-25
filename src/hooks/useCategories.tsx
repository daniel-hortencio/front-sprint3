import { useContext } from 'react';
import { CategoriesContext } from '../contexts/Categories';

export const useCategories = () => {
  const context = useContext(CategoriesContext);

  if (!context)
    throw new Error('useCategories must be used within a CategoriesProvider');

  const { categories, setCategories } = context;

  return { categories, setCategories };
};
