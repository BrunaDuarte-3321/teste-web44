/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sidebar } from '@inovacao-ui/react/src/components/Sidebar'
import { FooterContent } from '@inovacao-ui/react/src/components/Sidebar/FooterContent'
import { MainContent } from '@inovacao-ui/react/src/components/Sidebar/MainContent'
import { Logo } from '@inovacao-ui/react/src/icons/Logo'
import { SmallLogo } from '@inovacao-ui/react/src/icons/SmallLogo'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'none',
    },
    headerContent: {
      control: 'none',
    },
    mainContent: {
      control: 'none',
    },
    footerContent: {
      control: 'none',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: '#e6e0e9',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {Story()}
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const SidebarToggle: Story = (args: any) => {
  const [isOpen, setIsOpen] = useState(args.isOpen)

  return (
    <Sidebar
      {...args}
      isOpen={isOpen}
      setIsOpen={(open) => setIsOpen(open)}
      headerContent={isOpen ? <Logo /> : <SmallLogo />}
      mainContent={<MainContent isOpen={isOpen} />}
      footerContent={<FooterContent user="User" isOpen={isOpen} />}
    />
  )
}

SidebarToggle.args = {
  headerContent: <SmallLogo />,
  mainContent: <MainContent isOpen={false} />,
  footerContent: <FooterContent user="User" isOpen={false} />,
}

export const Secondary: Story = {
  args: {
    isOpen: false,
    headerContent: <SmallLogo />,
    mainContent: <MainContent isOpen={false} />,
    footerContent: <FooterContent isOpen={false} />,
  },
  name: 'Sidebar closed',
}

export const Tertiary: Story = {
  args: {
    isOpen: true,
    headerContent: <Logo />,
    mainContent: <MainContent isOpen={true} />,
    footerContent: <FooterContent user="User" isOpen={true} />,
  },
  name: 'Sidebar open',
}
