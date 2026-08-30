import { Link } from 'react-router-dom';
import { certificates } from '../data/certificates';
import BackToHome from '../components/navigation/BackToHome';

/**
 * Compatibility route for the previous certificates archive page.
 */
function CertificatesArchive() {
  return (
    <div className="certificates certificates--page page">
      <div className="certificates__inner">
        <BackToHome />
        <h1 className="certificates__heading">All Certificates</h1>
        <p className="certificates__description">
          Full-resolution view of all certificates and achievements.
        </p>
        <div className="certificates__page-back">
          <Link to="/about" className="certificates__btn">
            Back to About
          </Link>
        </div>
        <div className="certificates__grid certificates__grid--full">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="certificates__item certificates__item--page"
            >
              <div className="certificates__thumb certificates__thumb--full">
                <img src={cert.image} alt={cert.caption} />
              </div>
              <p className="certificates__caption">{cert.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CertificatesArchive;
