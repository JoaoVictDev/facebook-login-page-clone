import React from 'react';
import Footer from '../../components/Footer';
import { ReactComponent as FacebookLogo } from '../../img/FacebookLogo.svg';

import { 
  Text,
  Form,
  Main,
  Div,
  Input,
  AuxiliaryText,
  Link,
  Button,
  SimpleDivider, 
  ButtonMid
} from './components';

function Login(){
  return(
    <>
    <Div>
      <Main>
        <Text>
          <div>
            <FacebookLogo style={{width: '350px'}}/>
          </div>
          <div>
            <h1>
              O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.
            </h1>
          </div>
        </Text>
        <div>
        <Form>
          <div>
            <Input type="email" placeholder="Email ou telefone" />
          </div>
          <div>
          <Input type="password" placeholder="Senha" />
          </div>
          <div>
            <Button>Entrar</Button>
          </div>
          <div>
            <Link facebookColor>Esqueceu a senha?</Link>
          </div>
          <div>
            <SimpleDivider />
          </div>
          <div>
            <ButtonMid>Criar nova conta</ButtonMid>
          </div>
        </Form>
        <AuxiliaryText>
          <Link bold>Criar uma Página</Link> para uma celebridade, banda ou empresa.
        </AuxiliaryText>
        </div>
      </Main>
    </Div>

    <Footer />
    </>
  );
}

export default Login;