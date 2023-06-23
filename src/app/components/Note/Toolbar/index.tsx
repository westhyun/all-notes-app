import SmallButton from 'app/components/Button/SmallButton';
import React from 'react';
import styled from 'styled-components';
import {
  PiTrashSimple as PostDeleteIcon,
  PiListBullets as MakeBulletIcon,
} from 'react-icons/pi';
import {
  RiFontSize as MakeSizeIcon,
  RiImageLine as MakeImageIcon,
} from 'react-icons/ri';
import {
  AiOutlineFileAdd as PostAddIcon,
  AiOutlineBold as MakeBoldIcon,
} from 'react-icons/ai';
import { Div } from 'app/components/Div';
import SearchInput from 'app/components/Input/SearchInput';

const Box = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
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
    <Box>
      <LeftMenu>
        <SearchInput />
      </LeftMenu>
      <RightMenu>
        <Div display="flex">
          <SmallButton
            onClick={() => {}}
            Icon={() => <PostAddIcon fill="#a3a3a3" />}
          />
          <SmallButton
            onClick={() => {}}
            Icon={() => <PostDeleteIcon fill="#a3a3a3" />}
          />
        </Div>
        <Div display="flex">
          <SmallButton
            onClick={() => {}}
            Icon={() => <MakeSizeIcon fill="#a3a3a3" />}
          />
          <SmallButton
            onClick={() => {}}
            Icon={() => <MakeBoldIcon fill="#a3a3a3" />}
          />
          <SmallButton
            onClick={() => {}}
            Icon={() => <MakeBulletIcon fill="#a3a3a3" />}
          />
          <SmallButton
            onClick={() => {}}
            Icon={() => <MakeImageIcon fill="#a3a3a3" />}
          />
        </Div>
      </RightMenu>
    </Box>
  );
}
