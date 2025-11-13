import React from "react";
import cm from "./logo.module.css";
import "../../tokens";

import PearIcon from "./pear.svg?react";


export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  /** Optional className for adding custom CSS classes to the Logo element */
  className?: string;
  /** Optional width of the logo */
  width?: number | string;
  /** Optional height of the logo */
  height?: number | string;
}

const composeClassName = (base: string, extra?: string) =>
  extra ? `${base} ${extra}` : base;

export const Logo = ({ className, width, height, ...props }: LogoProps) => {
  const style: React.CSSProperties = {
    ...(width && { width }),
    ...(height && { height }),
  };

  return (
    <div className={composeClassName(cm.logo, className)} style={style} {...props}>
      <PearIcon className={cm.logoIcon} />
    </div>
  );
};

Logo.displayName = 'Logo';

