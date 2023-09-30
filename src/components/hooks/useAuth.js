import { useSelector } from "react-redux"
import { selectIsLoggedIn, selectIsRefreshing, selectUser } from "redux/auth/selsctors"

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const selectIsRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectUser);

    return {
        isLoggedIn,
        isRefreshing,
        user,
    };
};