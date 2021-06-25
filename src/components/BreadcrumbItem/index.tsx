import { NavLinkTypes } from '../../types/navLinksTypes';

import './styles.scss';

interface BreadcrumbsProps extends NavLinkTypes {
  isLastItem: boolean;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  label,
  path,
  isLastItem,
}) => {
  return (
    <li className="breadcrumbs__item">
      {path ? (
        <a className="breadcrumbs__link" href={path}>
          {label}
        </a>
      ) : (
        <span className="breadcrumbs__link">{label}</span>
      )}

      {!isLastItem && (
        <span className="breadcrumbs__item  breadcrumbs__separator">/</span>
      )}
    </li>
  );
};

export default Breadcrumbs;
