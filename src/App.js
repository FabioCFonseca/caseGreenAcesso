import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import Navbar from './styles/blocks/Navbar';
import Favorites from './Favorites';
import Container from './styles/Container';

const client = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={client}>
      <BrowserRouter>
        <Navbar/>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
          </Container>
        </BrowserRouter>  
      </QueryClientProvider>
    </div>
  );
}

export default App;
