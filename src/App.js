// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import DataDisplayComponent from './components/DataDisplayComponent';
import './App.css'; 

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <header className="app-header">
          <h1>User Data</h1>
          <DataDisplayComponent />
        </header>
      </div>
    </Provider>
  );
}

export default App;
