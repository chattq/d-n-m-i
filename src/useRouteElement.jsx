import { useRoutes } from 'react-router-dom'
import SignIn from './components/SignIn/SignIn'
import MainLayout from './layouts/MainLayout/MainLayout'
import Home from './view/home/Home'
import Profile from './view/profile/Profile'

export default function useRouteElement() {
  const routerElements = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: '/sign-in',
      element: <SignIn />
    },
    {
      path: '/profile',
      element: <Profile />
    }
  ])
  return routerElements
}
