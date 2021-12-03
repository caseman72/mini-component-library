/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  const cappedValue = Math.min(100, Math.max(0, value));

  // increases roundess as it approaches full bar
  const endCapRoundness = cappedValue < 98 ? 0 : (7 * (cappedValue-98)/2).toFixed(1);

  const STYLES = {
    small: {
      "--barBorder": "none",
      "--barHeight": "8px",
      "--barRadius": `7px ${endCapRoundness}px ${endCapRoundness}px 7px`,
      "--wrapperBorder": "none",
      "--wrapperRadius": 0,
    },
    medium: {
      "--barBorder": "none",
      "--barHeight": "12px",
      "--barRadius": `7px ${endCapRoundness}px ${endCapRoundness}px 7px`,
      "--wrapperBorder": "none",
      "--wrapperPadding": 0,
    },
    large: {
      "--barBorder": `${value > 0 ? `0.1em solid ${COLORS.primary}` : `none`}`,
      "--barHeight": "18px",
      "--barRadius": `7px ${endCapRoundness}px ${endCapRoundness}px 7px`,
      "--wrapperBorder": `0.1em solid ${COLORS.gray300}`,
      "--wrapperPadding": "2.5px",
    }
  };

  const styles = STYLES[size] || STYLES.large;

  const Wrapper = styled.div`
    border: var(--wrapperBorder);
    padding: var(--wrapperPadding);
    background-color: ${COLORS.gray50};
    border-radius: 9px;
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  `;

  const Bar = styled.div`
    width: ${cappedValue}%;
    background-color: ${COLORS.primary};
    border: var(--barBorder);
    min-height: var(--barHeight);
    border-radius: var(--barRadius);
  `;

  return (
    <Wrapper style={styles} role="progressbar" aria-valuenow={`${cappedValue}`} aria-valuemin="0" aria-valuemax="100">
      <Bar style={styles}>
        <VisuallyHidden>{cappedValue}%</VisuallyHidden>
      </Bar>
    </Wrapper>
  );
};

export default ProgressBar;
