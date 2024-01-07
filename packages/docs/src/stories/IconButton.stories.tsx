import { IconButton } from '@inovacao-ui/react/src/components/IconButton'
import { Meta, StoryObj } from '@storybook/react'
import { Logout } from '@inovacao-ui/react/src/icons/Logout'
import { Settings } from '@inovacao-ui/react/src/icons/Settings'
import { FileDownload } from '@inovacao-ui/react/src/icons/FileDownload'
import { Refresh } from '@inovacao-ui/react/src/icons/Refresh'
import { Check } from '@inovacao-ui/react/src/icons/Check'
import { Close } from '@inovacao-ui/react/src/icons/Close'

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Size button',
      defaultValue: 'sm',
      control: { type: 'select', option: ['sm'] },
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
    children: {
      description: 'Children Icon',
      control: 'none',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    colors: {
      description: 'Color icon',
      defaultValue: 'black',
      control: { type: 'select', option: ['white', 'black', 'red', 'green'] },
      table: {
        defaultValue: { summary: 'black' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          background: '#e6e0e9',
          padding: '1rem',
          display: 'flex',
        }}
      >
        {Story()}
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Primary: Story = {
  args: {
    colors: 'red',
    children: <Logout />,
  },
  name: 'Logout Button',
}

export const Secondary: Story = {
  args: {
    colors: 'black',
    children: <Settings />,
  },
  name: 'Settings Button',
}

export const Tertiary: Story = {
  args: {
    colors: 'black',
    children: <FileDownload />,
  },
  name: 'Download Button',
}

export const Quaternary: Story = {
  args: {
    colors: 'black',
    children: <Refresh />,
  },
  name: 'Refresh Button',
}

export const Quinary: Story = {
  args: {
    colors: 'green',
    children: <Check />,
  },
  name: 'Check Button',
}

export const Senary: Story = {
  args: {
    colors: 'red',
    children: <Close />,
  },
  name: 'Close Button',
}
