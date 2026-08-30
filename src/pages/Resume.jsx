import { site } from '../data/site';
import BackToHome from '../components/navigation/BackToHome';

function Resume() {
  return (
    <div className="page">
      <div className="page__inner">
        <BackToHome />
        <h1 className="page__heading">Resume</h1>
        <p className="page__lede">
          Downloadable résumé will live here. No PDF is in the repository yet —
          this page is a structural placeholder for Phase 1.
        </p>
        <p className="page__note">
          {site.professionalTitle}
          {site.availability?.statusLabel
            ? ` · ${site.availability.statusLabel}`
            : ''}
        </p>
      </div>
    </div>
  );
}

export default Resume;
