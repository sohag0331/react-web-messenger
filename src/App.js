import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import PrivateRoute from "./componenets/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedInUser } from "./actions";
import { useEffect } from "react";

function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticated) {
      dispatch(isLoggedInUser());
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <PrivateRoute path="/" exact component={HomePage} />

        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={RegisterPage} />
      </Router>
    </div>
  );
}

export default App;
