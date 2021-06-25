import React, { useState, createContext } from 'react';

interface ILoadingProvider {
  isLoading: boolean;
  addRequest: () => void;
  removeRequest: () => void;
}

export const LoadingContext = createContext({} as ILoadingProvider);

export const LoadingProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [requestsInProgress, setRequestsInProgress] = useState<number>(0);

  function addRequest() {
    if (!isLoading) {
      setIsLoading(true);
    }
    setRequestsInProgress(old => old + 1);
  }

  function removeRequest() {
    if (requestsInProgress <= 1) {
      setIsLoading(false);
      setRequestsInProgress(0);
    } else {
      setRequestsInProgress(old => old - 1);
    }
  }

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        addRequest,
        removeRequest,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
