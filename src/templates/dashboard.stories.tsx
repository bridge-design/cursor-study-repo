import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Header, Layout, Logo, Avatar } from '@/components';
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@/components';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components';
import { Badge } from '@/components';
// @ts-ignore - JSON import from data directory
import pagesData from '../../data/list-of-pages.data.json';
// @ts-ignore - JSON import from data directory
import menubarData from '../../data/menubar.data.json';

interface Page {
  id: number;
  header: string;
  sectionType: string;
  status: string;
  target: number;
  limit: number;
  reviewer: string | null;
}

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
  title: 'Templates/Dashboard',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

const Template = () => {
  const getStatusBadge = (status: string) => {
    const statusLower = status.toLowerCase();
    if (statusLower === 'done') {
      return <Badge status="done" />;
    } else if (statusLower.includes('process')) {
      return <Badge status="in progress" />;
    }
    return <Badge status="planned" />;
  };

  return (
    <>
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
      <Layout>
        <Tabs defaultValue="pages">
          <TabsList>
            <TabsTrigger value="pages">Pages</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="pages">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Header</TableHead>
                  <TableHead>Section Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Target</TableHead>
                  <TableHead>Limit</TableHead>
                  <TableHead>Reviewer</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(pagesData.pages as Page[]).map((page) => (
                  <TableRow key={page.id}>
                    <TableCell>{page.header}</TableCell>
                    <TableCell>{page.sectionType}</TableCell>
                    <TableCell>{getStatusBadge(page.status)}</TableCell>
                    <TableCell>{page.target}</TableCell>
                    <TableCell>{page.limit}</TableCell>
                    <TableCell>{page.reviewer || 'Assign reviewer'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="settings">
            <p>Settings content will be here</p>
          </TabsContent>
        </Tabs>
      </Layout>
    </>
  );
};

export const Default: Story = {
  render: () => <Template />,
};
