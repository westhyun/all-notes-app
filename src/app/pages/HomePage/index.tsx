import NoteEditor from 'app/components/Note/Editor';
import NoteList from 'app/components/Note/List';
import NoteToolbar from 'app/components/Note/Toolbar';
import styled, { ThemeProvider } from 'styled-components';
import { light, dark } from '../../../styles/theme';
import React from 'react';
import { useTheme } from 'app/components/useTheme';

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.div`
  background: ${props => props.theme.colors.bgColor};
  color: ${props => props.theme.colors.textColor};
  input {
    background: ${props => props.theme.colors.bgColor};
    color: ${props => props.theme.colors.textColor};
  }
`;

export interface ThemePropTypes {
  themeToggle: () => void;
  themeMode: string;
}

export function HomePage() {
  const { themeMode, themeToggle }: ThemePropTypes = useTheme();
  const theme = themeMode === 'light' ? light : dark;

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <NoteToolbar themeToggle={themeToggle} themeMode={themeMode} />
        <FlexRow>
          <NoteList />
          <NoteEditor />
        </FlexRow>
      </Main>
    </ThemeProvider>
  );
}
