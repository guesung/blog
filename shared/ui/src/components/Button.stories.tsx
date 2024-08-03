import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    selected: {
      control: {
        type: 'boolean',
        options: [true, false],
      },
    },
  },
};

export const Small = {
  args: {
    children: 'Small',
    size: 'small',
  },
};

export const Medium = {
  args: {
    children: 'Medium',
    size: 'medium',
  },
};

export const Large = {
  args: {
    children: 'Large',
    size: 'large',
  },
};
