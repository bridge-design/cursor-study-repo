import React from "react";
import cm from "./button.module.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Polymorphic prop to render the button as a different element */
  is?: keyof JSX.IntrinsicElements;
  /** Optional className for adding custom CSS classes to the Button element. */
  className?: string;
  /** The type of button. Can be 'button', 'submit', or 'reset'. Defaults to 'button' */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * The Button component provides a clickable button element with consistent styling.
 *
 * Key Features:
 * - Polymorphic Rendering: Can be rendered as different HTML elements using the `is` prop.
 * - Type Safety: Supports standard button types (button, submit, reset).
 * - Accessibility: Inherits all standard button accessibility features.
 *
 * [Github](https://github.com/bridge-design/super-design-system/tree/main/src/components/button)
 *
 * [Figma Design](https://www.figma.com/design/abc123xyz/Super-Design-System?node-id=1234-5678)
 *
 * [Guidelines](https://super-design-system.dev/guidelines/button)
 */
export const Button = ({ 
  is, 
  className, 
  type = 'button', 
  children,
  ...props 
}: ButtonProps) => {
  const rootClassName = `${cm.button}${className ? ` ${className}` : ''}`;
  
  const Component = (is || 'button') as keyof JSX.IntrinsicElements;
  
  return (
    <Component 
      type={is ? undefined : type} 
      className={rootClassName} 
      {...props}
    >
      {children}
    </Component>
  );
};

Button.displayName = 'Button';

