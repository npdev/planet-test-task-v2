import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'white',
          value: '#FFFFFF',
        },
        {
          name: 'custom-black',
          value: '#03110E',
        },
        {
          name: 'custom-blue',
          value: '#C4EBF8',
        },
        {
          name: 'custom-orange',
          value: '#B14F25',
        },
        {
          name: 'custom-red',
          value: '#B11823',
        },
      ],
    },
  },
};

export default preview;
