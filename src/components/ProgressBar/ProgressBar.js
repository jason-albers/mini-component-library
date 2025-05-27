/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

/* Just finished watching the answer video and Josh's approach is far different from mine.
   I find my answer ticks nearly all the boxes and have decided not to refactor. I don't 
   think I would have been successful in building it the way that he built it. For now,
   I feel like this is a passing grade so I'm leaving it as-is.
*/
const ProgressBar = ({ value, size }) => {
  const SIZES = {
    small: {
      height: '8px',
      borderRadius: '4px',
    },
    medium: {
      height: '12px',
      borderRadius: '4px',
    },
    large: {
      height: '24px',
      borderRadius: '8px',
    },
  };

  const ProgressBarElement = styled.progress`
    width: 370px;
    height: ${SIZES[size].height};
    border: none;

    // styles the "completed" progress. border-radius only curls the right side at 99%.
    &::-webkit-progress-value {
      background-color: ${COLORS.primary};
      border-radius: ${value >= 99
        ? SIZES[size].borderRadius
        : `${SIZES[size].borderRadius} 0px 0px ${SIZES[size].borderRadius}`};
    }

    // styles the entire element bar
    &::-webkit-progress-bar {
      background-color: ${COLORS.transparentGray15};
      box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
      border-radius: ${SIZES[size].borderRadius};
      //only large sizes have internal padding
      padding: ${size === 'large' ? '4px' : '0px'};
    }
  `;

  return (
    <ProgressBarElement
      value={value}
      max="100"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
    />
  );
};

export default ProgressBar;
