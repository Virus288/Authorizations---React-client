import styled from 'styled-components';
import type { IContainerProps } from '../../types';

export const ContainerBody = styled('div')<IContainerProps>`
  display: flex;
  flex-direction: ${(props): string => props.$direction ?? 'column'};
  justify-content: ${(props): string => props.$justify ?? 'center'};
  align-items: ${(props): string => props.$align ?? 'center'};
  flex-wrap: ${(props): string => props.$wrap ?? 'wrap'};
  overflow-x: hidden;
  background: "#ffffff";
  color: "#1e1e1e";
  transition: "0.5s all ease-in-out";
  font-size: 1.15rem;
  letter-spacing: 0.01em;
`;
