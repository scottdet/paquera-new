import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { cookies } from './cookie' 
import 'semantic-ui-css/semantic.min.css'
import './App.css';

import Main from './view/app'
import AgeCookieComponent from './view/age-cookie'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const cookie = cookies.get('verification');
    console.log(cookie);
    if (cookie === 'yes' ) {
      return(
        <div>
          <Router>
            <Switch>
              <Route path="/" component={Main} />
              <Redirect to="/" />
            </Switch>
          </Router>
        </div>
      )
    } else {
      return (
        <AgeCookieComponent />
      )
    }
  }
}
export default App;
