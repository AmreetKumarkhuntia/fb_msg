import './css/App.css';
import './css/Global.scss';

import SignUp from './pages/signup/signup';
import Login from './pages/login/login';
import Home from './pages/home/home';
import ConnectPage from './pages/connectpage/connectpage';

import { BrowserRouter as Router , Switch, Route, Redirect} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/home"> 
            <Home />
          </Route>
          <Route path="/fbconnect"> 
            <ConnectPage />
          </Route>
          <Redirect exact from="/" to="/home" />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
