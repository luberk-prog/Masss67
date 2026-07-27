import React, { useRef, useState, useCallback } from 'react';

export default function DiscoveryRail({ children, className = '' }) {
  const railRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollByCard = useCallback((direction) => {
    const rail = railRef.current;
    if (!rail) return;
    const cardWidth = rail.querySelector('.discovery-card')?.offsetWidth || 320;
    const gap = 16;
    rail.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: 'smooth',
    });
  }, []);

  const onMouseDown = useCallback((e) => {
    setIsDragging(true);
    const rail = railRef.current;
    if (!rail) return;
    setStartX(e.pageX - rail.offsetLeft);
    setScrollLeft(rail.scrollLeft);
    rail.style.cursor = 'grabbing';
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!isDragging) return;
    e.preventDefault();
    const rail = railRef.current;
    if (!rail) return;
    const x = e.pageX - rail.offsetLeft;
    const walk = (x - startX) * 1.5;
    rail.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
    const rail = railRef.current;
    if (rail) rail.style.cursor = 'grab';
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const onWheel = useCallback((e) => {
    const rail = railRef.current;
    if (!rail) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      rail.scrollLeft += e.deltaY;
    }
  }, []);

  const onTouchStart = useCallback((e) => {
    setIsDragging(true);
    const rail = railRef.current;
    if (!rail) return;
    setStartX(e.touches[0].pageX - rail.offsetLeft);
    setScrollLeft(rail.scrollLeft);
  }, []);

  const onTouchMove = useCallback((e) => {
    if (!isDragging) return;
    const rail = railRef.current;
    if (!rail) return;
    const x = e.touches[0].pageX - rail.offsetLeft;
    const walk = (x - startX) * 1.5;
    rail.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const onTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const onKeyDown = useCallback((e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollByCard(1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollByCard(-1);
    }
  }, [scrollByCard]);

  return (
    <div
      ref={railRef}
      className={`discovery-rail ${className}`}
      role="list"
      aria-label="Discovery rail"
      tabIndex={0}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onWheel={onWheel}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onKeyDown={onKeyDown}
    >
      {children}
    </div>
  );
}