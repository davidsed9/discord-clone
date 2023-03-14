import React, { useEffect } from 'react';
import './App.css';
import Chat from "./Chat";
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from "./features/userSlice";
import Login from './Login';
import {login, logout} from "./features/userSlice";
import { auth } from './features/firebase';
import Sidebar from './Sidebar';

function App() {
  const dispatch = useDispatch(); 
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        // the user is logged out
        dispatch((logout()));
      }

    });
  }, [dispatch]);

  return (
    <div className="app">
      {user ? (
        <>
        <Sidebar />
        <Chat />
        </>
      ) : (
        <Login />
       )}
      
    </div>
  );
}

export default App;
 