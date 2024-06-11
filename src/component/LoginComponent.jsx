import React, { useState , useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/auth/authSlice';
import { Navigate } from 'react-router-dom'; 


function LoginComponent() {
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector(state => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    if (isAuthenticated) {
        <Navigate to="/dashboard" />
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
  };

  return (
    <div>
      {isAuthenticated ? (
        <Navigate to="/dashboard" />
      ) : (
        <div>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
          {error && <p>{error}</p>}
        </div>
      )}
    </div>
  );
}

export default LoginComponent;