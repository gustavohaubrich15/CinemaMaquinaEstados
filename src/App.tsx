import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RoutesApp } from './routes/RoutesApp';
import { Container } from './shared/component/Container';
import { CinemaProvider } from './shared/context/CinemaContext';

export const App: React.FC = () => {
  return (
    <Container>
      <CinemaProvider>
        <BrowserRouter>
          <RoutesApp />
        </BrowserRouter>
      </CinemaProvider>
    </Container>
  );
}

export default App;