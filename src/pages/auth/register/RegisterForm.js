import { LockClockRounded } from '@mui/icons-material';
import {
  Avatar,
  Button,
  Box,
  Container,
  Grid,
  Typography,
  Link,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputText from '../../../components/common/InputText';
import InputPassword from '../../../components/common/InputPassword';
import CheckBox from '../../../components/common/CheckBox';
import Copyright from '../../../components/common/Copyright';

const RegisterForm = (props) => {
  const schema = yup.object().shape({
    firstName: yup.string().required('Please enter First Name'),
    lastName: yup.string().required('Please enter Last Name'),
    email: yup
      .string()
      .required('Please enter Email address')
      .email('Please enter true format email'),
    password: yup
      .string()
      .required('Please enter password')
      .min(5, 'Password is too short'),
  });
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      agree: false,
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
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockClockRounded />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          onSubmit={form.handleSubmit(handleSubmit)}
          sx={{ mt: 3, width: '100%' }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InputText
                label="First Name *"
                name="firstName"
                type="text"
                form={form}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputText
                label="Last Name *"
                name="lastName"
                type="text"
                form={form}
              />
            </Grid>
            <Grid item xs={12}>
              <InputText
                label="Email Address *"
                name="email"
                type="email"
                form={form}
              />
            </Grid>
            <Grid item xs={12}>
              <InputPassword
                label="Password *"
                name="password"
                form={form}
              />
            </Grid>
            <Grid item xs={12}>
              <CheckBox
                label="I want to receive inspiration, marketing promotions and updates via email."
                name="agree"
                form={form}
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

export default RegisterForm;
