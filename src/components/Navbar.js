import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/auth/slice";
import { selectActiveUser, selectIsAuthenticated } from "../store/auth/selectors";
import '../App.css';

export default function Navbar(){
    const dispatch = useDispatch();
    const activeUser = useSelector(selectActiveUser);
    const isAuthenticated = useSelector(selectIsAuthenticated);

    function handleLogout(){
        dispatch(logout());
    }


    return (
        <div>
            <nav>
                {isAuthenticated ? (
                    <h5 >
                        Welcome {activeUser && activeUser.name} 
                    </h5>
                ) : (
                    <h3>
                        Guest
                    </h3>
                )}
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
                <br/>
                {isAuthenticated ? (

                        <button onClick={handleLogout}>Logout</button>
                ) : (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </>
                )}
            </nav> 
        </div>
    );
}