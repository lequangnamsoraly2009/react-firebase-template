import styled from 'styled-components';

export const List = styled.ul`
  background: var(--clr-background);
  border-radius: var(--border-radius);
  border: 2px solid var(--clr-brand);
  display: flex;
  flex-direction: column;
  height: 50vh;
  max-height: 90vh;
  min-height: 30vh;
  overflow: scroll;
  padding: var(--space-0-5) var(--space-1);
  resize: vertical;
`;