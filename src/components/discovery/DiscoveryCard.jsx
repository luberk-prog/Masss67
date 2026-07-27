import React from 'react';
import { Play } from 'lucide-react';

export default function DiscoveryCard({
  title,
  questions,
  duration,
  difficulty,
  image,
  onPlay,
}) {
  return (
    <div
      className="discovery-card"
      role="button"
      tabIndex={0}
      aria-label={`Play ${title} quiz`}
      onClick={onPlay}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onPlay();
        }
      }}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="discovery-card__img"
      />
      <div className="discovery-card__overlay" />
      <div className="discovery-card__content">
        <div>
          <h3 className="discovery-card__title">{title}</h3>
          <div className="discovery-card__meta">
            <span>{questions} Questions</span>
            <span>{duration}</span>
            <span>{difficulty}</span>
          </div>
        </div>
        <div className="discovery-card__play" aria-hidden="true">
          <Play size={16} fill="#FFF" stroke="none" />
        </div>
      </div>
    </div>
  );
}