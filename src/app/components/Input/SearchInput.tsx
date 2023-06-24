import React, { useState } from 'react';
import styled from 'styled-components';
import { FiSearch as SearchIcon } from 'react-icons/fi';
import Block from '../Block';

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 36px;
  font-size: 1.1em;
  border-radius: 20px;
  border: 1px solid #e9e9e9;
  padding: 5px 7px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  outline: 0;
  height: 100%;
  font-size: 0.9rem;
  margin-bottom: -3px;

  &::placeholder {
    user-select: none;
  }
`;

export default function SearchInput() {
  const [content, setContent] = useState('');

  return (
    <Box>
      <Block marginLeft="18px" marginRight="10px">
        <SearchIcon />
      </Block>
      <Input
        type="text"
        value={content}
        placeholder="검색어를 입력하세요."
        onChange={e => setContent(e.target.value)}
      />
    </Box>
  );
}
