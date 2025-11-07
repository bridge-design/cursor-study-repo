import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Header, Layout } from '@/components';

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
    <Header>Header content</Header>
    <Layout>

      Page will be here
    </Layout>
  </>
);

export const Default: Story = {
  render: () => <Template />,
};
