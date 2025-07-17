/**
 * Binary Search Roadmap Page
 * @component
 * @description Page for the Binary Search DSA roadmap, including progress tracking and all sections.
 */

import React from 'react';
import { BINARY_SEARCH_ROADMAP } from '../data/binarySearchRoadmap';
import { RoadmapContainer } from '../components/roadmap/organisms';
import { useRoadmapProgress } from '../hooks/useRoadmapProgress';

const BinarySearchRoadmapPage = () => {
  const progress = useRoadmapProgress(BINARY_SEARCH_ROADMAP.id);

  return (
    <RoadmapContainer
      roadmap={BINARY_SEARCH_ROADMAP}
      progress={progress}
    />
  );
};

export default BinarySearchRoadmapPage;
