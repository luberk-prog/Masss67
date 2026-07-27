import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function ViewAllButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="view-all-btn"
      aria-label="View all items"
    >
      View All
      <ChevronRight size={14} />
    </button>
  );
}