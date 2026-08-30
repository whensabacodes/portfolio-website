import { useEffect, useRef, useState } from 'react';
import emailPlaceholder from '../../assets/projects/appventurez/email-placeholder.svg';

function getInitialTab(project) {
  if (!project) return 'website';
  const hasTabs =
    project.websiteImages != null || project.cmsImages != null;
  if (!hasTabs) return 'website';
  return (project.websiteImages?.length ?? 0) > 0 ? 'website' : 'cms';
}

function getImagesForTab(project, activeTab) {
  if (!project) return [];
  const hasTabs =
    project.websiteImages != null || project.cmsImages != null;
  if (!hasTabs) return project.images ?? [];

  if (activeTab === 'website') return project.websiteImages ?? [];

  return [
    ...(project.cmsImages ?? []),
    { src: emailPlaceholder, alt: 'Branded HTML email templates' },
  ].filter((s) => s.src);
}

/**
 * Project gallery modal — behavior preserved from the previous ProjectGalleryModal.
 * Keyed by project id from the parent so index resets without an effect.
 */
function Gallery({ project, onClose }) {
  const [activeTab, setActiveTab] = useState(() => getInitialTab(project));
  const [currentIndex, setCurrentIndex] = useState(0);
  const closeRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const projectId = project?.id;

  const hasTabs =
    project?.websiteImages != null || project?.cmsImages != null;
  const images = getImagesForTab(project, activeTab);
  const hasMultiple = images.length > 1;

  // When the opened project changes, remount-friendly reset via key in parent;
  // also sync tab if project identity changed without remount.
  const [trackedId, setTrackedId] = useState(projectId);
  if (projectId !== trackedId) {
    setTrackedId(projectId);
    setActiveTab(getInitialTab(project));
    setCurrentIndex(0);
  }

  useEffect(() => {
    if (!project) return;
    closeRef.current?.focus();
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!project) return;
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (!hasMultiple) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentIndex((i) => (i - 1 + images.length) % images.length);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentIndex((i) => (i + 1) % images.length);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose, hasMultiple, images.length]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const goPrev = () => {
    if (!hasMultiple) return;
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  };

  const goNext = () => {
    if (!hasMultiple) return;
    setCurrentIndex((i) => (i + 1) % images.length);
  };

  const handleFocusTrap = (e) => {
    const focusables = [
      closeRef.current,
      prevRef.current,
      nextRef.current,
    ].filter(Boolean);
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  const selectTab = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  if (!project) return null;

  const hasAnyImages = images.length > 0;

  return (
    <div
      className="project-gallery-modal__overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Project gallery: ${project.title}`}
      onKeyDown={handleFocusTrap}
    >
      <div
        className="project-gallery-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="project-gallery-modal__close"
          onClick={onClose}
          aria-label="Close gallery"
        >
          ×
        </button>

        {hasTabs && (
          <div
            className="project-gallery-modal__tabs"
            role="tablist"
            aria-label="Gallery sections"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'website'}
              aria-controls="gallery-website-panel"
              id="gallery-tab-website"
              className={`project-gallery-modal__tab ${
                activeTab === 'website'
                  ? 'project-gallery-modal__tab--active'
                  : ''
              }`}
              onClick={() => selectTab('website')}
            >
              Website
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'cms'}
              aria-controls="gallery-cms-panel"
              id="gallery-tab-cms"
              className={`project-gallery-modal__tab ${
                activeTab === 'cms' ? 'project-gallery-modal__tab--active' : ''
              }`}
              onClick={() => selectTab('cms')}
            >
              CMS
            </button>
          </div>
        )}

        {hasMultiple && (
          <button
            ref={prevRef}
            type="button"
            className="project-gallery-modal__arrow project-gallery-modal__arrow--prev"
            onClick={goPrev}
            aria-label="Previous image"
          >
            ‹
          </button>
        )}

        <div
          id={
            hasTabs
              ? activeTab === 'website'
                ? 'gallery-website-panel'
                : 'gallery-cms-panel'
              : undefined
          }
          role={hasTabs ? 'tabpanel' : undefined}
          aria-labelledby={hasTabs ? `gallery-tab-${activeTab}` : undefined}
          className="project-gallery-modal__image-wrap"
        >
          {hasAnyImages ? (
            <>
              <img
                key={`${activeTab}-${currentIndex}`}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="project-gallery-modal__image"
                loading="lazy"
              />
              <div
                className="project-gallery-modal__counter"
                aria-live="polite"
                aria-atomic="true"
              >
                {hasMultiple
                  ? `Image ${currentIndex + 1} of ${images.length}`
                  : ''}
              </div>
            </>
          ) : (
            <div className="project-gallery-modal__empty">
              {hasTabs && activeTab === 'website'
                ? 'No website screenshots yet.'
                : 'No images for this project.'}
            </div>
          )}
        </div>

        {hasMultiple && (
          <button
            ref={nextRef}
            type="button"
            className="project-gallery-modal__arrow project-gallery-modal__arrow--next"
            onClick={goNext}
            aria-label="Next image"
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
}

export default Gallery;

export function InlineGallery({
  images = [],
  onOpen,
  ariaLabel = 'Project screenshots',
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const hasMultiple = images.length > 1;

  const goPrev = (e) => {
    e?.stopPropagation?.();
    if (!hasMultiple) return;
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  };

  const goNext = (e) => {
    e?.stopPropagation?.();
    if (!hasMultiple) return;
    setCurrentIndex((i) => (i + 1) % images.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current == null || !hasMultiple) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX.current - touchEndX;
    const threshold = 50;
    if (deltaX > threshold) goNext();
    else if (deltaX < -threshold) goPrev();
    touchStartX.current = null;
  };

  return (
    <div
      className="project-card__gallery"
      role="region"
      aria-label={ariaLabel}
      onClick={() => images.length > 0 && onOpen?.()}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {images.length > 0 ? (
        <>
          <div className="project-card__gallery-inner">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="project-card__gallery-img"
              loading="lazy"
            />
          </div>
          {hasMultiple && (
            <>
              <button
                type="button"
                className="project-card__gallery-arrow project-card__gallery-arrow--prev"
                onClick={goPrev}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                type="button"
                className="project-card__gallery-arrow project-card__gallery-arrow--next"
                onClick={goNext}
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}
        </>
      ) : (
        <div className="project-card__gallery-placeholder" aria-hidden="true">
          No images
        </div>
      )}
    </div>
  );
}
