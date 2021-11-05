import styled from 'styled-components';

export const Input = styled.input`
  background-color: var(--clr-background);
  border: 1px solid var(--clr-brand);
  border-radius: var(--border-radius);
  color: var(--clr-primary-text);
  font-size: var(--font-size-1);
  padding: var(--space-0-5); 
  text-align: center;
  margin-bottom: var(--space-0-5);

  &::placeholder {
    color: var(--clr-primary-text);
    font-weight: var(--font-weight-light);
    text-align: center;
  }
  
  &:focus { 
    outline: 3px solid var(--clr-brand);
  }
  
  &:-webkit-autofill,
  &:-webkit-autofill::first-line {
    font-family: var(--font-brand);
    font-size: var(--font-size-1);
  }
`;