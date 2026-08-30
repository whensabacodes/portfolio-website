import { useEffect } from 'react';

/**
 * Shared lightbox for simple image sets (e.g. certificates).
 * Class names match the existing certificates modal styles to avoid visual redesign.
 */
function Lightbox({
  open,
  title,
  image,
  caption,
  onClose,
  onPrev,
  onNext,
  showNav = false,
}) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose?.();
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onPrev?.();
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        onNext?.();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose, onPrev, onNext]);

  if (!open || !image) return null;

  return (
    <div
      className="certificates__modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title || caption || 'Image preview'}
    >
      <div
        className="certificates__modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="certificates__modal-close"
          onClick={onClose}
          aria-label="Close preview"
        >
          ×
        </button>
        {showNav && (
          <>
            <button
              type="button"
              className="certificates__modal-prev"
              onClick={(e) => {
                e.stopPropagation();
                onPrev?.();
              }}
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              type="button"
              className="certificates__modal-next"
              onClick={(e) => {
                e.stopPropagation();
                onNext?.();
              }}
              aria-label="Next"
            >
              ›
            </button>
          </>
        )}
        <div className="certificates__modal-image-wrap">
          <img src={image} alt={caption || ''} />
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
