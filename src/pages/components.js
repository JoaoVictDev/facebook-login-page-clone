import styled from 'styled-components';

export const Form = styled.div``;

export const Text = styled.div`
  width: 30%;
  margin: 0;

  & > div:first-child {
    
  }

  & > div:nth-child(2) {
    text-align: left;
    width: 500px;
    margin-left: 2rem;
    font-size: 1.7rem;
    line-height: 32px;

  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  height: 60%;
  width: 100%;
  margin: auto 0;
`;

export const Div = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgLogo = styled.image`
  width: 20%;
  height: 20%;
`;