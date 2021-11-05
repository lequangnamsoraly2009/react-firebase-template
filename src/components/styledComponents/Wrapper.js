import styled from 'styled-components';

export const Wrapper = styled.div`
  &.loading-spinner-wrapper {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.nav-buttons-wrapper {
    display: flex;
    gap: var(--space-1);
  }

  @media only screen and (max-width: 650px)  {
    &.nav-buttons-wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
    }
  }
  
  &.sign-in, 
  .sign-up {
    animation: fadeIn 0.25s ease-in;
    display: flex;
    flex-direction: column;
  }
`;