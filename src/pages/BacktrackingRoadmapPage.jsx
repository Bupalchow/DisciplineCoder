/**
 * Backtracking Roadmap Page
 * @component
 * @description Page for the Backtracking DSA roadmap, including progress tracking and all sections.
 */

import React from 'react';
import { BACKTRACKING_ROADMAP } from '../data/backtrackingRoadmap';
import { RoadmapContainer } from '../components/roadmap/organisms';
import { useRoadmapProgress } from '../hooks/useRoadmapProgress';

const BacktrackingRoadmapPage = () => {
  const progress = useRoadmapProgress(BACKTRACKING_ROADMAP.id);

  return (
    <RoadmapContainer
      roadmap={BACKTRACKING_ROADMAP}
      progress={progress}
    />
  );
};

export default BacktrackingRoadmapPage;
