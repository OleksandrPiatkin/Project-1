import React from 'react';
import './App.css';
import BottomAppBar from '../components/BottomAppBar';
import Header from '../components/Header';
import ItemsList from '../components/ItemsList';

function App() {
  return (
    <div>
      <Header />
      <ItemsList />
      <BottomAppBar />
    </div>
  );
}

export default App;
