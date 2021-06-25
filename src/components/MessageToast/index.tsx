import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

import { MessageTypes } from '../../types/messageTypes';

import './styles.scss';

interface MessageToast extends Omit<MessageTypes, 'id'> {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const MessageToast: React.FC<MessageToast> = ({ onClick, status, text }) => {
  const getStatusIcon = () => {
    if (!!status && status === 'error') {
      return <FiAlertCircle size={24} />;
    }

    if (!!status && status === 'success') {
      return <FiCheckCircle size={24} />;
    }

    return;
  };

  const getStatusStyle = () => {
    if (!!status && status === 'error') {
      return 'Error';
    }

    if (!!status && status === 'success') {
      return 'Success';
    }

    return '';
  };

  return (
    <div className={`Message ${getStatusStyle()}`}>
      <div>
        {status && getStatusIcon()}
        <p>{text || ''}</p>
      </div>

      <button onClick={onClick}>
        <IoMdClose size={28} />
      </button>
    </div>
  );
};

export default MessageToast;
