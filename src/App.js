import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import { NewProtectedRoute as ProtectedRoute, NewIsUserRedirect as NewRoute } from './shared/ProtectedRoutes/routes'
import useAuthListener from "./shared/Hooks/useAuthListener";

function App() {
  const [ user ] = useAuthListener();
  console.log(user);
  return (
    <Router>
      <Routes>
        <Route 
          path='/' 
          element= {
            <NewRoute 
              user={user} 
              loggedInPath='/browse'>
              <Home />
            </NewRoute> 
          } 
        />
        <Route 
          path='/signup' 
          element= {
            <NewRoute 
              user={user} 
              loggedInPath='/browse'>
              <Signup />
            </NewRoute> 
          } 
        />
        <Route 
          path='/signin' 
          element= {
            <NewRoute 
              user={user} 
              loggedInPath='/browse'>
              <Signin />
            </NewRoute> 
          } 
        />
        <Route exact path='/browse' 
          element={
            <ProtectedRoute user={user} ><Browse /></ProtectedRoute>} />

      </Routes>
    </Router>
  );
}

export default App;

