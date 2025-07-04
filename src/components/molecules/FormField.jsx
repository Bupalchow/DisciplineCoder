/**
 * Form Field component - Molecule
 * Combines Input with consistent form styling
 */

import { Input } from '../atoms';

/**
 * Form Field component
 * @param {Object} props - Component props
 * @param {string} props.name - Field name
 * @param {string} props.label - Field label
 * @param {string} props.type - Input type
 * @param {string} props.placeholder - Placeholder text
 * @param {boolean} props.required - Required field
 * @param {Object} props.validation - Validation object with error message
 * @param {Object} props.register - React Hook Form register function
 * @param {string} props.className - Additional CSS classes
 */
const FormField = ({
  name,
  label,
  type = 'text',
  placeholder,
  required = false,
  validation = {},
  register,
  errors = {},
  className = '',
  ...props
}) => {
  const error = errors[name]?.message;
  const registerProps = register ? register(name, validation) : {};

  return (
    <div className={className}>
      <Input
        label={label}
        type={type}
        placeholder={placeholder}
        required={required}
        error={error}
        {...registerProps}
        {...props}
      />
    </div>
  );
};

export default FormField;
