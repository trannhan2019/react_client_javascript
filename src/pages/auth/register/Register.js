import RegisterForm from "./RegisterForm";

const Register = () => {
    const handleSubmit = (data) => {
        console.log(data);
      };

    return ( 
        <RegisterForm onSubmit={handleSubmit}/>
     );
}
 
export default Register;