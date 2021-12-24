import styled,{ css } from 'styled-components'
import PropTypes from 'prop-types';

export const Button = styled.button`
    
  border-radius: 50px;
  border: transparent;
  padding: 0.5em 1.6em;
  transition: all .1s ease-out;
  cursor:pointer;
  font-size: 1em;
  font-family: 'Raleway', sans-serif;  
  font-weight: 600;
  box-shadow: 0px 2px 15px 4px rgba(0, 0, 0, 0.1);
  width: ${({width}) => width};
    
    ${props => props.gradient && css`
      background: #ffff;
      background-image: linear-gradient(91.26deg, #5364fc 30%, #EB76FF 21.74%, #FF56A9 54.03%, #FF9B52 85.28%);
      -webkit-background-clip: text;
      color: transparent;
      padding: ${({padding}) => padding};
      box-shadow: 0px 2px 15px 0.5px rgba(0, 0, 0, 0.1);
      transition: all 100ms ease-out;
      :hover{
        transform: scale(1.1)
      }
  `}

  Button.proptypes = {
    padding: PropTypes.string;
    width: PropTypes.string;
  }
  ${props => props.dark && css`
    background: #313131;
    color: #fff;
    :hover{
     background: #161616;
    }
  `}
  
  ${props => props.primary_xl && css`
    background-color: #436CFF;
    color: #fff;
    padding: 0.7em 6.5em;
    :hover{
     background: #2B59FF;
    }
  `}
  ${props => props.primary_xl_del && css`
    background-color: #FF6155;
    color: #fff;
    padding: 0.7em 6em;
    :hover{
     background: #FF4A3D ;
    }
  `}
`