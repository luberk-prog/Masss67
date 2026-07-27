import React from 'react';

const SIZES = {
  small: 'badge--sm',
  medium: 'badge--md',
};

export default function Badge({
  variant = 'default',
  size = 'medium',
  children,
  className = '',
  style,
  ...rest
}) {
  const sizeClass = SIZES[size] || SIZES.medium;
  const classNames = ['badge', `badge-${variant}`, sizeClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classNames} style={style} {...rest}>
      {children}
    </span>
  );
}
