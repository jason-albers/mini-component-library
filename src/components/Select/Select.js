import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const SelectInput = styled.select`
    appearance: none;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    background-color: ${COLORS.transparentGray15};
    color: ${COLORS.gray500};
    height: 43px;
    width: auto;
    max-width: ${displayedValue.length * 16 + 'px'};
    border: none;
    border-radius: 8px;
    padding: 12px;
    padding-right: 30px;

    &:hover {
      color: ${COLORS.black};
    }
  `;

  const ContainerDiv = styled.div`
    position: 'relative';
    width: 'max-content';
    max-width: ${displayedValue.length * 16 + 'px'};
  `;

  const chevronStyle = {
    fontWeight: '700',
    marginTop: '-32px',
    marginLeft: displayedValue.length * 10 + 'px',
  };

  return (
    <>
      <ContainerDiv>
        <SelectInput value={value} onChange={onChange}>
          {children}
        </SelectInput>{' '}
        <Icon id="chevron-down" size={24} style={chevronStyle} />
      </ContainerDiv>
    </>
  );
};

export default Select;

/* This is the point where I gave up on this exercise.
I understand this is meant to be a challenge but even the
solution I found mostly incomprehensible at my current
level. Maybe I was expected to know more than I did. It's
possible I was supposed to intuit that I would build a
new select container underneath the native select. The
hint pointed me in that direction, in retrospect, but
maybe due to a lack of sleep I simply didn't get what it
was trying to hint to me or how to apply it. I instead
tried to style the select element. I suppose I learned a
bit from this exercise, but it's kind of a trial by fire
here with no proper training on how to handle that fire.
I will come back when I am more experienced, maybe after
having finished the course, to see if I have a better
understanding of what was being taught here, but for now
I'm starting to think that I'm falling behind, questioning
if I've even made the right decision in learning web dev. */
