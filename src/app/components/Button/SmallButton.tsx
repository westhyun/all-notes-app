import React from 'react';
import styled from 'styled-components';

const RoundBox = styled.button`
  width: 26px;
  min-width: 32px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fff;

  &:hover {
    background: #e9e9e9;
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
      <Icon />
    </RoundBox>
  );
}
