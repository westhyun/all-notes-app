import React, { ReactComponentElement } from 'react';
import styled from 'styled-components';
import { FlexBox } from '../FlexBox';
import { IconType } from 'react-icons';

const RoundBox = styled.button`
  width: 36px !important;
  min-width: 32px !important;
  height: 36px !important;
  display: flex !important;
  align-items: center;
  justify-content: center;
  padding: 3px !important;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #fff;
  margin: 0 1rem;

  &:hover {
    background: ${props => props.theme.colors.btnColor} !important;
  }

  @media (max-width: 520px) {
    margin: 0 0.1rem;
  }

  @media (max-width: 830px) {
    margin: 0;
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
      <FlexBox fontSize="1.3rem">
        <Icon />
      </FlexBox>
    </RoundBox>
  );
}
