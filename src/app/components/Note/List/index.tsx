import { TitleText } from 'app/components/Text';
import React from 'react';
import styled from 'styled-components';
import NoteItem from '../Item';
import { FlexBox } from 'app/components/FlexBox';
import { useSelector } from 'react-redux';
import { NoteListSelector } from 'store/note/selectors';

const List = styled.div`
  width: 810px;
  margin: 0 5rem;
  height: calc(100vh - 60px);

  @media (max-width: 687px) {
    margin-left: -200px;
    transition: 0.2s;
    &:hover {
      margin-left: 0;
    }
  }
`;

export default function NoteList() {
  const noteList = useSelector(NoteListSelector);

  return (
    <List>
      <FlexBox
        display="flex"
        justifyContent="space-between"
        margin="2rem 1.5rem 2.8rem"
      >
        <TitleText>All Notes</TitleText>
        <FlexBox
          display="flex"
          alignItems="center"
          fontSize="1.5rem"
          color="#8b8b8b"
        >
          {noteList.length}
        </FlexBox>
      </FlexBox>
      {noteList.map(note => (
        <NoteItem
          id={note.id}
          createdAt={note.createdAt}
          preview={note.preview}
          selected={note.selected}
          content={note.content}
        />
      ))}
    </List>
  );
}
