import React from "react";

import NavBar from "@common/NavBar";
import { NavigationProvider, Route } from "@components/Route";
import LandingPage from "@pages/Landing";

const routes = [
  {
    label: "Home",
    path: "/",
    icon: "SMILE",
    component: <LandingPage />,
  },
];

const App = () => (
  <NavigationProvider>
    <NavBar routes={routes} />
    {routes.map((route) => (
      <Route path={route.path}>
        <>{route.component}</>
      </Route>
    ))}
  </NavigationProvider>
);

export default App;
