import React from 'react';

export default function Card({
  variant = 'default',
  interactive = false,
  children,
  className = '',
  style,
  ...rest
}) {
  const classNames = [
    'card',
    `card-${variant}`,
    interactive ? 'card-interactive' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} style={style} {...rest}>
      {children}
    </div>
  );
}

Card.Header = function CardHeader({ children, className = '', style }) {
  return (
    <div className={`card-header ${className}`} style={style}>
      {children}
    </div>
  );
};

Card.Body = function CardBody({ children, className = '', style }) {
  return (
    <div className={`card-body ${className}`} style={style}>
      {children}
    </div>
  );
};

Card.Footer = function CardFooter({ children, className = '', style }) {
  return (
    <div className={`card-footer ${className}`} style={style}>
      {children}
    </div>
  );
};
