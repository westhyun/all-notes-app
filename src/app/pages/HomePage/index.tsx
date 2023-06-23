import NoteEditor from 'app/components/Note/Editor';
import NoteList from 'app/components/Note/List';
import NoteToolbar from 'app/components/Note/Toolbar';
import * as React from 'react';
import styled from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export function HomePage() {
  return (
    <div>
      <NoteToolbar />
      <FlexRow>
        <NoteList />
        <NoteEditor />
      </FlexRow>
    </div>
  );
}
