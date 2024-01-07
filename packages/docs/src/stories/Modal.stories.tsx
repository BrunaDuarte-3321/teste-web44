import { Box } from '@inovacao-ui/react/src/components/Box'
import { Modal } from '@inovacao-ui/react/src/components/Modal'
import { Typography } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Button label',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      description: 'Button sizes',
      defaultValue: 'md',
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    color: {
      description: 'Button background colors',
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: ['primary', 'error', 'white'],
      },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    icon: {
      description: 'Button optional icon',
      control: 'none',
      table: {
        type: { summary: 'ReactElement' },
      },
    },
    iconPosition: {
      description: 'Button icon position',
      defaultValue: 'left',
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    disabled: {
      description: 'Button disable',
      defaultValue: 'false',
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    children: {
      description: 'Content within the modal',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
  decorators: (Story) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {Story()}
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof Modal>

export const Primary: Story = {
  args: {
    label: 'Open Modal',
    children: (
      <Box sizeBox="modal">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    ),
  },
}
