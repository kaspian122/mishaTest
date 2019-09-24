import React from 'react';
import { Route, Switch } from "react-router-dom";
import RequestPage from './pages/requestPage';
import Login from './pages/loginPage';
import NewsPage from './pages/newsPage';
import MissingPage from './components/missingPage'
import ProtectedPage from './components/protectedPage';
import ApplicationsPage from "./pages/applicationsPage";
import Application from "./pages/applicationPage";

function App() {
  return (
      <div className="App">
        <Switch>
            <ProtectedPage path="/login" renderHeader> <Login/> </ProtectedPage>
            <ProtectedPage path="/applications" renderHeader> <ApplicationsPage/> </ProtectedPage>
            <ProtectedPage path="/news" renderHeader> <NewsPage/> </ProtectedPage>
            <ProtectedPage path="/request" renderHeader> <RequestPage/> </ProtectedPage>
            <ProtectedPage path="/application/:id" renderHeader> <Application/> </ProtectedPage>
          <Route component={MissingPage}/>
        </Switch>
      </div>
  );
}

export default App;