import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NoteState } from './types';
import { nanoid } from 'nanoid';
import { useInjectReducer } from 'redux-injectors';
import { loadNoteData, saveNoteData } from './localStorage';

export const initialState: NoteState = {
  notelist: loadNoteData(),
};

const slice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addNote: {
      reducer: (state, action: PayloadAction<NoteItem>) => {
        state.notelist.push(action.payload);
        for (const note of state.notelist) {
          if (note.id === action.payload.id) continue;
          if (note.selected) note.selected = false;
        }
        saveNoteData(state.notelist);
      },
      prepare: (content: string, preview: string) => {
        const id = nanoid();
        return {
          payload: {
            id,
            content: content,
            preview: preview,
            selected: true,
            createdAt: new Date().toString(),
          },
        };
      },
    },
    saveNote(
      state,
      action: PayloadAction<{ content: string; preview: string }>,
    ) {
      const { content, preview } = action.payload;
      const note = state.notelist.find(note => note.selected);
      if (note) {
        note.content = content;
        note.preview = preview;
        note.createdAt = new Date().toString();
      }
      saveNoteData(state.notelist);
    },
    selectNote(state, action: PayloadAction<{ id: string }>) {
      const { id } = action.payload;

      for (const note of state.notelist) {
        if (note.id === id) continue;
        if (note.selected) note.selected = false;
      }

      const note = state.notelist.find(note => note.id === id);
      if (note) note.selected = true;
      saveNoteData(state.notelist);
    },
    deleteNote(state, action: PayloadAction) {
      const filteredNotes = state.notelist.filter(note => !note.selected);
      state.notelist = filteredNotes;

      const sortedNotes = [...state.notelist].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
      if (sortedNotes.length > 0) {
        const note = state.notelist.find(note => note.id === sortedNotes[0].id);
        if (note) note.selected = true;
      }
      saveNoteData(state.notelist);
    },
  },
});

export const { actions: NoteActions } = slice;

export const useNoteSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { NoteActions: slice.actions };
};
