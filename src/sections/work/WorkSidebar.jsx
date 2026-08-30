/**
 * File-browser sidebar / mobile filter row for company folders.
 */
function WorkSidebar({ filters, activeFilter, onFilterChange, pathRoot }) {
  return (
    <nav className="work-sidebar" aria-label="Work folders">
      <p className="work-sidebar__path" aria-hidden="true">
        {pathRoot}
      </p>
      <ul className="work-sidebar__list">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <li key={filter.id}>
              <button
                type="button"
                className={`work-sidebar__item${isActive ? ' is-active' : ''}`}
                aria-current={isActive ? 'true' : undefined}
                onClick={() => onFilterChange(filter.id)}
              >
                <span className="work-sidebar__item-label">{filter.label}</span>
                <span className="work-sidebar__item-path" aria-hidden="true">
                  {filter.path}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default WorkSidebar;
