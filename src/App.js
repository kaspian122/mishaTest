import React from 'react';
import { Route, Switch } from "react-router-dom";
import Request from './pages/requestPage';
import Login from './pages/loginPage';
import News from './pages/newsPage';
import MissingPage from './components/missingPage'
import ProtectedPage from './components/protectedPage';
import Applications from "./pages/applicationsPage";
import Application from "./pages/applicationPage";

function App() {
  return (
      <div className="App">
        <Switch>
            <ProtectedPage path="/login" renderHeader> <Login/> </ProtectedPage>
            <ProtectedPage path="/applications" renderHeader> <Applications/> </ProtectedPage>
            <ProtectedPage path="/news" renderHeader> <News/> </ProtectedPage>
            <ProtectedPage path="/request" renderHeader> <Request/> </ProtectedPage>
            <ProtectedPage path="/application/:id" renderHeader> <Application/> </ProtectedPage>
          <Route component={MissingPage}/>
        </Switch>
      </div>
  );
}

export default App;