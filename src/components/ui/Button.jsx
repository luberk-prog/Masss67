import React from 'react';

const SIZES = {
  small: 'btn--sm',
  medium: 'btn--md',
  large: 'btn--lg',
};

export default function Button({
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  onClick,
  children,
  className = '',
  style,
  type = 'button',
  ...rest
}) {
  const sizeClass = SIZES[size] || SIZES.medium;
  const stateClasses = [
    disabled && !loading ? 'btn--disabled' : '',
    loading ? 'btn--loading' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const classNames = [
    'btn',
    `btn-${variant}`,
    sizeClass,
    stateClasses,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled || loading}
      style={style}
      {...rest}
    >
      {loading && <span className="btn-spinner" aria-hidden="true" />}
      {!loading && children}
    </button>
  );
}
