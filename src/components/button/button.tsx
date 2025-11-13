import React from "react";
import cm from "./button.module.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const composeClassName = (base: string, extra?: string) =>
  extra ? `${base} ${extra}` : base;

export const Button = ({ className, children, type = 'button', ...props }: ButtonProps) => (
  <button type={type} className={composeClassName(cm.button, className)} {...props}>
    {children}
  </button>
);

Button.displayName = 'Button';

