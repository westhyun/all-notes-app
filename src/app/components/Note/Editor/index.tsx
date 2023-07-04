import React, { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
import { useNoteSlice } from 'store/note';
import { useDispatch, useSelector } from 'react-redux';
import { SelectedNoteListSelector } from 'store/note/selectors';

const Box = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  padding: 10px;
  overflow: auto;

  & .ql-container.ql-snow {
    border: none !important;
  }
  & .ql-snow .ql-editor pre.ql-syntax {
    padding: 30px 20px;
  }
  & .ql-container > .ql-editor {
    min-height: 50vh;
    cursor: text;
    overflow: auto;
  }

  p {
    @media (max-width: 520px) {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 520px) {
    padding: 0;
  }
`;

const NoteDate = styled.div`
  font-size: 0.85rem;
  letter-spacing: -0.2px;
  color: #8b8b8b;
  text-align: center;
  padding: 15px 0;

  @media (max-width: 520px) {
    font-size: 0.8rem;
    padding: 0;
  }
`;

export default function NoteEditor() {
  const { NoteActions } = useNoteSlice();
  const dispatch = useDispatch();
  const selectedNote = useSelector(SelectedNoteListSelector);

  const [value, setValue] = useState('');

  const EditorRef = useRef<ReactQuill>();

  useEffect(() => {
    setValue(selectedNote !== undefined ? selectedNote.content : '');
  }, [selectedNote]);

  return (
    <Box>
      <NoteDate>
        {new Date(selectedNote?.createdAt ?? new Date()).toLocaleTimeString(
          'ko-KR',
          {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            hour12: true,
            minute: 'numeric',
          },
        )}
      </NoteDate>
      <ReactQuill
        ref={el => {
          if (el !== null) {
            EditorRef.current = el;
            EditorRef.current.focus();
          }
        }}
        theme="snow"
        value={value}
        onChange={content => {
          setValue(content);
          dispatch(
            NoteActions.saveNote({
              content: content,
              preview:
                EditorRef.current !== undefined
                  ? EditorRef.current.getEditor().getText()
                  : '',
            }),
          );
        }}
        style={{ border: 'none' }}
        modules={{ toolbar: { container: '#toolbar' } }}
        formats={['bold', 'header', 'image', 'code-block', 'list']}
        // 노트 생성하지 않았을 때 => 읽기 전용
        readOnly={selectedNote === undefined}
      />
    </Box>
  );
}
