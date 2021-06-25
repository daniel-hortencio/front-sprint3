import { useContext } from 'react';
import { LoadingContext } from '../contexts/Loading';

export const useLoading = () => {
  const context = useContext(LoadingContext);

  if (!context)
    throw new Error('useLoading must be used within a LoadingProvider');

  const { isLoading, addRequest, removeRequest } = context;

  return { isLoading, addRequest, removeRequest };
};
