import React from 'react';
import { ChevronRight } from 'lucide-react';

/**
 * DiscoverySection — shared container, header, and horizontal rail for Discovery.
 *
 * Props:
 *   title        {string}
 *   subtitle     {string}
 *   onViewAll    {fn?}
 *   variant      {"default"|"featured"|"compact"}
 *   emptyTitle   {string?}
 *   emptyMessage {string?}
 *   isEmpty      {boolean}
 *   children
 */

const VARIANTS = {
  default: {
    sectionPad: 'var(--sp-6) 0 0',
    containerPad: 'var(--sp-3) 0 var(--sp-2)',
    railGap: 'var(--sp-2)',
    railPad: 'var(--sp-1) var(--sp-3) var(--sp-3)',
  },
  featured: {
    sectionPad: 'var(--sp-6) 0 0',
    containerPad: 'var(--sp-4) 0 var(--sp-3)',
    railGap: 'var(--sp-3)',
    railPad: 'var(--sp-1) var(--sp-4) var(--sp-4)',
  },
  compact: {
    sectionPad: 'var(--sp-6) 0 0',
    containerPad: 'var(--sp-3) 0 var(--sp-2)',
    railGap: 'var(--sp-15)',
    railPad: 'var(--sp-1) var(--sp-3) var(--sp-3)',
  },
};

export default function DiscoverySection({
  title,
  subtitle,
  onViewAll,
  variant = 'default',
  emptyTitle = 'Nothing here yet',
  emptyMessage = 'Check back soon for new content.',
  isEmpty = false,
  children,
}) {
  const v = VARIANTS[variant] ?? VARIANTS.default;

  return (
    <section style={{ padding: v.sectionPad }}>
      <div style={{
        maxWidth: '1520px',
        margin: '0 auto',
        padding: '0 var(--sp-4)',
      }}>
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--r-md)',
          padding: v.containerPad,
          boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
        }}>
          {/* Header */}
          <div style={{
            padding: '0 var(--sp-3)',
            marginBottom: 'var(--sp-2)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 'var(--sp-2)',
          }}>
            <div style={{ minWidth: 0 }}>
              <h2 style={{
                fontFamily: 'var(--f-head)',
                fontSize: '22px',
                fontWeight: 700,
                color: 'var(--text)',
                letterSpacing: '-0.2px',
                marginBottom: '4px',
              }}>
                {title}
              </h2>
              <p style={{
                fontSize: '14px',
                color: 'var(--text-3)',
                lineHeight: 1.45,
                maxWidth: '560px',
              }}>
                {subtitle}
              </p>
            </div>

            {onViewAll && (
              <button
                type="button"
                onClick={onViewAll}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '13px',
                  fontWeight: 600,
                  fontFamily: 'var(--f-head)',
                  color: 'var(--text-3)',
                  padding: '7px 14px',
                  borderRadius: 'var(--r-sm)',
                  border: '1px solid var(--border)',
                  background: 'transparent',
                  cursor: 'pointer',
                  transition: 'color 0.15s ease, border-color 0.15s ease',
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--text-2)';
                  e.currentTarget.style.borderColor = 'var(--border-hover)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--text-3)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                View All <ChevronRight size={14} />
              </button>
            )}
          </div>

          {/* Rail or empty state */}
          {isEmpty ? (
            <div style={{
              margin: '0 var(--sp-3)',
              padding: 'var(--sp-5) var(--sp-3)',
              borderRadius: 'var(--r-sm)',
              background: 'var(--bg-2)',
              border: '1px solid var(--border)',
              textAlign: 'center',
            }}>
              <p style={{
                fontFamily: 'var(--f-head)',
                fontSize: '15px',
                fontWeight: 600,
                color: 'var(--text-2)',
                marginBottom: '6px',
              }}>
                {emptyTitle}
              </p>
              <p style={{
                fontSize: '13px',
                color: 'var(--text-3)',
                maxWidth: '360px',
                margin: '0 auto',
                lineHeight: 1.5,
              }}>
                {emptyMessage}
              </p>
            </div>
          ) : (
            <div
              className="discovery-rail"
              style={{
                display: 'flex',
                gap: v.railGap,
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth',
                padding: v.railPad,
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {children}
              <div style={{ width: '1px', flexShrink: 0 }} aria-hidden="true" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
