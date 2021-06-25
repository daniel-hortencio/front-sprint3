import './styles.scss';

import ImageArrow from '../../assets/filter.svg';
import { FilterTypes } from '../../types/filterTypes';

interface FiltersProps {
  filters: FilterTypes[] | undefined;
}

const Filters: React.FC<FiltersProps> = ({ filters }) => {
  return (
    <section className="main__filters filters">
      <ul className="filters__list">
        {filters?.map(filterOption => (
          <li className="filters__item" key={filterOption.id}>
            <span className="filters__label">{filterOption.label}</span>
            <img className="filters__img" src={ImageArrow} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Filters;
