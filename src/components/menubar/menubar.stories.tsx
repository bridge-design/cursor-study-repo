import type { Meta, StoryObj } from '@storybook/react';

import { createCodeDemo, CodeDemoStoryParams } from '@/src/utils/code-demo'

import { PropsCategory } from '@/.storybook/constants'

import { 
  Menubar, 
  MenubarItem
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
      <MenubarItem>New</MenubarItem>
      <MenubarItem active>Open</MenubarItem>
      <MenubarItem>Save</MenubarItem>
    </Menubar>
  ),
}

export const CodeDemo: Story = {
  ...CodeDemoStoryParams,
  render: () => (
    <Menubar>
      <MenubarItem>New</MenubarItem>
      <MenubarItem>Open</MenubarItem>
      <MenubarItem>Save</MenubarItem>
    </Menubar>
  ),
}
createCodeDemo({
  story: CodeDemo,
  componentName: meta?.component?.displayName,
  props: {},
})

/**
 * Basic menubar with items.
 * Use cases:
 * - Application navigation
 * - Menu systems
 * - Toolbar menus
 */
export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarItem>File</MenubarItem>
      <MenubarItem active>Edit</MenubarItem>
      <MenubarItem>View</MenubarItem>
      <MenubarItem>Help</MenubarItem>
    </Menubar>
  ),
}


/**
 * Transparent menubar variant with no border and transparent background.
 * Font color is inherited from parent component.
 * Use cases:
 * - Overlay navigation
 * - Dark themed interfaces
 * - Hero sections with navigation
 */
export const Transparent: Story = {
  render: () => (
    <div
      style={{
        backgroundColor: 'var(--ds-color-global-neutral-100)',
        color: '#ffffff',
        padding: '2rem',
        borderRadius: 'var(--ds-radii-sconcept-m)',
      }}
    >
      <Menubar variant="transparent">
        <MenubarItem>File</MenubarItem>
        <MenubarItem active>Edit</MenubarItem>
        <MenubarItem>View</MenubarItem>
        <MenubarItem>Help</MenubarItem>
      </Menubar>
      <p style={{ marginTop: '1rem', color: '#ffffff' }}>
        This is text in the container. The menubar inherits the white color from its parent.{' '}
        <a href="#" style={{ color: '#ffffff', textDecoration: 'underline' }}>
          This is a link
        </a>
        {' '}with white color.
      </p>
    </div>
  ),
}

