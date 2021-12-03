import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  const STYLES = {
    small: {
      '--iconSize': 16,
      '--minWidth': `${Math.max(50, width - 5 - 16)}px`,
      '--fontSize': `${16 / 16}rem`
    },
    large: {
      '--iconSize': 18,
      '--minWidth': `${Math.max(50, width - 5 - 18)}px`,
      '--fontSize': `${18 / 16}rem`
    }
  };

  const styles = STYLES[size] || STYLES.small;

  // Things I didn't get
  //  * label
  //  * placeholder styles
  //  * outline ... i hacked that later

  const Wrapper = styled.label`
    display: block;
    width: fit-content;
    border-bottom: 1px solid black;
    &:hover, &:focus {
      box-shadow: 0 0 1px 0.5px ${COLORS.primary};
    }
  `;

  const Input = styled.input`
    color: ${COLORS.gray700};
    min-width: var(--minWidth);
    font-size: var(--fontSize);
    font-weight: 700;
    outline: none;
    border: none;
    vertical-align: 3px;
    &::placeholder {
      font-weight: 400;
      color: ${COLORS.gray500};
    }
    &:hover {
      color: ${COLORS.black};
    }
  `;

  const LeftIcon = styled(Icon)`
    display: inline-block;
    margin-right: 5px
  `;

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <LeftIcon id={icon} size={styles["--iconSize"]}/>
      <Input style={styles} type="text" placeholder={placeholder} />
    </Wrapper>
  )
};

export default IconInput;
