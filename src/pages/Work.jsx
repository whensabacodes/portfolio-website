import { useState } from 'react';
import { site } from '../data/site';
import { getProfessionalProjectsGrouped } from '../data/projects';
import { getWorkSidebarFilters } from '../data/projectFolders';
import BackToHome from '../components/navigation/BackToHome';
import {
  WorkIntro,
  WorkSidebar,
  WorkProjectBrowser,
} from '../sections/work';

function Work() {
  const [activeFilter, setActiveFilter] = useState('all');
  const filters = getWorkSidebarFilters();
  const groups = getProfessionalProjectsGrouped(activeFilter);
  const copy = site.workPage;

  return (
    <div className="work-page">
      <div className="work-page__inner container">
        <BackToHome />
        <WorkIntro copy={copy} />

        <div className="work-page__browser">
          <WorkSidebar
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            pathRoot={copy.pathRoot}
          />
          <WorkProjectBrowser groups={groups} />
        </div>
      </div>
    </div>
  );
}

export default Work;
