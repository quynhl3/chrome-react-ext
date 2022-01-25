import React from 'react';
import styled from 'styled-components';

const StyledStartButton = styled.button`
  box-sizing: border-box;

  margin: 0 0 20px 0;
  padding: 10px;
  min-height: 25px;
  width: 70%;
  border-radius: 20px;
  border: solid;
  color: black;
  background: #96b9c2;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: -1rem;
  outline: none;
  cursor: pointer;
`;

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export default StartButton;
