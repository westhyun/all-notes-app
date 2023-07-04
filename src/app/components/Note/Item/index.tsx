import React from 'react';
import styled from 'styled-components';
import { FiArrowUpRight as LinkIcon } from 'react-icons/fi';
import { FlexBox } from 'app/components/FlexBox';
import { useNoteSlice } from 'store/note';
import { useDispatch } from 'react-redux';

const Box = styled.div<{ selected?: boolean }>`
  width: 100%;
  height: fit-content;
  padding: 25px;
  border-radius: 21px;
  margin: 10px 0;
  user-select: none;
  cursor: pointer;
  background-color: ${props =>
    props.selected
      ? props.theme.colors.selectedColor
      : props.theme.colors.unSelectedColor};

  @media (max-width: 520px) {
    padding: 0.4rem;
    border-radius: 10px;
  }
`;

const NoteTitle = styled.div<{ selected?: boolean }>`
  font-size: 1rem;
  font-weight: 700;
  color: #2c2c2c;
  width: calc(100% - 20px);
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: ${props => (props.selected ? '#f4f4f4' : 'inherit')};

  @media (max-width: 520px) {
    font-size: 0.8rem;
  }
`;

const NoteContent = styled.div<{ selected?: boolean }>`
  font-size: 0.9rem;
  color: #8b8b8b;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding-top: 13px;
  color: ${props => (props.selected ? '#fafafa' : '#9b9b9b')};

  @media (max-width: 520px) {
    font-size: 0.8rem;
    -webkit-line-clamp: 1;
    padding-top: 5px;
  }
`;

export default function NoteItem({
  id,
  preview,
  createdAt,
  selected,
}: NoteItem) {
  const { NoteActions } = useNoteSlice();
  const dispatch = useDispatch();

  return (
    <Box
      selected={selected}
      onClick={() => dispatch(NoteActions.selectNote({ id: id }))}
    >
      <FlexBox display="flex" justifyContent="space-between">
        <NoteTitle selected={selected}>{preview}</NoteTitle>
        <LinkIcon size={17} color={selected ? '#fafafa' : 'inherit'} />
      </FlexBox>
      <NoteContent selected={selected}>{preview}</NoteContent>
      <NoteContent selected={selected}>
        {new Date(createdAt).toLocaleTimeString('ko-KR', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          hour12: true,
          minute: 'numeric',
        })}
      </NoteContent>
    </Box>
  );
}
