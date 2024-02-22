import './App.css';

import { useState } from 'react';

import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  const [checked, toggleChecked] = useState(false);

  return (
    <div className='background'>
      <Header />
      <Main checked={checked} toggleChecked={toggleChecked} />
    </div>
  )
}

export default App
