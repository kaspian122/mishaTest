import React from 'react';
import { Route, Switch } from "react-router-dom";
import Admin from './pages/Admin';
import Request from './pages/Request';
import Login from './pages/Login';
import News from './pages/News';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound'
import ProtectedPage from './components/ProtectedPage';

function App() {

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/login" component={Login}/>
        <ProtectedPage path="/admin" component={Admin}/>
        <ProtectedPage path="/news" component={News}/>
        <ProtectedPage path="/request" component={Request}/>
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  );
}

export default App;
