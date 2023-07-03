import SmallButton from 'app/components/Button/SmallButton';
import React from 'react';
import styled from 'styled-components';
import {
  BiMoon,
  BiSun,
  MakeBoldIcon,
  MakeBulletIcon,
  MakeCodeIcon,
  MakeImageIcon,
  MakeSizeIcon,
  PostAddIcon,
  PostDeleteIcon,
} from 'app/components';
import { FlexBox } from 'app/components/FlexBox';
import SearchInput from 'app/components/Input/SearchInput';
import ReactQuill from 'react-quill';
import { useNoteSlice } from 'store/note';
import { useDispatch, useSelector } from 'react-redux';
import { SearchNoteSelector } from 'store/note/selectors';

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
  /* background-color: #fff; */
  padding: 0 10px;
  justify-content: center;
  margin: 0 3rem 0 4rem;

  @media (max-width: 830px) {
    justify-content: flex-start;
    margin: 0 0.5rem;
  }

  @media (max-width: 480px) {
    margin: 0;
    transition: 0.2s;
    padding: 5px;
  }
`;

const RightMenu = styled(Menu)`
  width: 80%;
  height: 100%;
  /* background-color: #fff; */
  padding: 0 10px;

  @media (max-width: 480px) {
    padding: 0;
  }

  @media (max-width: 830px) {
    width: 50rem;
  }
`;

const ThemeButton = styled.div`
  display: flex;
  margin: 0 1rem;
  cursor: pointer;
`;

// export interface ThemeModePropTypes {
//   colors: {
//     selectedColor: string;
//     unSelectedColor: string;
//     titleColor: string;
//     bgColor: string;
//     btnColor: string;
//   };
// }

export default function NoteToolbar({
  themeToggle,
  themeMode,
}: {
  themeMode: string;
  themeToggle: () => void;
}) {
  const { NoteActions } = useNoteSlice();
  const dispatch = useDispatch();
  const search = useSelector(SearchNoteSelector);

  return (
    <Box id="toolbar">
      <LeftMenu>
        <ThemeButton onClick={themeToggle}>
          {themeMode === 'dark' ? <BiMoon size={20} /> : <BiSun size={20} />}
        </ThemeButton>
        <SearchInput
          search={search}
          onChange={value =>
            dispatch(NoteActions.searchNote({ search: value }))
          }
        />
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
            // Icon={<PostAddIcon fill="#a3a3a3" />}
          />
          <SmallButton
            onClick={() => {
              dispatch(NoteActions.deleteNote());
            }}
            Icon={() => <PostDeleteIcon fill="#a3a3a3" />}
            // Icon={<PostDeleteIcon fill="#a3a3a3" />}
          />
        </FlexBox>
        <FlexBox display="flex">
          <SmallButton
            className="ql-header"
            onClick={() => {}}
            Icon={() => <MakeSizeIcon fill="#a3a3a3" />}
            // Icon={<MakeSizeIcon fill="#a3a3a3" />}
          />
          <SmallButton
            className="ql-bold"
            onClick={() => {}}
            Icon={() => <MakeBoldIcon fill="#a3a3a3" />}
            // Icon={<MakeBoldIcon fill="#a3a3a3" />}
          />
          <SmallButton
            className="ql-list"
            onClick={() => {}}
            Icon={() => <MakeBulletIcon fill="#a3a3a3" />}
            // Icon={<MakeBulletIcon fill="#a3a3a3" />}
          />
          <SmallButton
            className="ql-code-block"
            onClick={() => {}}
            Icon={() => <MakeCodeIcon fill="#a3a3a3" />}
            // Icon={<MakeCodeIcon fill="#a3a3a3" />}
          />
          <SmallButton
            className="ql-image"
            onClick={() => {}}
            Icon={() => <MakeImageIcon fill="#a3a3a3" />}
            // Icon={<MakeImageIcon fill="#a3a3a3" />}
          />
        </FlexBox>
      </RightMenu>
    </Box>
  );
}
