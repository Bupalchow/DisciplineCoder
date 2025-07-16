import React from 'react';
import graphsRoadmap from '../data/graphsRoadmap';
import RoadmapContainer from '../components/roadmap/organisms/RoadmapContainer';
import useRoadmapProgress from '../hooks/useRoadmapProgress';

/**
 * Graphs Roadmap Page
 * @component
 * @description Page for the Graphs DSA roadmap, including progress tracking and all sections.
 */
const GraphsRoadmapPage = () => {
  const [progress, setProgress, resetProgress] = useRoadmapProgress('graphs');

  return (
    <RoadmapContainer
      roadmap={graphsRoadmap}
      progress={progress}
      setProgress={setProgress}
      resetProgress={resetProgress}
    />
  );
};

export default GraphsRoadmapPage;
