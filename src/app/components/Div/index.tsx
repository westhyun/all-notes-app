import styled from 'styled-components';

export const Div = styled.div<{
  display?: string;
  fontSize?: string;
}>`
  display: ${props => props.display || 'inherit'};
  font-size: ${props => props.fontSize || 'inherit'};
`;
