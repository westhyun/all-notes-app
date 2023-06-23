import SmallButton from 'app/components/Button/SmallButton';
import React from 'react';
import styled from 'styled-components';

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
      <LeftMenu></LeftMenu>
      <RightMenu></RightMenu>
    </Box>
  );
}
