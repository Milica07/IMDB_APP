import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActiveUser } from "./store/auth/slice";
import { selectIsAuthenticated, selectActiveUser } from "./store/auth/selectors";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import GuestRoute from "./components/shared/GuestRoute";
import PrivateRoute from './components/shared/PrivateRoute';
import Movies from './pages/Movies';


function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const activeUser = useSelector(selectActiveUser);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getActiveUser());
    }
  }, 
  [dispatch, isAuthenticated]);

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <GuestRoute exact path="/register">
            <Register/>
          </GuestRoute>
          <GuestRoute exact path="/login">
            <Login/>
          </GuestRoute>
          <Route exact path="/"> 
            <Redirect to="/movies"/>
          </Route>
          <Route exact path="/movies">
            <Movies/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
