import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Inventory />
        <Order />
      </div>
    );
  }
}

export default App;
