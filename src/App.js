import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import Navbar from './styles/blocks/Navbar';
import Favorites from './Favorites';

const client = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={client}>
      <BrowserRouter>
        <Navbar/>  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </BrowserRouter>  
      </QueryClientProvider>
    </div>
  );
}

export default App;
