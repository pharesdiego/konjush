import React from 'react';
import classNames from 'classnames';

const CardTab = ({ text, isPositive, cardViewToggle }) => (
  <div
    onClick = { cardViewToggle }
    className = {classNames( {'tab--active': isPositive} )}
    children = { text } />
)

export default CardTab;