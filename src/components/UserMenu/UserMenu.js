import { useAuth } from "components/hooks/useAuth";
import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/operations";
import css from './UserMenu.module.css';


export const UserMenu = () => {
    const dispatch = useDispatch();
    const {user} = useAuth();
    
    return (
        <div className={css.wrapper}>
            <p className={css.username}>Welcome, {user.name}</p>
            <button type="button" onClick={() => dispatch(logOut)}>logout</button>
        </div>
    );
};