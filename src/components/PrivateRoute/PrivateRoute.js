import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const PrivateRoute = ({
    redirectTo,
    children,
    ...routeProps
}) => {
    const isLoggedIn = useSelector(authSelectors.getIsAuth); 
    return (
    < Route {...routeProps}> 
    {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
    );
};

export default PrivateRoute;