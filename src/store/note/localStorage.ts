export const saveNoteData = (noteData: NoteItem[]) => {
  localStorage.setItem('noteData', JSON.stringify(noteData));
};

export const loadNoteData = (): NoteItem[] => {
  const noteData = localStorage.getItem('noteData');
  if (noteData) {
    return JSON.parse(noteData);
  } else {
    return [];
  }
};
