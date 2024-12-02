import React, { useState } from 'react';
import { HomeBody, HomeRow } from '../styled';
import { Button } from '../../customs/buttons';
import { sendToLoginPage, sendToRegisterPage, sendToLogoutPage, getUserinfo } from '../../../controllers';

const Home: React.FC = () => {
    const [userinfo, setUserinfo] = useState<string | null>(null)

    const handleGetUserInfo = () => {
            getUserinfo().then((login) => {
            setUserinfo(login)
        }).catch(err => {
            console.log("Got err while fetching user data", err)
            setUserinfo((err as Error).message)
        })
    }

    return (
    <HomeBody>
      <header>
        This is super simple frontend client created for testing purposes of my authorizations service. This is intended
        to be modified and only used as a template.
      </header>
        {userinfo ? `Logged in as ${userinfo}` : null}
      <HomeRow>
        <Button onClick={() => sendToRegisterPage()}>Register</Button>
        <Button onClick={() => sendToLoginPage()}>Log in</Button>
        <Button onClick={() => sendToLogoutPage()}>Log out</Button>
        <Button onClick={() => handleGetUserInfo()}>Check if logged in</Button>
      </HomeRow>
    </HomeBody>
  );
};

export default Home;
