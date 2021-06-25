import { NavLinkTypes } from '../../types/navLinksTypes';

import BreadcrumbItem from '../BreadcrumbItem';

import './styles.scss';

interface BreadcrumbsProps {
  breadcrumbPath: NavLinkTypes[] | undefined;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbPath }) => {
  return (
    <section className="main__breadcrumbs breadcrumbs">
      <nav>
        <ol className="breadcrumbs__list">
          {breadcrumbPath?.map((breadcrumb, index) => (
            <BreadcrumbItem
              key={breadcrumb.id}
              id={breadcrumb.id}
              path={breadcrumb.path}
              label={breadcrumb.label}
              isLastItem={index === breadcrumbPath.length - 1}
            />
          ))}
        </ol>
      </nav>
    </section>
  );
};

export default Breadcrumbs;
