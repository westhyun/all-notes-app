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
  width: 500px;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;
  justify-content: center;
`;

const RightMenu = styled(Menu)`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 0 10px;
`;

export default function NoteToolbar() {
  return (
    <Box id="toolbar">
      <LeftMenu>
        <SearchInput />
      </LeftMenu>
      <RightMenu>
        <FlexBox display="flex">
          <SmallButton
            onClick={() => {}}
            Icon={() => <PostAddIcon fill="#373737" />}
          />
          <SmallButton
            onClick={() => {}}
            Icon={() => <PostDeleteIcon fill="#373737" />}
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
