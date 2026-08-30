function SectionLabel({ children, as = 'p', className = '', ...props }) {
  const Component = as;
  return (
    <Component className={`section-label ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}

export default SectionLabel;
