import styled from 'styled-components';

export const ListItem = styled.li`
  align-items: center;
  background-color: var(--clr-background);
  border: 1px solid var(--clr-brand);
  border-radius: var(--border-radius);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: var(--space-0-5) 0;
  overflow-wrap: break-word;
  padding: var(--space-0-75);
    
  &.center {
    justify-content: center;
  }
`;