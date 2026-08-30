/**
 * Hand-drawn sketch arrow — imperfect paths for scrapbook connectors.
 * Decorative only; always aria-hidden via component.
 */
function Arrow({ direction = 'right', className = '', ...props }) {
  const paths = {
    right: 'M3 12.2 C 8 11, 14 13, 19 12 M14.5 7.5 L20 12 L14.2 16.8',
    left: 'M21 12.2 C 16 11, 10 13, 5 12 M9.5 7.5 L4 12 L9.8 16.8',
    down: 'M12.2 3 C 11 8, 13 14, 12 19 M7.5 14.5 L12 20 L16.8 14.2',
    up: 'M12.2 21 C 11 16, 13 10, 12 5 M7.5 9.5 L12 4 L16.8 9.8',
    'down-right':
      'M5 5 C 8 9, 14 13, 19.5 18.5 M14 17.5 L20 19 L17.5 13.5',
    'down-left':
      'M19 5 C 16 9, 10 13, 4.5 18.5 M10 17.5 L4 19 L6.5 13.5',
    'up-right':
      'M5 19 C 8 15, 14 11, 19.5 5.5 M14 6.5 L20 5 L17.5 10.5',
    'up-left':
      'M19 19 C 16 15, 10 11, 4.5 5.5 M10 6.5 L4 5 L6.5 10.5',
  };

  return (
    <svg
      className={`hand-arrow hand-arrow--${direction} ${className}`.trim()}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d={paths[direction] || paths.right}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Arrow;
