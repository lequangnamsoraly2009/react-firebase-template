import styled from 'styled-components';

export const Button = styled.button`
  background-color: var(--clr-brand);
  border: 1px solid var(--clr-brand);
  border-radius: var(--border-radius);
  color: var(--clr-secondary-text);
  font-size: clamp(.75rem, 1vw, 1rem);
  padding: var(--space-0-25) var(--space-1);
  white-space: nowrap;

  /* GENERAL */

  /* Need to keep hover styles above active styles, otherwise the active styles will not work*/
  &:hover {
    box-shadow: var(--box-shadow-button);
    cursor: pointer;
    transform: translateY(-.125rem);
  }
  
  &:active {
    transform: none;
    box-shadow: none;
  }

  &.accent {
    background-color: var(--clr-accent);
    border: 2px solid var(--clr-accent);
    color: var(--clr-secondary-text);
  }

  &:disabled {
    box-shadow: none;
    cursor: default;
    opacity: 0.65;
    transform: none;
  }

  &.fit-content {
    width: fit-content;
    margin: 0 auto;
  }
  
  &.outlined {
    background-color: var(--clr-background);
    border: 2px solid var(--clr-brand);
    color: var(--clr-primary-text);
  }
  
  &.text-only {
    background-color: transparent;
    border: none;
    box-shadow: none;
    color: var(--clr-brand);
  }
  
  &.outlined-danger {
    background-color: var(--clr-danger-light);
    border: 2px solid var(--clr-danger);
    color: var(--clr-danger);
  }
  
  &.outlined-danger:active {
    box-shadow: none;
  }

  &.outlined-danger:hover {
    box-shadow: 0.05rem 0.25rem .25rem rgba(175, 175, 175, 0.75);
  }
`;