import React from 'react';
import './App.css';

import PrimaryButton from '../components/primaryButton';


class App extends React.Component {
  render() {
    return (
      <main>
        <nav>
         
        </nav>

        <div className="container">
        <PrimaryButton  type="Primary" bgColor='green' ></PrimaryButton>
          <PrimaryButton type="Second" bgColor='#E1C71D' textColor="black"></PrimaryButton>
          <PrimaryButton type="Warning" bgColor='red'></PrimaryButton>
        </div>
      </main>
    )
  }
}

export default App;
