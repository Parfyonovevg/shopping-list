import styled, { css } from 'styled-components';
import {
  useAppDispatch,
  toggleItem,
  removeItem,
  increaseAmount,
  decreaseAmount,
} from '../store/store';

type ItemProps = {
  id: string;
  title: string;
  amount: number;
  isActive: boolean;
};

const StyledItem = styled.li<{ isActive: boolean }>`
  width: 80%;
  margin: 0 auto;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background-color: #699b76;
  border: 1px solid #000000;
  border-radius: 10px;

  ${({ isActive }) =>
    !isActive &&
    css`
      text-decoration: line-through;
      opacity: 0.5;
      font-style: italic;
    `}
`;

const StyledControls = styled.div`
  min-width: 65px;
  border-radius: 20px;
  padding: 5px 10px;
  background-color: #fff;
  font-size: 1.2rem;
  text-align: center;
`;
const StyledAmount = styled.span`
  margin: 0 10px;
`;

const StyledCheckbox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%; /* Make the checkbox round */
  outline: none;
  cursor: pointer;
  &:checked {
    background-color: #b4ea97;
  }
`;
const StyledTitle = styled.p`
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
  }
`;

const StyledSpan = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

const Item: React.FC<ItemProps> = ({ id, title, amount, isActive }) => {
  const dispatch = useAppDispatch();

  const increaseAmountHandler = () => {
    dispatch(increaseAmount(id));
  };
  const decreaseAmountHandler = () => {
    dispatch(decreaseAmount(id));
  };

  const toggleItemHandler = () => {
    dispatch(toggleItem(id));
  };

  const deleteHandler = () => {
    dispatch(removeItem(id));
  };

  return (
    <StyledItem isActive={isActive}>
      <StyledCheckbox onClick={toggleItemHandler} id={id} type='checkbox' />
      <StyledTitle onClick={deleteHandler}>{title}</StyledTitle>
      <StyledControls>
        <StyledSpan onClick={decreaseAmountHandler}>&lt;</StyledSpan>
        <StyledAmount>{amount}</StyledAmount>
        <StyledSpan onClick={increaseAmountHandler}>&gt;</StyledSpan>
      </StyledControls>
    </StyledItem>
  );
};

export default Item;
