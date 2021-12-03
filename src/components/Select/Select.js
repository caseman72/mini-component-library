import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const Wrapper = styled.div`
    position: relative;
    width: max-content;
  `;

  const BrowserSelect = styled.select`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  `;

  const Selected = styled.div`
    font-size: 1rem;
    padding: 12px 52px 12px 16px;
    background-color: ${COLORS.gray50};
    border: 2px solid ${COLORS.gray50};
    border-radius: 8px;
    color: ${COLORS.gray700};

    ${BrowserSelect}:hover ~ & {
      color: ${COLORS.black};
    }

    ${BrowserSelect}:active ~ &, ${BrowserSelect}:focus ~ & {
      border: 2px solid ${COLORS.primary};
      border-radius: 8px;
    }

  `;

  const SelectedIcon = styled(Icon)`
    position: absolute;
    right: 8px;
    top: 8px;
    pointer-events: none;
  `;

  return (
    <Wrapper>
      <BrowserSelect value={value} onChange={onChange}>
        {children}
      </BrowserSelect>
      <Selected>
        {displayedValue}
        <SelectedIcon id={"chevron-down"} size={24} />
      </Selected>
    </Wrapper>
  );
};

export default Select;
