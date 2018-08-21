import React from 'react';
import { Route } from 'react-router-dom';

import MainScreen from '../components/MainScreen';

const App = () => (
  <div>
    <Route exact path="/" render={MainScreen} />
  </div>
);

export default App;
