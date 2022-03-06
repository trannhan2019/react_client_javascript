import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { LockClockOutlined } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import InputText from '../../../components/common/InputText';
import InputPassword from '../../../components/common/InputPassword';
import CheckBox from '../../../components/common/CheckBox';
import Copyright from '../../../components/common/Copyright';

const LoginForm = (props) => {
  const schema = yup.object().shape({
    email: yup.string().required('Please enter email'),
    password: yup
      .string()
      .required('Please enter password')
      .min(3, 'Password is too short'),
  });

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (data) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(data);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 8,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockClockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <Box
          component="form"
          sx={{ mt: 1, width: '100%' }}
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputText
                form={form}
                name="email"
                label="Email Address *"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <InputPassword
                form={form}
                name="password"
                label="Password *"
              />
            </Grid>
          </Grid>

          <CheckBox label="Remember me" name="remember" form={form} />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default LoginForm;
