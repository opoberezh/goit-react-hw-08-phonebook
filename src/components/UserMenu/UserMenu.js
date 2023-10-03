import { useAuth } from "components/hooks/useAuth";
import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/operations";
import css from './UserMenu.module.css';
import { Box } from "@chakra-ui/react";
import Avatar from '@mui/material/Avatar';


export const UserMenu = () => {
    const dispatch = useDispatch();
    const {user} = useAuth();

    return (
        <div className={css.wrapper}>
            <p className={css.username}>Welcome, </p>
            <div className={css.avatarContainer}>
             <Avatar alt={user.name} src={user.avatar} className={css.avatar} />
             </div>
            <Box boxSize="sm">
            <p  className={css.avatarname}> {user.name}</p>
            <p  className={css.avatarname}>{user.email}</p>
            </Box>
            <button className={css.logout}type="button" onClick={() => dispatch(logOut())}>log out</button>
        </div>
    );
};