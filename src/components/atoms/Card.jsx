/**
 * Card component - Atom
 * Reusable card container with consistent styling
 */

/**
 * Card component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.hover - Enable hover effects
 * @param {Function} props.onClick - Click handler (makes card clickable)
 */
const Card = ({
  children,
  className = '',
  hover = false,
  onClick,
  ...props
}) => {
  const baseClasses = 'bg-white rounded-lg border border-gray-200 shadow-sm p-6';
  const hoverClasses = hover ? 'transition-shadow hover:shadow-md' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';
  const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`;

  if (onClick) {
    return (
      <button
        className={`${classes} text-left w-full`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
