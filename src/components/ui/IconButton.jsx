function IconButton({
  children,
  label,
  className = '',
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={`icon-btn ${className}`.trim()}
      aria-label={label}
      title={label}
      {...props}
    >
      {children}
    </button>
  );
}

export default IconButton;
