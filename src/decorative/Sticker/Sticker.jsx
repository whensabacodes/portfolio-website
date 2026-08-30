function Sticker({ children, className = '', rotation = 0, ...props }) {
  return (
    <div
      className={`sticker ${className}`.trim()}
      style={{ '--sticker-rotate': `${rotation}deg` }}
      aria-hidden="true"
      {...props}
    >
      {children}
    </div>
  );
}

export default Sticker;
