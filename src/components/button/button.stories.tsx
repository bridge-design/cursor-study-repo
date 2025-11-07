import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { createCodeDemo, CodeDemoStoryParams } from '@/utils/code-demo'

import { PropsCategory } from '../../../.storybook/constants'

import { Button } from '@/components';


const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      table: {
        category: PropsCategory.ACCESSIBILITY,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  children: "Button",
}

export const Controls: Story = {
  args: defaultArgs,
}

export const CodeDemo: Story = {
  ...CodeDemoStoryParams,
  args: defaultArgs,
}
createCodeDemo({
  story: CodeDemo,
  componentName: meta?.component?.displayName,
  props: defaultArgs,
})

/**
 * Standard button type is used for general actions.
 * Use cases:
 * - General UI actions
 * - Navigation triggers
 * - Modal actions
 */
export const Default: Story = {
  args: {
    ...defaultArgs,
    type: 'button',
  },
}

/**
 * Submit button type is used for form submissions.
 * Use cases:
 * - Form submit actions
 * - Data submission
 * - Form wizards
 */
export const Submit: Story = {
  args: {
    ...defaultArgs,
    type: 'submit',
    children: 'Submit',
  },
}

/**
 * Reset button type is used to reset form fields.
 * Use cases:
 * - Form reset actions
 * - Clearing form data
 */
export const Reset: Story = {
  args: {
    ...defaultArgs,
    type: 'reset',
    children: 'Reset',
  },
}

/**
 * Button can be rendered as a different element using the `is` prop.
 * Use cases:
 * - Links styled as buttons
 * - Custom element rendering
 * - Accessibility improvements
 */
export const Polymorphic: Story = {
  args: {
    ...defaultArgs,
    is: 'a',
    href: '#',
    children: 'Link as Button',
  },
}

