import { ClipLoader } from 'react-spinners';
import Portal from '../Portal';

import './styles.scss';

const Spinner: React.FC = () => {
  return (
    <Portal>
      <div className="Loading">
        <div className="Loading__spinner">
          <ClipLoader />
        </div>
      </div>
    </Portal>
  );
};

export default Spinner;
