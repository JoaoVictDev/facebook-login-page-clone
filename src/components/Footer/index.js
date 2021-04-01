import React from 'react';
import { Copyright, Div, Divider, Features, Info, Language, Li } from './components';

function Footer() {
  return(
    <Div>
      <Info>
        <Language>
          <Li selected>Português (Brasil)</Li>
          <Li>English (US)</Li>
          <Li>Español</Li>
          <Li>Français (France)</Li>
          <Li>Italiano</Li>
          <Li>العربية</Li>
          <Li>Deutsch</Li>
          <Li>हिन्दी</Li>
          <Li>中文(简体)</Li>
          <Li>日本語</Li>
        </Language>
        <Divider />
        <Features>
          <Li>Cadastre-se</Li>
          <Li>Entrar</Li>
          <Li>Messenger</Li>
          <Li>Facebook</Li>
          <Li>Lite</Li>
          <Li>Watch</Li>
          <Li>Pessoas</Li>
          <Li>Páginas</Li>
          <Li>Categorias de Página</Li>
          <Li>Locais</Li>
          <Li>Jogos Locais</Li>
          <Li>Marketplace</Li>
          <Li>Facebook Pay</Li>
          <Li>Grupos</Li>
          <Li>Vagas de emprego</Li>
          <Li>Oculus</Li>
          <Li>Portal</Li>
          <Li>Instagram</Li>
          <Li>Local</Li>
          <Li>Campanhas de arrecadação de fundos</Li>
          <Li>Serviços</Li>
          <Li>Central de informações de Votação</Li>
          <Li>Sobre</Li>
          <Li>Criar anúncio</Li>
          <Li>Criar Página</Li>
          <Li>Desenvolvedores</Li>
          <Li>Carreiras</Li>
          <Li>Privacidade</Li>
          <Li>Cookies</Li>
          <Li>Escolhas para anúncios</Li>
          <Li>Termos</Li>
          <Li>Ajuda</Li>
        </Features>
        <Copyright>
          Facebook © 2021
        </Copyright>
      </Info>
    </Div>
  );
}

export default Footer