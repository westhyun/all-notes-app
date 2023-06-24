interface NoteItemContent {
  content: string;
  preview: string;
}

interface NoteItem extends NoteItemContent {
  id: string;
  createdAt: string;
  selected: boolean;
}
