import styled from 'styled-components';

const BaseButton = styled('button')`
  background: linear-gradient(
    140deg,
    rgb(51, 51, 54) 0.5%,
    rgba(255, 255, 255, 0.99) 0.5%
  );
  background-size: 100% 100%;
  color: #1e1e1e;
  padding: 3px;
  margin: 10px 0;
  border: 2px solid rgb(51, 51, 54);
  border-radius: 5%;
  box-shadow: 1px 1px 3px #000000;
  width: 80%;
  transition: 0.5s all ease-in-out;
  font-weight: 200;
  letter-spacing: 0.9px;
  cursor: pointer;

  &:hover {
    box-shadow: none;
    transition: 0.5s all ease-in-out;
    background-size: 30000% 100%;
    color: rgba(255, 255, 255, 0.99);
  }
`;

export const Button = styled(BaseButton)`
  font-size: 1.5em;
  width: 80%;
  min-width: 150px;
  max-width: 300px;
  height: 45px;
`;
