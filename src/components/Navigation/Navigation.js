import { useAuth } from "components/hooks/useAuth";
import { Link } from "react-router-dom";
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link className={css.link} to="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link className={css.link} to="/contacts">
          Tasks
        </Link>
      )}
    </nav>
  );
};