import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useState } from 'react';
import * as Yup from 'yup';
import { TextField, Button, InputAdornment, IconButton } from '@mui/material';
import { ImEyeBlocked, ImEye } from "react-icons/im";
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
  backgroundColor: '#2F4F4F',
  boxShadow: '6px 6px 6px 0px rgba(0, 0, 0, 0.55)',
  transition: 'background-color 0.3s ease',
  '&:hover': {
      backgroundColor: '#1E3535',
     color: '#ffffff',
    },
    '&:active': {
      backgroundColor: '#1E3535',
      color: '#ffffff',
    },
})

const LogInSchema = Yup.object({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});



export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LogInSchema}
      onSubmit={({ ...values }, actions) => {
        dispatch(logIn({ ...values }));
        actions.resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <form  onSubmit={handleSubmit} style={{width: '300px',
        margin: '0 auto',
        textAlign: 'center',}} >
          <Field name="email">
            {({ field, form: { touched, errors } }) => (
              <TextField style={{ 
                boxShadow: "6px 6px 6px 0px rgba(0,0,0,0.55)",
              }}
                {...field}
                label="Email"
                variant="outlined"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                fullWidth
                margin="normal"
                autoComplete="off"
                size="small"
              />
            )}
          </Field>

          <Field name="password"  >
            {({ field, form: { touched, errors } }) => (
              <TextField style={{ 
                boxShadow: "6px 6px 6px 0px rgba(0,0,0,0.55)",
              }}
                {...field}
                type={showPassword ? 'text' : 'password'}
                label="Password"
                variant="outlined"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                fullWidth
                margin="normal"
                autoComplete="off"
                size="small"
                sx={{ mb: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handlePasswordVisibility}>
                        {showPassword ? <ImEye /> : <ImEyeBlocked /> }
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          </Field>

          <StyledButton type="submit" variant="contained" fullWidth>
            LOG IN
          </StyledButton>
        </form>
      )}
    </Formik>
  );
};