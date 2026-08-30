function HandDrawnLine({ className = '', ...props }) {
  return (
    <svg
      className={`hand-line ${className}`.trim()}
      viewBox="0 0 120 12"
      preserveAspectRatio="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2 8 C 28 2, 52 10, 78 6 S 110 4, 118 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default HandDrawnLine;
