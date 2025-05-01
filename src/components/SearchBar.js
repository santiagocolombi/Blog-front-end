import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

const Input = styled.input`
  padding: 10px 16px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  width: 100%;
  max-width: 400px;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:focus {
    border-color: #999;
    box-shadow: 0 0 8px rgba(150, 150, 150, 0.4); 
  }
`;

const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <Wrapper>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default SearchBar;
