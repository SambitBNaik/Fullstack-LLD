import React from 'react';
import {createPortal} from 'react-dom';
import styled from 'styled-components';


const Wrapper = styled.div`
    position:fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background-color:#6200EE;
`;

const Modal = (props) => {
  return (
    createPortal(
    <div>
        { props.isOpen &&
 <Wrapper>
 {props?.children}
</Wrapper>
        }
   </div>,document.body)
  )
}

export default Modal