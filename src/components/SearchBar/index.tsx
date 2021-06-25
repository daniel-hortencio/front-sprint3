import { api } from '../../services/api';

import { useLoading, useMessage, useProducts, useSearch } from '../../hooks';

import { ProductTypes } from '../../types/productTypes';

import IconSearch from '../../assets/search.svg';

import './styles.scss';

const SearchBar = () => {
  const { search, setSearch } = useSearch();
  const { setProducts } = useProducts();
  const { addRequest, removeRequest } = useLoading();

  const { addMessage } = useMessage();

  function handleSearch(e: React.SyntheticEvent) {
    e.preventDefault();

    addRequest();
    api
      .getProducts(search)
      .then((res: ProductTypes[]) => {
        setProducts(res);
      })
      .catch((err: any) => {
        console.log(err);

        addMessage({
          status: 'error',
          text: 'Não foi possível buscar por produtos',
        });
      })
      .finally(() => removeRequest());
  }

  return (
    <form className="header__search" onSubmit={handleSearch}>
      <img className="header__icon" src={IconSearch} />
      <input
        className="header__input"
        type="search"
        placeholder="O que você está procurando?"
        onChange={e => setSearch(e.target.value)}
        value={search}
      />
    </form>
  );
};

export default SearchBar;
