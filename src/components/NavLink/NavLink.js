import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS } from "../../constants";

function NavLink({ children, ...delegated }) {
  return (
    <NavWrapper>
      <NavText>{children}</NavText>
      <HoverNavText aria-hidden={true}>{children}</HoverNavText>
    </NavWrapper>
  );
}

const NavWrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  display: block;
  overflow: hidden;
  position: relative;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const NavText = styled.div`
  transform: translateY(0%);
  transition: transform 500ms;

  ${NavWrapper}:hover & {
    font-weight: ${WEIGHTS.bold};
  }

  @media (prefers-reduced-motion: no-preference) {
    ${NavWrapper}:hover & {
      transform: translateY(-100%);
      transition: transform 200ms;
    }
  }
`;

const HoverNavText = styled.div`
  /* need to take it out of flow */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* hovered version is bolded */
  font-weight: ${WEIGHTS.bold};
  /* animation */
  transform: translateY(100%);
  transition: transform 400ms;

  @media (prefers-reduced-motion: no-preference) {
    ${NavWrapper}:hover & {
      transform: translateY(0%);
      transition: transform 100ms;
    }
  }
`;

export default NavLink;
