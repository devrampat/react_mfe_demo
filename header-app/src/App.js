import React from 'react'; // Must be imported for webpack to work
import './App.css';

function App(props) {
  return (
    <div className="HeaderApp">
      <div>Header</div>
      <div className='RightSection'>
        <div>{props?.user?.email}</div>
        <div>{props?.cartCount}</div>
      </div>
      
    </div>
  );
}

export default App;