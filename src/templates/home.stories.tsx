import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Layout } from '@/components';

const meta: Meta = {
  title: 'Templates/Home',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

const Template = () => (
  <>
    <Layout>
      Page will be here
    </Layout>
  </>
);

export const Default: Story = {
  render: () => <Template />,
};
