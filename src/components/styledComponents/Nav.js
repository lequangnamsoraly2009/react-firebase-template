import styled from 'styled-components';

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: var(--space-0-5) var(--space-1);
  flex-wrap: wrap;

  @media only screen and (max-width: 700px)  {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: var(--space-0-5);
  }
`;