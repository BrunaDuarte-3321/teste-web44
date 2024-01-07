import { Input } from '@inovacao-ui/react/src/components/Input'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    sizeInput: {
      description: 'Sizes input',
      defaultValue: 'login',
      control: {
        type: 'select',
        options: ['login', 'search'],
      },
      table: {
        defaultValue: { summary: 'login' },
      },
    },
    label: {
      description: 'Input label',
      control: 'text',
    },
    error: {
      description: 'Error label',
      control: 'text',
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
type Story = StoryObj<typeof Input>

export const Primary: Story = {
  args: {
    sizeInput: 'login',
    label: 'Input label',
  },
  name: 'Login',
}

export const Secondary: Story = {
  args: {
    sizeInput: 'search',
    label: 'Input label',
  },
  name: 'Search',
}

export const Tertiary: Story = {
  args: {
    label: 'Input label',
    error: 'Error label',
    sizeInput: 'login',
  },
  name: 'Error',
}

export const Quaternary: Story = {
  args: {
    label: 'Input label',
    sizeInput: 'login',
    password: true,
  },
  name: 'Password',
}
