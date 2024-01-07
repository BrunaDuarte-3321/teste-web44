import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'light',
          value: '#FBFDF9',
        },
        {
          name: 'dark',
          value: '#191C1B',
        },
      ],
    },
    docs: {
      theme: themes.dark
    }
  },
};

export default preview;
