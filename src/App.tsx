import React from 'react';
import { AppProviders } from './contexts/AppProviders';
import Routes from './routes';

import './styles/global.scss';

const App: React.FC = () => (
  <AppProviders>
    <Routes />
  </AppProviders>
);

export default App;
