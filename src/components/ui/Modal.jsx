import React, { useEffect, useCallback, useRef } from 'react';

export default function Modal({
  open,
  onClose,
  children,
  className = '',
  style,
  ...rest
}) {
  const panelRef = useRef(null);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    if (panelRef.current) {
      const focusable = panelRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      if (first) {
        first.focus();
      } else {
        panelRef.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  const handleOverlayClick = () => {
    onClose?.();
  };

  const handlePanelClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="modal-overlay"
      onClick={handleOverlayClick}
      {...rest}
    >
      <div
        ref={panelRef}
        className={`glass-panel ${className}`}
        onClick={handlePanelClick}
        style={style}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
      >
        {children}
      </div>
    </div>
  );
}
