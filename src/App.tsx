import styled from 'styled-components';
import Input from './components/Input';
import ItemsList from './components/ItemsList';
import { useAppSelector } from './store/store';

const App: React.FC = () => {
  const items = useAppSelector((state) => state.items);
  const StyledContainer = styled.div`
    width: 30%;
    padding: 30px;
    border-radius: 11% 89% 10% 90% / 86% 11% 89% 14%;
    max-height: 50vh;
    background-color: #b4ea97;
  `;

  return (
    <div className='App'>
      <h1>Shopping list</h1>
      <StyledContainer>
        <Input />
        <ItemsList items={items} />
      </StyledContainer>
      {items.length > 0 && <p>Click on title to delete item</p>}
    </div>
  );
};

export default App;
