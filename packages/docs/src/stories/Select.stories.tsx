import { SelectInput } from '@inovacao-ui/react/src/components/SelectInput'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SelectInput> = {
  component: SelectInput,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Select label',
      control: 'text',
    },
    options: {
      description: 'Select options',
    },
    checkbox: {
      description: 'Optional checkbox',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    selectAll: {
      description: 'Label select all',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Select All' },
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
type Story = StoryObj<typeof SelectInput>

export const Primary: Story = {
  args: {
    label: 'Simple Select',
    options: ['Content 1', 'Content 2', 'Content 3'],
  },
  name: 'Simple Select',
}

export const Secondary: Story = {
  args: {
    label: 'Checkbox Select',
    options: ['Content 1', 'Content 2', 'Content 3', 'Content 4'],
    checkbox: true,
    selectAll: 'Select All',
  },
  name: 'Checkbox Select',
}
