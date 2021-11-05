import styled from 'styled-components';

export const Form = styled.form`
  background: var(--clr-background);
  border-radius: var(--border-radius);
  border: 2px solid var(--clr-brand);
  display: flex;
  flex-direction: column;
  padding: var(--space-0-5) var(--space-1);

  /* GENERAL */
  
  &.space-children > *  {
    margin: var(--space-0-5) 0;
    width: 100%;
  }

  &.space-children > button  {
    width: max-content;
    margin: 0 auto;
  }
`;