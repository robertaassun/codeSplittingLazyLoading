import './App.css';
import { lazy, Suspense } from 'react';

const Logo = lazy(()=>import('./Logo'));
const Slogan = lazy(()=>import('./Slogan'));
const Footer = lazy(()=>import('./Footer'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={ <p>Carregando imagem...</p> } >
          <Logo />
        </Suspense>
        

        <Suspense fallback={ <p>Carregando...</p> } >
          <Slogan />
        </Suspense>
        
        <Suspense fallback={ <p>Carregando...</p> } >
          <Footer />
        </Suspense>

        
        
      </header>
    </div>
  );
}

export default App;
