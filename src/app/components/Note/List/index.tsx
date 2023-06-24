import { TitleText } from 'app/components/Text';
import React from 'react';
import styled from 'styled-components';
import NoteItem from '../Item';
import { FlexBox } from 'app/components/FlexBox';

const List = styled.div`
  width: 500px;
  height: calc(100vh - 60px);
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;

  @media (max-width: 687px) {
    margin-left: -200px;
    transition: 0.2s;
    &:hover {
      margin-left: 0;
    }
  }
`;

export default function NoteList() {
  return (
    <List>
      <FlexBox display="flex" justifyContent="space-between" margin="1rem">
        <TitleText>All Notes</TitleText>
        <FlexBox display="flex" alignItems="center" fontSize="1.7rem">
          2
        </FlexBox>
      </FlexBox>
      <NoteItem
        id="1"
        createdAt={new Date().toString()}
        selected={true}
        preview="나는 노트입니다.나는 노트입니다.나는 노트입니다.나는 노트입니다.나는 노트입니다.나는 노트입니다."
      />
      <NoteItem
        id="2"
        createdAt={new Date().toString()}
        selected={false}
        preview="나는 노트입니다.나는 노트입니다.나는 노트입니다.나는 노트입니다.나는 노트입니다."
      />
    </List>
  );
}
