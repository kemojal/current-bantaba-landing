import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ButtonContainer = styled(motion.button)`
  border: none;
  background-color: ${({ bgcolor }) =>
    bgcolor ? bgcolor : 'var(--main-bg-color)'};

  padding: var(--button-padding-vertical) var(--button-padding-horizontal);
  border-radius: var(--button-border-radius);
  color: ${({ color }) => (color ? color : 'var(--bg-white-color)')};
  font-size: var(--h3-font-size);
  line-height: var(--l3-height);
  font-family: var(--font-family-noto_sans);
`;
export const Button = ({ title, bgcolor, color }) => {
  return (
    <ButtonContainer bgcolor={bgcolor} color={color}>
      {title}
    </ButtonContainer>
  );
};
