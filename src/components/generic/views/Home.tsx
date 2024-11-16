import React from 'react';
import { HomeBody, HomeRow } from '../styled';
import { Button } from '../../customs/buttons';
import { sendToLoginPage, sendToRegisterPage } from '../../../controllers';

const Home: React.FC = () => {
  return (
    <HomeBody>
      <header>
        This is super simple frontend client created for testing purposes of my authorizations service. This is intended
        to be modified and only used as a template
      </header>
      <HomeRow>
        <Button onClick={() => sendToRegisterPage()}>Register</Button>
        <Button onClick={() => sendToLoginPage()}>Log in</Button>
      </HomeRow>
    </HomeBody>
  );
};

export default Home;
