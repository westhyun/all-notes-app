import React from 'react';
import styled from 'styled-components';
import { FiSearch as SearchIcon } from 'react-icons/fi';

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 36px;
  font-size: 1.1em;
  border-radius: 20px;
  /* border: 1px solid #e9e9e9; */
  border: ${props => `1px solid ${props.theme.colors.btnColor}`};
  color: ${props => props.theme.colors.titleColor};
  padding: 5px 7px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const Input = styled.input`
  border: none;
  width: 100%;
  outline: 0;
  height: 100%;
  font-size: 0.9rem;

  ::placeholder {
    user-select: none;
  }

  @media (max-width: 480px) {
    ::placeholder {
      color: transparent;
    }
  }
`;

export default function SearchInput({
  search,
  onChange,
}: {
  search: string;
  onChange: (content: string) => void;
}) {
  return (
    <Box>
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
      <Input
        type="text"
        value={search}
        placeholder="검색어를 입력하세요."
        onChange={e => onChange(e.target.value)}
      />
    </Box>
  );
}
