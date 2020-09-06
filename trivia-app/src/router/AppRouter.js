import React,{useEffect} from "react";
import { Route, Switch, Router, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from 'history';
import App from "../App";
import Results from '../view/Results'

export const history = createBrowserHistory();

const AppRouter = ({hideLoader}) => {

  useEffect(()=>{
    hideLoader()
  
  }, [hideLoader]);
  return (
  <Router history={history}>
    <div className="wrap">
      <Switch>
        <Route path="/" exact={true} component={App} />

        <Route path="/results"  component={Results} />
      </Switch>
    </div>
  </Router>)
};

export default AppRouter;
