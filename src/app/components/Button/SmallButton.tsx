import React from 'react';
import styled from 'styled-components';
import { Div } from '../Div';

const RoundBox = styled.button`
  width: 36px;
  min-width: 32px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #fff;
  margin: 0 1rem;

  &:hover {
    background: #e9e9e9 !important;
  }
`;

export default function SmallButton({
  className,
  value,
  onClick,
  Icon,
}: {
  className?: string;
  value?: string;
  onClick?: () => void;
  Icon: () => JSX.Element;
}) {
  return (
    <RoundBox className={className} value={value} onClick={onClick}>
      <Div fontSize="1.3rem">
        <Icon />
      </Div>
    </RoundBox>
  );
}
