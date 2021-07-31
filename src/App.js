import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/common.css';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppBar } from './components/AppBar';
import { Container } from './components/Container';
import { authOperations } from './redux/auth';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
import {authSelectors} from './redux/auth';

const HomeView = lazy(() => import('./views/HomeView') /* webpackChunkName: "home-view" */);
const RegisterView = lazy(() => import('./views/RegisterView') /* webpackChunkName: "register-view" */);
const LoginView = lazy(() => import('./views/LoginView') /* webpackChunkName: "login-view" */);
const ContactsView = lazy(() => import('./views/ContactsView') /* webpackChunkName: "contacts-view" */);



const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(authSelectors.getIsAuth);

  useEffect(() => {
    isAuth && dispatch(authOperations.getCurrentUser())
  }, [dispatch, isAuth]);


    return (
        <Container>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute path='/' exact > <HomeView /> </PublicRoute>
          <PublicRoute path='/register' restricted redirectTo='/' > <RegisterView /> </PublicRoute>
          <PublicRoute path='/login' restricted redirectTo='/contacts' > <LoginView /> </PublicRoute>
          <PrivateRoute path='/contacts' redirectTo='/login' > <ContactsView /> </PrivateRoute>
        </Switch>
        </Suspense>
        </Container>
      )

}

export default App;
