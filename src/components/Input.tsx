import styled from 'styled-components';
import { useState } from 'react';
import { useAppDispatch, addItem } from '../store/store';
import { v4 as uuidv4 } from 'uuid';

const StyledForm = styled.form`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  /* padding: 5px 10px; */
`;

const StyledInput = styled.input`
  padding: 5px 10px;
  font-size: 1.2rem;
  border-radius: 10px;
  width: 90%;
  border: none;
  outline: none;
  &:focus {
    transform: scale(1.1);
  }
`;

const Input: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const dispatch = useAppDispatch();

  const onUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addItem({ id: uuidv4(), title, amount: 1, isActive: true }));
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <StyledInput onChange={onUserInput} type='text' value={title} placeholder='Add something...'/>
    </StyledForm>
  );
};

export default Input;
