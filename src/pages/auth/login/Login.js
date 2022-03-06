import LoginForm from './LoginForm';

const Login = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return <LoginForm onSubmit={handleSubmit} />;
};

export default Login;
