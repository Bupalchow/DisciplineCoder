/**
 * Dynamic Programming Roadmap Page
 * @component
 * @description Page for the Dynamic Programming DSA roadmap, including progress tracking and all sections.
 */

import React from 'react';
import { DYNAMIC_PROGRAMMING_ROADMAP } from '../data/dynamicProgrammingRoadmap';
import { RoadmapContainer } from '../components/roadmap/organisms';
import { useRoadmapProgress } from '../hooks/useRoadmapProgress';

const DynamicProgrammingRoadmapPage = () => {
  const progress = useRoadmapProgress(DYNAMIC_PROGRAMMING_ROADMAP.id);

  return (
    <RoadmapContainer
      roadmap={DYNAMIC_PROGRAMMING_ROADMAP}
      progress={progress}
    />
  );
};

export default DynamicProgrammingRoadmapPage;
