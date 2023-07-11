import styled from 'styled-components';
import Item from './Item';

import { itemModel } from '../models/models';

type ItemListProps = { items: itemModel[] };

const StyledList = styled.ul`
  padding: 0;
  list-style: none;
`;

const ItemsList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <StyledList>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </StyledList>
  );
};

export default ItemsList;
