import styled from 'styled-components';

export const FlexBox = styled.div<{
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  fontSize?: string;
  margin?: string;
  color?: string;
}>`
  display: ${props => props.display};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  font-size: ${props => props.fontSize};
  margin: ${props => props.margin};
  color: ${props => props.color};
`;
