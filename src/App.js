import React, {useState} from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import SignIn from './components/signin/SignIn';
import Play from './components/play/Play';
import Leaderboard from './components/leaderboard/Leaderboard';
import NotFound from './components/not_found/NotFound';

function App() {

  // Get user from browser's memory if available, otherwise assign an empty object
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {});

  // Assign empty object to user and remove it from browser's memory when user signs out
  const signOut = () => {
    setUser({});
    localStorage.removeItem('user');
  };

  return (
    <BrowserRouter>
      <Navbar user={user} signOut={signOut} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path={['/signin', '/register']} render={props => 
          user.id ? <Redirect to='/play' /> : <SignIn {...props} setUser={setUser} />} />
        <Route exact path='/play' render={props => 
          user.id ? <Play {...props} user={user} setUser={setUser} /> : <Redirect to='/signin' />} />
        <Route exact path='/leaderboard' render={props => <Leaderboard {...props} user={user} />} />
        {/* Handle invalid routes */}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;