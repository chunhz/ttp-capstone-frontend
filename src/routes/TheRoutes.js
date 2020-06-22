import React from "react";
import { Switch, Route } from "react-router-dom";


const TheRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={AllCampusesContainer} />
      <Route exact path="/campuses" component={AllCampusesContainer} />
       
    </Switch>
  );
};

export default TheRoutes;
