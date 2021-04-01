import styled from 'styled-components';

export const Form = styled.div`
  width: 396px;
  background: #fff;
  border-radius: 8px;
  margin-left: 80px; 

  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
  padding: 20px 0 28px;

  & > div {
    padding: 6px 0;
    width: 100%;

    text-align: center;
  }

  & > div:nth-child(3) {
    padding-bottom: 0;
  }
`;

export const Text = styled.div`
  width: 520px;
  margin: 0;
  margin-bottom: 90px;
  padding-right: 32px;

  & > div:first-child {
    
  }

  & > div:nth-child(2) {
    & > h1 {
      width: 100%;
      margin-left: 2.3rem;
      font-size: 27px;
      line-height: 32px;
      font-weight: normal;
    }

  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
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

export const Input = styled.input`
  border-radius: 6px;
  padding: 14px 16px;
  font-size: 17px;
  width: 92%;
  border: 1px solid #dddfe2;
  color: #1d2129;
  vertical-align: middle;
  line-height: 16px;
  margin: 0 auto;

  &:focus{
    outline: none;
    border-color: #166FE5;

    -webkit-box-shadow: 0px 0px 2px 0px rgba(22,111,229,1);
    -moz-box-shadow: 0px 0px 2px 0px rgba(22,111,229,1);
    box-shadow: 0px 0px 2px 0px rgba(22,111,229,1);
  }
`;

export const AuxiliaryText = styled.div`
  color: #1c1e21;
  width: 396px;
  margin-top: 28px;
  margin-left: 80px;
  font-size: 14px;
  text-align: center;
`;

export const Link = styled.a`
  font-weight: ${
    props => props.bold ? 'bold' : 'normal'
  };
  color: ${
    props => props.facebookColor ? '#1877f2' : 'none'
  };

  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  background: #1877f2;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  line-height: 48px;
  padding: 0 16px;
  width: 332px;
  font-weight: bold;
  color: #fff;
  margin: 6px 0 6px 0;

  &:hover {
    background: #166FE5;
    cursor: pointer;
  }

  &:active {
    border-color: #166FE5;

    -webkit-box-shadow: 0px 0px 4px 0px rgba(22,111,229,1);
    -moz-box-shadow: 0px 0px 4px 0px rgba(22,111,229,1);
    box-shadow: 0px 0px 4px 0px rgba(22,111,229,1);
  }
`;

export const ButtonMid = styled.button`
  border: none;
  border-radius: 6px;
  font-size: 17px;
  line-height: 48px;
  padding: 0 16px;
  font-weight: bold;
  background: #42b72a;
  color: #fff;

  &:hover {
    background: #36A420;
  }

  &:active {
    border-color: #166FE5;

    -webkit-box-shadow: 0px 0px 4px 0px rgba(22,111,229,1);
    -moz-box-shadow: 0px 0px 4px 0px rgba(22,111,229,1);
    box-shadow: 0px 0px 4px 0px rgba(22,111,229,1);
  }
`;

export const SimpleDivider = styled.div`
  align-items: center;
  border-bottom: 1px solid #dadde1;
  display: flex;
  margin: 6px 16px;
  text-align: center;
`;