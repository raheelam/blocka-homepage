import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import NavigationBar from './components/Navigation/NavigationBar';
import Gift from './components/Gift/Gift';
import Shop from './components/Shop/Shop';
import Wallet from './components/Wallet/Wallet';
import Activity from './components/Activity/Activity';


function App() {
  return (
    <>
      <BrowserRouter>
        <div style={{maxWidth:"100vw", overflow:"hidden"}}>
            <Header />
                <Route path="/gift" exact component={Gift} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/wallet" exact component={Wallet} />
                <Route path="/activity" exact component={Activity} />
                <Route path="/" exact component={HomePage} />
            <div style={{width:"100vw" , overflow: "hidden"}} className="fixed-bottom ">
                <div className="p-3 bg-lightgrey"></div>
                <NavigationBar  />
            </div>  
        </div>
      </BrowserRouter>
    </>
    
  );
}

export default App;
