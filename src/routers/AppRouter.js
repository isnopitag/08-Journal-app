import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { login } from "../actions/auth";
import { useDispatch } from "react-redux";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.uid.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1>Espere...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          {/* <PublicRoute
            
            path="/login"
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          /> */}
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            exact
            path="/"
            component={JournalScreen}
            isAuthenticated={isLoggedIn}
          />
          <Redirect to="/auth/login" />
          {/* <Route
                        path="/auth"
                        component={AuthRouter}
                    />
                    <Route
                        exact
                        path="/"
                        
                        component={JournalScreen}
                    />
                    */}
        </Switch>
      </div>
    </Router>
  );
};
