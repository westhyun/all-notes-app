import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';

export const baseSelector = (state: RootState) => state.note;

const NoteListSelector = createSelector(baseSelector, state =>
  [...state.notelist].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  ),
);

const SelectedNoteListSelector = createSelector(baseSelector, state =>
  state.notelist.find(note => note.selected),
);

export { NoteListSelector, SelectedNoteListSelector };
