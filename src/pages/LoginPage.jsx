/**
 * Login Page
 * User authentication - sign in
 */

import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../components/organisms';

/**
 * Login Page component
 */
const LoginPage = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/');
  };

  return (
    <AuthForm 
      mode="signin" 
      onSuccess={handleSuccess}
    />
  );
};

export default LoginPage;
