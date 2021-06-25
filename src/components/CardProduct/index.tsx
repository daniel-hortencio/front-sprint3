import { API_URL } from '../../constants/enviroments';

import { ProductTypes } from '../../types/productTypes';

import './styles.scss';

const CardProduct: React.FC<ProductTypes> = ({
  imageURL,
  description,
  price,
}) => {
  return (
    <li className="products__card card">
      <div className="card">
        <img
          className="card__img"
          src={`${API_URL}/${imageURL}`}
          alt={description}
        />
        <p className="card__description">{description}</p>
        <p className="card__price">R$ {price}</p>
      </div>
    </li>
  );
};

export default CardProduct;
