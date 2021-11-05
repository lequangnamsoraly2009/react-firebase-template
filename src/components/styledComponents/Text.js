import styled from 'styled-components';

export const Text = styled.p`
  background-color: transparent;
  color: var(--clr-primary-text);
  font-size: clamp(0.75rem, 1vw, 1rem);
  padding: var(--space-0-5) 0;

  &::first-letter {
    text-transform: uppercase;
  }

  /* font-weight */  
  &.light {
    font-weight: var(--font-weight-light);
  }

  &.heavy {
    font-weight: var(--font-weight-heavy);
  }

  /* text-align */
  &.center {
    text-align: center;
  }

  &.success {
    background-color: var(--clr-success-light);
    border: 1px solid var(--clr-success);
    color: var(--clr-success);
  }

  &.color-copied-success {
    animation: fadeIn 0.75s ease-in;
    animation: fadeOut 3s forwards;
  }

  /* links */
  &.link:hover {
    color: var(--clr-brand);
    cursor: pointer;
    transform: translateY(-.125rem);
  }

  /* danger */
  &.danger {
    background-color: var(--clr-danger);
    color: var(--clr-neutral);
    text-align: center;
  }
`;