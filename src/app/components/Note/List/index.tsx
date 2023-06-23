import { TitleText } from 'app/components/Text';
import React from 'react';
import styled from 'styled-components';

const List = styled.div`
  width: 500px;
  height: calc(100vh - 60px);
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;
`;

export default function NoteList() {
  return (
    <List>
      <TitleText>All notes</TitleText>
    </List>
  );
}
