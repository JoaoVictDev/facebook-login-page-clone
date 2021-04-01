import React from 'react';
import { Text, Form, Main, Div } from './components';
import Footer from '../components/Footer';
import { ReactComponent as FacebookLogo } from '../img/FacebookLogo.svg';

function Login(){
  return(
    <>
    <Div>
      <Main>
        <Text>
          <div>
            <FacebookLogo />
          </div>
          <div>
          O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.
          </div>
        </Text>
        <Form>
          
        </Form>
      </Main>
    </Div>

    <Footer />
    </>
  );
}

export default Login;