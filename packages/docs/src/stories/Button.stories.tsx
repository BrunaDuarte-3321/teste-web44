import { Button } from '@inovacao-ui/react/src/components/Button'
import { Logout } from '@inovacao-ui/react/src/icons/Logout'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
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
    bgColor: {
      description: 'Background colors',
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: ['primary', 'error', 'white'],
      },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    children: {
      description: 'Button label',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    icon: {
      description: 'Optional icon',
      control: 'none',
      table: {
        type: { summary: 'ReactElement' },
      },
    },
    iconPosition: {
      description: 'Icon position',
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
      defaultValue: 'false',
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    onClick: {
      description: 'Optional click handler',
      action: 'clicked',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    size: 'md',
    bgColor: 'primary',
    children: 'Baixar',
    disabled: false,
  },
  name: 'Download',
}

export const Secondary: Story = {
  args: {
    bgColor: 'error',
    icon: <Logout />,
    children: 'Sair',
    disabled: false,
  },
  name: 'Logout',
}

export const Tertiary: Story = {
  args: {
    size: 'lg',
    bgColor: 'primary',
    children: 'Entrar',
    disabled: false,
  },
  name: 'Login',
}

export const Quaternary: Story = {
  args: {
    size: 'sm',
    bgColor: 'primary',
    children: 'Consultar',
    disabled: false,
  },
  name: 'Consult',
}

export const Disabled: Story = {
  args: {
    size: 'md',
    bgColor: 'primary',
    children: 'Disabled',
    disabled: true,
  },
}
