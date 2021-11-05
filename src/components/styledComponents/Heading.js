import styled from 'styled-components';

export const Heading = styled.h1`
  color: var(--clr-headings);
  font-family: var(--font-brand);
  padding: var(--space-0-25) 0;
  font-size: clamp(1.5rem, 1.5vw, 3rem);
  white-space: nowrap;
  
  /* GENERAL */
  &::first-letter {
    text-transform: uppercase;
  }
  
  &.light {
    font-weight: var(--font-weight-light);
  }
  
  &.heavy {
    font-weight: var(--font-weight-heavy);
  }
  
  &.center {
    text-align: center;
  }

  &.heading-2 {
    font-size: clamp(1.125rem, 1.125vw, 2rem);
  }
`;