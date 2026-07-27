import React, { useEffect, useState } from 'react';
import { Play } from 'lucide-react';

/**
 * CollectionTile — signature premium content tile for MASSS67.
 *
 * Props:
 *   title              {string}   Collection title
 *   category           {string}   Small label, top-left on image
 *   description        {string?}  One-line subtitle inside image (truncated)
 *   image              {string}   Editorial photography URL
 *   questionCount      {number}   Number of questions
 *   difficulty         {string}   "Easy" | "Medium" | "Hard" | "Expert"
 *   estimatedDuration  {string}   Play time (e.g. "4 mins")
 *   playersOnline      {string?}  Optional live player count
 *   onPlay             {fn}       Click handler
 *   size               {string}   "md" (default) | "lg"
 */

const IMAGE_ASPECT = '16 / 10';

const SIZES = {
  md: { width: 'clamp(280px, 30vw, 340px)' },
  lg: { width: 'clamp(300px, 32vw, 360px)' },
};

export default function CollectionTile({
  title             = 'Untitled Collection',
  category,
  description,
  image             = '',
  questionCount     = 0,
  difficulty        = 'Medium',
  estimatedDuration = '–',
  playersOnline,
  onPlay,
  size              = 'md',
}) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { width } = SIZES[size] ?? SIZES.md;

  useEffect(() => {
    setImgError(false);
  }, [image]);

  const showImage = image && !imgError;

  return (
    <article
      onClick={onPlay}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width,
        minWidth: width,
        borderRadius: 'var(--r-md)',
        overflow: 'hidden',
        background: 'var(--surface)',
        cursor: onPlay ? 'pointer' : 'default',
        flexShrink: 0,
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 16px 40px rgba(0,0,0,0.42)'
          : '0 2px 8px rgba(0,0,0,0.18)',
        transition: 'transform 0.20s ease, box-shadow 0.20s ease',
      }}
    >
      {/* Image — ~75–80% of tile via fixed aspect ratio */}
      <div style={{
        position: 'relative',
        aspectRatio: IMAGE_ASPECT,
        overflow: 'hidden',
        background: 'var(--bg-2)',
      }}>
        {showImage && (
          <img
            src={image}
            alt={title}
            loading="lazy"
            onError={() => setImgError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 0.20s ease',
              display: 'block',
            }}
          />
        )}

        <div style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(14,17,24,0.84) 0%, rgba(14,17,24,0.24) 42%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {category && (
          <div style={{
            position: 'absolute',
            top: 'var(--sp-15)',
            left: 'var(--sp-15)',
            fontSize: '10px',
            fontWeight: 600,
            fontFamily: 'var(--f-head)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: 'rgba(196,203,216,0.80)',
            lineHeight: 1,
          }}>
            {category}
          </div>
        )}

        <div style={{
          position: 'absolute',
          bottom: 'var(--sp-15)',
          left: 'var(--sp-2)',
          right: '48px',
        }}>
          <div style={{
            fontSize: '15px',
            fontWeight: 700,
            fontFamily: 'var(--f-head)',
            color: 'var(--text)',
            lineHeight: 1.25,
            letterSpacing: '-0.2px',
            marginBottom: description ? '4px' : 0,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {title}
          </div>

          {description && (
            <div style={{
              fontSize: '12px',
              color: 'var(--text-2)',
              fontFamily: 'var(--f-body)',
              lineHeight: 1.35,
              display: '-webkit-box',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}>
              {description}
            </div>
          )}
        </div>

        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 'var(--sp-15)',
            right: 'var(--sp-15)',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'scale(1)' : 'scale(0.92)',
            transition: 'opacity 0.20s ease, transform 0.20s ease',
            pointerEvents: 'none',
          }}
        >
          <div style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            background: 'var(--accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Play size={14} fill="#fff" stroke="none" />
          </div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        alignItems: 'center',
        padding: '10px var(--sp-2)',
        gap: 'var(--sp-1)',
        borderTop: '1px solid var(--border)',
      }}>
        <span style={{
          fontSize: '11px',
          fontFamily: 'var(--f-num)',
          color: 'var(--text-3)',
        }}>
          {questionCount} questions
        </span>

        <span style={{
          fontSize: '11px',
          fontWeight: 600,
          fontFamily: 'var(--f-head)',
          color: 'var(--text-3)',
          textAlign: 'center',
        }}>
          {difficulty}
        </span>

        <span style={{
          fontSize: '11px',
          fontFamily: 'var(--f-num)',
          color: 'var(--text-3)',
          textAlign: 'right',
        }}>
          {estimatedDuration}
        </span>
      </div>
    </article>
  );
}
