import styled from 'styled-components';

const footerTextColor = {
  notSelected: '#8a8d91',
  selected: '#737373'
}

export const Div = styled.div`
  margin: 0;
  background: #FFF;
  color: ${footerTextColor.notSelected};
  font-size: 12px;

  padding-top: 20px;
`;

export const Info = styled.div`
  width: 980px;
  margin: 0 auto;
`;

export const Language = styled.ul`
  display: flex;
  margin-bottom: 8px;
  width: 1000px;
`;

export const Features = styled.ul`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;

  align-items: left;

  & > li {
    padding-left: 20px;
  }

  /* & > Li:first-child{
    padding-left: 0;
  } */
`;

export const Li = styled.li`
 list-style-type: none;
 padding-left: 10px;

 color: ${ 
  props => props.selected ? footerTextColor.selected 
  : footerTextColor.notSelected 
 };

 &:first-child{
   padding-left: 20px;
 }

 &:hover{
  cursor: pointer;
  text-decoration: underline;
 }
`;

export const Divider = styled.div`
  border: 1px solid #dddfe2;
  margin-bottom: 8px;
  margin-left: 20px;
`;

export const Copyright = styled.div`
  padding: 20px 0 20px 20px;
  color: ${footerTextColor.selected}
`;