import Login from "components/pages/Login";
import { useDispatch } from "react-redux";

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handlSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        dispatch (
            Login({
                email: form.elements.email.value,
                password: form.elements.password,
            })
        );
            form.reset();
    };

    return (
        <form onsubmit={handlSubmit} outoComplete="off">
        <label>Email
            <input type="email" name="email" />
        </label>
        <label>Password
            <input type="password" name="password"/>
        </label>
        <button type="submit" >Log In</button>
        </form>
    );
};