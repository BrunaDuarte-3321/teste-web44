import { IconButton } from '@inovacao-ui/react/src/components/IconButton'
import { TooltipInfo } from '@inovacao-ui/react/src/components/Tooltip'
import { Close } from '@inovacao-ui/react/src/icons/Close'
import { Settings } from '@inovacao-ui/react/src/icons/Settings'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TooltipInfo> = {
  component: TooltipInfo,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Tooltip title',
    },
    children: {
      description: 'Tooltip content',
      control: 'none',
      table: {
        type: { summary: 'ReactElement' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          background: '#DBE5DF',
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
type Story = StoryObj<typeof TooltipInfo>

export const Primary: Story = {
  args: {
    title: 'Configurations',
    children: (
      <IconButton>
        <Settings />
      </IconButton>
    ),
  },
  name: 'Example 1',
}

export const Secondary: Story = {
  args: {
    title: 'Error',
    children: (
      <IconButton colors="red">
        <Close />
      </IconButton>
    ),
  },
  name: 'Example 2',
}
