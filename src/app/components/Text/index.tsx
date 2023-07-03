import styled from 'styled-components';

export const TitleText = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 0.03rem;
  color: ${props => props.theme.colors.titleColor};

  @media (max-width: 520px) {
    font-size: 1rem;
  }
`;
