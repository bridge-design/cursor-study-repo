import React from "react";
import { Menubar as MenubarPrimitive } from "radix-ui";
import cm from "./menubar.module.css";

export interface MenubarProps extends MenubarPrimitive.MenubarProps {
  /** Optional className for adding custom CSS classes to the Menubar element */
  className?: string;
  /** Menubar content */
  children: React.ReactNode;
}

export interface MenubarMenuProps extends MenubarPrimitive.MenubarMenuProps {
  /** Optional className for adding custom CSS classes */
  className?: string;
  /** Menu content */
  children: React.ReactNode;
}

export interface MenubarTriggerProps extends MenubarPrimitive.MenubarTriggerProps {
  /** Optional className for adding custom CSS classes */
  className?: string;
  /** Trigger content */
  children: React.ReactNode;
}

export interface MenubarContentProps extends MenubarPrimitive.MenubarContentProps {
  /** Optional className for adding custom CSS classes */
  className?: string;
  /** Content */
  children: React.ReactNode;
}

export interface MenubarItemProps extends MenubarPrimitive.MenubarItemProps {
  /** Optional className for adding custom CSS classes */
  className?: string;
  /** Item content */
  children: React.ReactNode;
}

export interface MenubarLabelProps extends MenubarPrimitive.MenubarLabelProps {
  /** Optional className for adding custom CSS classes */
  className?: string;
  /** Label content */
  children: React.ReactNode;
}

export interface MenubarGroupProps extends MenubarPrimitive.MenubarGroupProps {
  /** Optional className for adding custom CSS classes */
  className?: string;
  /** Group content */
  children: React.ReactNode;
}

const composeClassName = (base: string, extra?: string) =>
  extra ? `${base} ${extra}` : base;

export const Menubar = ({ className, children, ...props }: MenubarProps) => (
  <MenubarPrimitive.Root className={composeClassName(cm.menubar, className)} {...props}>
    {children}
  </MenubarPrimitive.Root>
);

Menubar.displayName = 'Menubar';

export const MenubarMenu = ({ className, children, ...props }: MenubarMenuProps) => (
  <MenubarPrimitive.Menu {...props}>
    {children}
  </MenubarPrimitive.Menu>
);

MenubarMenu.displayName = 'MenubarMenu';

export const MenubarTrigger = ({ className, children, ...props }: MenubarTriggerProps) => (
  <MenubarPrimitive.Trigger className={composeClassName(cm.menubarTrigger, className)} {...props}>
    {children}
  </MenubarPrimitive.Trigger>
);

MenubarTrigger.displayName = 'MenubarTrigger';

export const MenubarContent = ({ className, children, ...props }: MenubarContentProps) => (
  <MenubarPrimitive.Content className={composeClassName(cm.menubarContent, className)} {...props}>
    {children}
  </MenubarPrimitive.Content>
);

MenubarContent.displayName = 'MenubarContent';

export const MenubarItem = ({ className, children, ...props }: MenubarItemProps) => (
  <MenubarPrimitive.Item className={composeClassName(cm.menubarItem, className)} {...props}>
    {children}
  </MenubarPrimitive.Item>
);

MenubarItem.displayName = 'MenubarItem';

export const MenubarLabel = ({ className, children, ...props }: MenubarLabelProps) => (
  <MenubarPrimitive.Label className={composeClassName(cm.menubarLabel, className)} {...props}>
    {children}
  </MenubarPrimitive.Label>
);

MenubarLabel.displayName = 'MenubarLabel';

export const MenubarGroup = ({ className, children, ...props }: MenubarGroupProps) => (
  <MenubarPrimitive.Group className={composeClassName(cm.menubarGroup, className)} {...props}>
    {children}
  </MenubarPrimitive.Group>
);

MenubarGroup.displayName = 'MenubarGroup';

