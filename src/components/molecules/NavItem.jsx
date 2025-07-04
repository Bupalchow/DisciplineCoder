/**
 * Navigation Item component - Molecule
 * Navigation link with active state handling
 */

import { NavLink } from 'react-router-dom';

/**
 * Navigation Item component
 * @param {Object} props - Component props
 * @param {string} props.to - Navigation path
 * @param {React.ReactNode} props.icon - Icon component
 * @param {string} props.label - Navigation label
 * @param {boolean} props.mobile - Mobile navigation style
 */
const NavItem = ({
  to,
  icon: Icon,
  label,
  mobile = false,
}) => {
  const baseClasses = mobile
    ? 'flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors'
    : 'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors';

  const activeClasses = mobile
    ? 'bg-primary-100 text-primary-700'
    : 'bg-primary-100 text-primary-700';

  const inactiveClasses = mobile
    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50';

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
      }
    >
      {Icon && <Icon className="h-5 w-5 mr-3 flex-shrink-0" />}
      {label}
    </NavLink>
  );
};

export default NavItem;
