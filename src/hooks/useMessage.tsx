import { useContext } from 'react';
import { MessageContext } from '../contexts/Message';

export const useMessage = () => {
  const context = useContext(MessageContext);

  if (!context)
    throw new Error('useMessage must be used within a MessageProvider');

  const { messages, addMessage, removeMessage } = context;

  return { messages, addMessage, removeMessage };
};
