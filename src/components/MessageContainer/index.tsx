import Message from '../MessageToast';

import { useMessage } from '../../hooks';

import S from './styles.module.scss';

export const MessagesContainer: React.FC = () => {
  const { messages, removeMessage } = useMessage();

  return (
    <div className={`${S.MessagesContainer}`}>
      {messages?.map(message => (
        <Message
          key={message.id}
          onClick={() => removeMessage(message.id)}
          status={message.status}
          text={message.text}
        />
      ))}
    </div>
  );
};
