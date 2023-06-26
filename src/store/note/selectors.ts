import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';

export const baseSelector = (state: RootState) => state.note;

const NoteListSelector = createSelector(baseSelector, state =>
  [...state.notelist]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .filter(note => note.content.includes(state.search)),
);

const SelectedNoteListSelector = createSelector(baseSelector, state =>
  state.notelist.find(note => note.selected),
);

const SearchNoteSelector = createSelector(baseSelector, state => state.search);

export { NoteListSelector, SelectedNoteListSelector, SearchNoteSelector };
