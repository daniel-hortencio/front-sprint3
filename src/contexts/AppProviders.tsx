import { CategoriesProvider } from './Categories';
import { LoadingProvider } from './Loading';
import { MessageProvider } from './Message';
import { ProductsProvider } from './Products';
import { SearchProvider } from './Search';

export const AppProviders: React.FC = ({ children }) => {
  return (
    <LoadingProvider>
      <MessageProvider>
        <CategoriesProvider>
          <ProductsProvider>
            <SearchProvider>{children}</SearchProvider>
          </ProductsProvider>
        </CategoriesProvider>
      </MessageProvider>
    </LoadingProvider>
  );
};
