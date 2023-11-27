import React from 'react'

import NavBar from '@common/NavBar'
import { NavigationProvider, Route } from '@components/Route'
import DesignPage from '@pages/Design'
import CreativePage from '@pages/Creative'
import LandingPage from '@pages/Landing'
import LibraryPage from '@pages/Library'

const routes = [
  {
    label: 'Home',
    path: '/',
    icon: 'SMILE',
    component: <LandingPage />,
  },
  {
    label: 'Creative',
    path: '/creative',
    icon: 'SMILE',
    component: <CreativePage />,
  },
  {
    label: 'Design',
    path: '/design',
    icon: 'SMILE',
    component: <DesignPage />,
  },
  {
    label: 'Library',
    path: '/library',
    icon: 'SMILE',
    component: <LibraryPage />,
  },
]

const App = () => (
  <NavigationProvider>
    <NavBar routes={routes} />
    {routes.map((route) => (
      <Route path={route.path}>
        <>{route.component}</>
      </Route>
    ))}
  </NavigationProvider>
)

export default App
