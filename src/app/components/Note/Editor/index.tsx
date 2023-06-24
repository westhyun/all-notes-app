import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';

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
    min-height: calc(100vh - 130px);
    cursor: text;
  }
`;

const NoteDate = styled.div`
  font-size: 0.85rem;
  letter-spacing: -0.2px;
  color: #8b8b8b;
  text-align: center;
  padding: 15px 0;
`;

export default function NoteEditor() {
  const [value, setValue] = useState('');

  const EditorRef = useRef<ReactQuill>();

  return (
    <Box>
      <NoteDate>
        {new Date().toLocaleTimeString('ko-KR', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          hour12: true,
          minute: 'numeric',
        })}
      </NoteDate>
      <ReactQuill
        ref={el => {
          if (el !== null) {
            EditorRef.current = el;
          }
        }}
        theme="snow"
        value={value}
        onChange={content => {
          setValue(content);
        }}
        style={{ border: 'none' }}
        modules={{ toolbar: { container: '#toolbar' } }}
        formats={['bold', 'header', 'image', 'code-block', 'list']}
      />
    </Box>
  );
}
