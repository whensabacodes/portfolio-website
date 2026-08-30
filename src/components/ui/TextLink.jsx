import { Link } from 'react-router-dom';

function TextLink({ children, to, href, className = '', ...props }) {
  const classes = `text-link ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}

export default TextLink;
