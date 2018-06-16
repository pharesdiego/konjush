import React from 'react';
import classNames from 'classnames';

const CardTab = ({ text, isPositive, cardViewType }) => (
  <div
    onClick = { cardViewType }
    className = {classNames( {'tab--active': isPositive} )}
    children = { text } />
)

export default CardTab;