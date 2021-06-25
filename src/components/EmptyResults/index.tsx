import { MdInfo } from 'react-icons/md';

import './styles.scss';

const EmptyResults: React.FC = () => {
  return (
    <div className="EmptyResults">
      <MdInfo size={24} />
      <p>Não encontramos produtos correspondentes a seleção.</p>
    </div>
  );
};

export default EmptyResults;
