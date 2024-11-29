import styled from 'styled-components';
import { ContainerBody } from '../../customs/containers';
import type { IContainerProps } from '../../../types';

export const HomeBody = styled(ContainerBody)<IContainerProps>`
  min-height: 100vh;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;

export const HomeRow = styled('div')<IContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
