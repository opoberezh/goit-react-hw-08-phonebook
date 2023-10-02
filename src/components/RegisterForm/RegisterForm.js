import { useDispatch } from "react-redux"
import css from './RegisterForm.module.css'
import { register } from "redux/auth/operations";

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        dispatch(
          register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password
        })
        );
        form.reset();
    };

    return (
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
            <label className={css.label}>Username
            <input type="text" name="name" />
            </label>
            <label className={css.label}>
            Email
            <input type="email" name="email" />
            </label>
            <label className={css.label}>Password
            <input type="password" name="password"/>
            </label>
            <button type="submit" >Register</button>
        </form>
    );
};