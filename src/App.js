import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HOME from './pages/Home';
import SIGNIN from './pages/SignIn';
import USERPAGE from './pages/UserPage';
import FORGOTPASS from './pages/ForgotPassword';
import REGISTER from './pages/Register';
import NOTFOUNDPAGE from './pages/NotFoundPage';
import HOTELDETAILS from './pages/Hotel';
import CHECKOUT from './pages/CheckOut';
import PAYMENT from './pages/Payment';
import 'rsuite/dist/styles/rsuite-default.min.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/sandbox/' component={HOME} exact />
        <Route path='/sandbox/signin' component={SIGNIN} />
        <Route path='/sandbox/create-account' component={REGISTER} />
        <Route path='/sandbox/dashboard' component={USERPAGE} />
        <Route path='/sandbox/forgot-password' component={FORGOTPASS} />
        <Route path='/sandbox/hotel-details/:id' component={HOTELDETAILS} />
        <Route path='/sandbox/checkout' component={CHECKOUT} />
        <Route path='/sandbox/payment' component={PAYMENT} />
        <Route path="*" component={NOTFOUNDPAGE} />
      </Switch>
    </div>
  );
}

export default App;
