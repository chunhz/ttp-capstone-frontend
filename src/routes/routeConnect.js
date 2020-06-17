import React from 'react';
import { Route, Switch } from 'react-router-dom';

const routeConnect = () => {

    return (
      <div className="app-wrapper">
        <Switch>
          <Route exact path='/' component={} />
          <Route exact path='/search' component={} />
          <Route exact path='/hotspots/' component={} />
          <Route exact path='/hotspots/:zipCode' component={} />
          <Route exact path='/hotspots/new' component={}  routeType="protected"/>
          <Route exact path='/hotspots/:id/edit' component={}  routeType="protected"/>
        
        </Switch>
      </div>
    );
  }
//login, sign up, 

export default routeConnect;