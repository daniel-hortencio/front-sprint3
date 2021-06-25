import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal: React.FC = ({ children }) => {
  const mount = document.getElementById('portal');
  const element = document.createElement('div');

  useEffect((): any => {
    mount?.appendChild(element);
    return () => mount?.removeChild(element);
  }, [element, mount]);

  return createPortal(children, element);
};

export default Portal;
