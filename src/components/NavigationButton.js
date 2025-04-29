import React from 'react';
import { useNavigate } from 'react-router-dom';
import {StyledButton} from '../pages/styles/NavigationButton-styles'
import { ButtonWrapper } from '../pages/styles/NavigationButton-styles';


const NavigationButton = ({ to, children }) => {
  const navigate = useNavigate();

  return (
    <ButtonWrapper>
      <StyledButton onClick={() => navigate(to)} >
      {children || 'Voltar'}
      </StyledButton>
    </ButtonWrapper>
    
    
  );
};

export default NavigationButton;