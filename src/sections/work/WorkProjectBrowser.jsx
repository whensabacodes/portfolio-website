import WorkFolder from './WorkFolder';

function CompanySection({ company, projects }) {
  return (
    <section
      className="work-company"
      aria-labelledby={`work-company-${company.id}`}
    >
      <header className="work-company__header">
        <h2 className="work-company__title" id={`work-company-${company.id}`}>
          {company.label}
        </h2>
        <p className="work-company__path" aria-hidden="true">
          {company.path}
        </p>
      </header>
      <ul className="work-company__grid">
        {projects.map((project) => (
          <li key={project.id} className="work-company__item">
            <WorkFolder project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function WorkProjectBrowser({ groups }) {
  if (!groups.length) {
    return (
      <p className="work-browser__empty">
        No projects in this folder yet.
      </p>
    );
  }

  return (
    <div className="work-browser">
      {groups.map(({ company, projects }) => (
        <CompanySection
          key={company.id}
          company={company}
          projects={projects}
        />
      ))}
    </div>
  );
}

export default WorkProjectBrowser;
