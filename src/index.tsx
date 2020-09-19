import 'reflect-metadata';
import 'mobx-react/batchingForReactDom';

import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import * as mobx from 'mobx';

import { App } from './App';
import { ContainerProvider } from './common/components';
import { configureContainer } from './container.config';

// mobx.configure({ enforceActions: 'observed' });

const container = configureContainer();

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ContainerProvider container={container}>
      <App />
    </ContainerProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
