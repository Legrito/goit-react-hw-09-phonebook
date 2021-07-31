import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../../../redux/auth";

const Navigation = () => {
    const isAuth = useSelector(authSelectors.getIsAuth);
    return (
        <>
        <NavLink exact to="/" className="NavLink" activeClassName="NavLink--active">Home</NavLink>
        {!!isAuth && <NavLink to="/contacts" className="NavLink" activeClassName="NavLink--active">Contacts</NavLink>}
        </>
    )
}


export default Navigation;