// SkipNavigation.js
import React from 'react';
import styled from 'styled-components';

const SkipLink = styled.a`
  position: absolute;
  left: -9999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;

  &:focus {
    position: static;
    width: auto;
    height: auto;
    overflow: visible;
  }
`;

const SkipNavigation = () => (
  <>
    <SkipLink href="#main-content" className="skip-link">Skip to Main Content</SkipLink>
    <SkipLink href="#main-menu" className="skip-link">Skip to Main Menu</SkipLink>
    <SkipLink href="#footer" className="skip-link">Skip to Footer</SkipLink>
  </>
);

export default SkipNavigation;
