import { Box } from '@inovacao-ui/react/src/components/Box'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Box> = {
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    sizeBox: {
      description: 'Box sizes',
      defaultValue: 'login',
      control: {
        type: 'select',
        options: ['login', 'search', 'table', 'modal'],
      },
      table: {
        defaultValue: { summary: 'login' },
      },
    },
    children: {
      description: 'Content inside the Box',
      control: 'text',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '25rem',
        }}
      >
        {Story()}
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Box>

export const Primary: Story = {
  args: {
    sizeBox: 'login',
    children: (
      <div>
        <p>Content inside the Box</p>
      </div>
    ),
  },
  name: 'Login',
}

export const Secondary: Story = {
  args: {
    sizeBox: 'modal',
    children: <span>Content inside the Box</span>,
  },
  name: 'Modal',
}

export const Tertiary: Story = {
  args: {
    sizeBox: 'search',
    children: <span>Content inside the Box</span>,
  },
  name: 'Search',
}

export const Quaternary: Story = {
  args: {
    sizeBox: 'table',
    children: <span>Content inside the Box</span>,
  },
  name: 'Table',
}
