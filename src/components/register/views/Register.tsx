import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeBody, HomeRow } from '../../generic/styled';
import { Button } from '../../customs/buttons';
import { sendToLoginPage, sendToRegisterPage } from '../../../controllers';

const Register: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const feedback = params.get('feedback');

    if (feedback === 'success') setMessage('Registered');
    if (feedback === 'fail') setMessage('Failed to register');
  });

  return (
    <HomeBody>
      <header>{message}</header>
      <HomeRow>
        <Button onClick={() => navigate('/')}>Go home</Button>
      </HomeRow>
    </HomeBody>
  );
};

export default Register;
