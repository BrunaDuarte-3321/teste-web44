import { Loading } from '@inovacao-ui/react/src/components/Loading'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Loading> = {
  component: Loading,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Loading>

export const Primary: Story = {
  args: {},
}
