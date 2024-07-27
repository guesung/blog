import Button from './Button';

export default {
  title: 'Button1',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    selected: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    children: 'Button',
  },
};
