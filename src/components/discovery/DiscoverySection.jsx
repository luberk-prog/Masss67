import React from 'react';
import SectionHeader from './SectionHeader';
import DiscoveryRail from './DiscoveryRail';
import DiscoveryCard from './DiscoveryCard';

export default function DiscoverySection({
  title,
  subtitle,
  onViewAll,
  items = [],
  emptyTitle = 'Nothing here yet',
  emptyMessage = 'Check back soon for new content.',
}) {
  if (items.length === 0) {
    return (
      <section className="section">
        <div className="content">
          <SectionHeader title={title} subtitle={subtitle} />
          <div className="discovery-empty">
            <p className="discovery-empty__title">{emptyTitle}</p>
            <p className="discovery-empty__message">{emptyMessage}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="content">
        <SectionHeader title={title} subtitle={subtitle} onViewAll={onViewAll} />
        <DiscoveryRail>
          {items.map(item => (
            <DiscoveryCard
              key={item.id}
              title={item.title}
              questions={item.questions}
              duration={item.duration}
              difficulty={item.difficulty}
              image={item.image}
              onPlay={item.onPlay}
            />
          ))}
        </DiscoveryRail>
      </div>
    </section>
  );
}