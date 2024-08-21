import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewGroup from './NewGroup';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<NewGroup />} />
        </Routes>
      </div>
      </BrowserRouter>
   );
}

export default App;
