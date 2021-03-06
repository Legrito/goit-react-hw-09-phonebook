import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const PublicRoute = ({
    redirectTo,
    children,
    ...routeProps
}) => {
    const isLoggedIn = useSelector(authSelectors.getIsAuth); 
    return (
    < Route {...routeProps}> 
    {isLoggedIn && routeProps.restricted ? (
         <Redirect to={redirectTo} />
         ) : (
             children
             )}
              </Route>
              );
};


export default PublicRoute;