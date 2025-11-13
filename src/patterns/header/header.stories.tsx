import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Header, Logo, Avatar } from '@/src/components';
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@/src/components';
// @ts-ignore - JSON import from data directory
import menubarData from '@/data/menubar.data.json';

interface MenuItem {
  id: number;
  label: string;
}

interface Menu {
  id: number;
  label: string;
  items: MenuItem[];
}

const meta: Meta = {
  title: 'Patterns/Header',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

/**
 * Header pattern displays a complete application header with logo, navigation menu, and user avatar.
 * 
 * Use cases:
 * - Application headers
 * - Dashboard navigation
 * - Main application layouts
 * - Multi-page applications
 */
export const Default: Story = {
  render: () => (
    <Header
      left={<Logo variant="blank" />}
      middle={
        <Menubar>
          {(menubarData.menus as Menu[]).map((menu) => (
            <MenubarMenu key={menu.id}>
              <MenubarTrigger>{menu.label}</MenubarTrigger>
              <MenubarContent>
                {menu.items.map((item) => (
                  <MenubarItem key={item.id}>{item.label}</MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          ))}
        </Menubar>
      }
      right={<Avatar src="https://i.pravatar.cc/150" alt="User Avatar" size="small" />}
    />
  ),
};

