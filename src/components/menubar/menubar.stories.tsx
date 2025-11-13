import type { Meta, StoryObj } from '@storybook/react';

import { createCodeDemo, CodeDemoStoryParams } from '@/src/utils/code-demo'

import { PropsCategory } from '@/.storybook/constants'

import { 
  Menubar, 
  MenubarMenu, 
  MenubarTrigger, 
  MenubarContent, 
  MenubarItem, 
  MenubarLabel, 
  MenubarGroup 
} from '@/src/components';


const meta: Meta<typeof Menubar> = {
  title: 'Components/Menubar',
  component: Menubar,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Controls: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarItem>Save</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

export const CodeDemo: Story = {
  ...CodeDemoStoryParams,
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarItem>Save</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}
createCodeDemo({
  story: CodeDemo,
  componentName: meta?.component?.displayName,
  props: {},
})

/**
 * Basic menubar with a single menu.
 * Use cases:
 * - Application navigation
 * - Menu systems
 * - Toolbar menus
 */
export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarItem>Save</MenubarItem>
          <MenubarItem>Save As...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

/**
 * Menubar with multiple menus.
 * Use cases:
 * - Application menu bars
 * - Complex navigation systems
 * - Multi-level menu structures
 */
export const MultipleMenus: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarItem>Save</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Zoom In</MenubarItem>
          <MenubarItem>Zoom Out</MenubarItem>
          <MenubarItem>Reset Zoom</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

/**
 * Menubar with grouped items and labels.
 * Use cases:
 * - Organized menu structures
 * - Categorized menu items
 * - Sectioned menus
 */
export const WithGroups: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Options</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarLabel>File Operations</MenubarLabel>
            <MenubarItem>New File</MenubarItem>
            <MenubarItem>Open File</MenubarItem>
            <MenubarItem>Save File</MenubarItem>
          </MenubarGroup>
          <MenubarGroup>
            <MenubarLabel>Edit Operations</MenubarLabel>
            <MenubarItem>Undo</MenubarItem>
            <MenubarItem>Redo</MenubarItem>
            <MenubarItem>Find</MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

