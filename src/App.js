import React from 'react';
import { Route, Switch } from "react-router-dom";
import Request from './pages/Request';
import Login from './pages/Login';
import News from './pages/News';
import MissingPage from './components/MissingPage'
import ProtectedPage from './components/ProtectedPage';
import Applications from "./pages/Applications";

function App() {
  return (
      <div className="App">
        <Switch>
            <ProtectedPage path="/login" renderHeader> <Login/> </ProtectedPage>
            <ProtectedPage path="/applications" renderHeader> <Applications/> </ProtectedPage>
            <ProtectedPage path="/news" renderHeader> <News/> </ProtectedPage>
            <ProtectedPage path="/request" renderHeader> <Request/> </ProtectedPage>
          <Route component={MissingPage}/>
        </Switch>
      </div>
  );
}

export default App;