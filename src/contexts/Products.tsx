import React, { useState, createContext } from 'react';
import { ProductTypes } from '../types/productTypes';

interface IProductsProvider {
  products: ProductTypes[] | undefined;
  setProducts: React.Dispatch<React.SetStateAction<ProductTypes[] | undefined>>;
}

export const ProductsContext = createContext({} as IProductsProvider);

export const ProductsProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<ProductTypes[] | undefined>([]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
