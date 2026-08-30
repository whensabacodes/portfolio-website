function Doodle({ children, className = '', ...props }) {
  return (
    <span
      className={`doodle ${className}`.trim()}
      aria-hidden="true"
      {...props}
    >
      {children}
    </span>
  );
}

export default Doodle;
