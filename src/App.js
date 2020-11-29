import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HOME from './pages/Home';
import SIGNIN from './pages/SignIn';
import USERPAGE from './pages/UserPage';
import FORGOTPASS from './pages/ForgotPassword';
import REGISTER from './pages/Register';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={HOME} exact />
        <Route path="/signin" component={SIGNIN} />
        <Route path="/create-account" component={REGISTER} />
        <Route path="/dashboard" component={USERPAGE} />
        <Route path="/forgot-password" component={FORGOTPASS} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
