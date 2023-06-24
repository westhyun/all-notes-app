import SmallButton from 'app/components/Button/SmallButton';
import React from 'react';
import styled from 'styled-components';
import { PiTrashSimple as PostDeleteIcon } from 'react-icons/pi';
import {
  RiFontSize as MakeSizeIcon,
  RiImageLine as MakeImageIcon,
  RiCodeSSlashFill as MakeCodeIcon,
} from 'react-icons/ri';
import {
  AiOutlineFileAdd as PostAddIcon,
  AiOutlineBold as MakeBoldIcon,
  AiOutlineUnorderedList as MakeBulletIcon,
} from 'react-icons/ai';
import { FlexBox } from 'app/components/FlexBox';
import SearchInput from 'app/components/Input/SearchInput';
import ReactQuill from 'react-quill';
import { useNoteSlice } from 'store/note';
import { useDispatch } from 'react-redux';

let icons = ReactQuill.Quill.import('ui/icons');

icons['bold'] = <MakeBoldIcon />;
icons['header'] = <MakeSizeIcon />;
icons['image'] = <MakeImageIcon />;
icons['code-block'] = <MakeCodeIcon />;
icons['list'] = <MakeBulletIcon />;

const Box = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none !important;
  padding: 0 !important;
  border-bottom: 1px solid #f5f5f5;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftMenu = styled(Menu)`
  width: 45rem;
  height: 100%;
  background-color: #fff;
  padding: 0 10px;
  justify-content: center;

  @media (max-width: 687px) {
    margin: -200px;
  }
`;

const RightMenu = styled(Menu)`
  width: 80%;
  height: 100%;
  background-color: #fff;
  padding: 0 10px;

  @media (max-width: 687px) {
    width: 60%;
  }
`;

export default function NoteToolbar() {
  const { NoteActions } = useNoteSlice();
  const dispatch = useDispatch();

  return (
    <Box id="toolbar">
      <LeftMenu>
        <SearchInput />
      </LeftMenu>
      <RightMenu>
        <FlexBox display="flex">
          <SmallButton
            onClick={() => {
              dispatch(
                NoteActions.addNote(
                  '새로운 노트를 작성해 보세요.',
                  '새로운 노트를 작성해 보세요.',
                ),
              );
            }}
            Icon={() => <PostAddIcon fill="#a3a3a3" />}
          />
          <SmallButton
            onClick={() => {
              dispatch(NoteActions.deleteNote());
            }}
            Icon={() => <PostDeleteIcon fill="#a3a3a3" />}
          />
        </FlexBox>
        <FlexBox display="flex">
          <SmallButton
            className="ql-header"
            onClick={() => {}}
            Icon={() => <MakeSizeIcon fill="#a3a3a3" />}
          />
          <SmallButton
            className="ql-bold"
            onClick={() => {}}
            Icon={() => <MakeBoldIcon fill="#a3a3a3" />}
          />
          <SmallButton
            className="ql-list"
            onClick={() => {}}
            Icon={() => <MakeBulletIcon fill="#a3a3a3" />}
          />
          <SmallButton
            className="ql-code-block"
            onClick={() => {}}
            Icon={() => <MakeCodeIcon fill="#a3a3a3" />}
          />
          <SmallButton
            className="ql-image"
            onClick={() => {}}
            Icon={() => <MakeImageIcon fill="#a3a3a3" />}
          />
        </FlexBox>
      </RightMenu>
    </Box>
  );
}
