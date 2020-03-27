import React from 'react';
import './App.css';

import Header from '../components/header'
import MainContent from '../components/pages/mainSection'
import Footer from '../components/footer'
class App extends React.Component {
  render() {
    let arr = [`option1`,`option2`,`option3`];
    return (
      <main>
       <Header></Header>
      <MainContent elemente={arr}></MainContent>
      <Footer></Footer>
      
      </main>
    )
  }
}

export default App;
