/**
 * Register Page
 * User authentication - sign up
 */

import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../components/organisms';

/**
 * Register Page component
 */
const RegisterPage = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/');
  };

  return (
    <AuthForm 
      mode="signup" 
      onSuccess={handleSuccess}
    />
  );
};

export default RegisterPage;
