import { useState } from 'react';
import { site } from '../data/site';
import { getProfessionalProjectsGrouped } from '../data/projects';
import { getWorkSidebarFilters } from '../data/projectFolders';
import {
  WorkIntro,
  WorkSidebar,
  WorkProjectBrowser,
  WorkClosingNote,
} from '../sections/work';

function Work() {
  const [activeFilter, setActiveFilter] = useState('all');
  const filters = getWorkSidebarFilters();
  const groups = getProfessionalProjectsGrouped(activeFilter);
  const copy = site.workPage;

  return (
    <div className="work-page">
      <div className="work-page__inner container">
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

        <WorkClosingNote note={copy.closingNote} />
      </div>
    </div>
  );
}

export default Work;
