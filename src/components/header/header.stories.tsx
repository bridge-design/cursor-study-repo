import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Header } from '@/components';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;


export const Default: Story = {
  render: () => (
    <Header>
        Header content
    </Header>
  ),
};
