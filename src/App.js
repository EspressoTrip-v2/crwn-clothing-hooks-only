import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

/* REACT COMPONENTS */
import Header from './components/header/header.component';

/* REACT PAGES */
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

/* FIREBASE */
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

/* CONTEXT COMPONENTS */
import CurrentUserContext from './context/current-user/current-user.context';

const App = () => {
  /* STATE HOOK */
  const [currentUser, setCurrentUser] = useState(null);
  /* EFFECT HOOK */
  useEffect(() => {
    /* LISTENER GETTING USER AUTH IF STATE HAS CHANGED  */
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      /* CHECK IF USER AUTH IS NOT NULL */
      if (userAuth) {
        /* FIREBASE CODE */
        /* GET THE USER REFERENCE OBJECT FROM THE CREATE PROFILE FUNCTION */
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef) {
          /* GET THE SNAPSHOT OF USER REFERENCE TO EXTRACT THE DATA*/
          userRef.onSnapshot((snapshot) => {
            /* SET THE STATE */
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            });
          });
        }
      }
      /* IF USER AUTH IS NULL SET STATE TO NULL */
      setCurrentUser(null);
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
      </CurrentUserContext.Provider>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUp />)}
        />
      </Switch>
    </div>
  );
};

export default App;
