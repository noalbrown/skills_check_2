import React from 'react';
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Form />
    </div>
  );
}

export default App;
