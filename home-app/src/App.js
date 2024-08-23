import React, { lazy, Suspense, useState } from 'react'; // Must be imported for webpack to work
import './App.css';
import Products from './Products';

const Header = lazy(() => import('HeaderApp/Header'));

function App() {
  const [cartCount, setCartCount] = useState(0);
  const user = {
    firstName: "Dev",
    email: "devrampat@gmail.com"
  }
  const updateCart = () => {
    setCartCount(cartCount + 1);
  }
  return (
    <div className="App">
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header user={user} cartCount={cartCount}/>
      </Suspense>
      <div className="container">Demo home page</div>
      <Products updateCart={updateCart}/>
    </div>
  );
}

export default App;