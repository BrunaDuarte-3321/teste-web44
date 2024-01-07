import { Navbar } from '@inovacao-ui/react/src/components/Navbar'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Title navbar',
      control: 'text',
    },
    type: {
      description: 'Type state',
      control: 'text',
    },
    options: {
      description: 'Options navbar',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          background: '#ffffff',
          padding: '1rem 2rem',
          display: 'flex',
        }}
      >
        {Story()}
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Navbar>

export const Primary: Story = {
  args: {
    title: 'Menu',
    type: 'open',
    options: ['content1', 'content2', 'content3'],
  },
  name: 'Open',
}

export const Secondary: Story = {
  args: {
    title: 'Menu',
    type: 'closed',
  },
  name: 'Closed',
}
