import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon = 'chevron-down',
  width = 250,
  size,
  placeholder = 'Search...',
}) => {
  const SIZES = {
    small: {
      height: '24px',
      borderBottom: '1px solid black',
      iconSize: '16px',
      iconHeight: '12px',
      fontWeight: '400',
      strokeWidth: 1,
      fontSize: '14px',
    },
    large: {
      height: '36px',
      borderBottom: '2px solid black',
      iconSize: '24px',
      iconHeight: '16px',
      fontWeight: '700',
      strokeWidth: 2,
      fontSize: '18px',
    },
  };
  const divContainerStyle = {
    width: width,
    height: SIZES[size].height,
    borderBottom: SIZES[size].borderBottom,
    position: 'relative',
    /* &:focus {
    } */
  };

  const iconStyle = {
    display: 'inline-block',
    height: SIZES[size].iconHeight,
    color: COLORS.gray700,
    fontWeight: SIZES[size].fontWeight,
    strokeWidth: SIZES[size].strokeWidth,
  };

  const InputBox = styled.input`
    border: none;
    display: 'inline-block';
    width: max-content;
    height: 80%;
    padding-left: 0.5rem;
    color: ${COLORS.gray700};
    font-weight: 700;
    font-size: ${SIZES[size].fontSize};

    &::placeholder {
      font-weight: 400;
      color: ${COLORS.gray500};
    }

    &:focus {
      outline: none;
    }
  `;

  return (
    <div style={divContainerStyle}>
      <Icon id={icon} size={SIZES[size].iconSize} style={iconStyle} />
      <InputBox type="text" placeholder={placeholder} />
    </div>
  );
};

export default IconInput;

/* figuring out how to focus a div was where i gave up. the
last exercise showed me how to do it -- i think, but i had
so much trouble understanding what was happening that i did
not absorb much of it. i'm calling it quits on this, knowing
that i'm just not absorbing the information i need to be to
keep up with the course. if it gets even harder from here,
i might have to redo the entire curriculum, come back to this
another time, or maybe just give up entirely. i don't think
i'm cut out for this. i'm clearly not getting it. */
