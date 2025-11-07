import React from "react";
import "../../tokens";
import { Layout } from "../layout";
import cm from "./header.module.css";

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const composeClassName = (base: string, extra?: string) =>
  extra ? `${base} ${extra}` : base;

export const Header = ({ children, className, ...rest }: HeaderProps) => (
  <header className={composeClassName(cm.headerRoot, className)} {...rest}>
    <Layout className={cm.headerInner}>{children}</Layout>
  </header>
);

Header.displayName = "Header";
