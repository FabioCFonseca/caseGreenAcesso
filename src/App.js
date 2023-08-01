import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import Header from './styles/blocks/Header';

const client = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
