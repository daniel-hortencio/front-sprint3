import { useContext } from 'react';
import { ProductsContext } from '../contexts/Products';

export const useProducts = () => {
  const context = useContext(ProductsContext);

  if (!context)
    throw new Error('useProducts must be used within a ProductsProvider');

  const { products, setProducts } = context;

  return { products, setProducts };
};
