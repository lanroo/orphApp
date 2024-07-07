import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" Component={Landing} />
      <Route path="/app" Component={OrphanagesMap} />
    </BrowserRouter>
  );
}

export default Routes;
