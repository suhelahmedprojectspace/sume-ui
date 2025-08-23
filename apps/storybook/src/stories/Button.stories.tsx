import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '@sume/ui/components/Button';
import { Download, Heart, Star } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A versatile and accessible button component built with Radix UI Slot and CVA (Class Variance Authority). 
Supports multiple variants, sizes, loading states, and icon placement. Perfect for design systems and modern React applications.

## Features
- 🎨 **8 visual variants** - from primary actions to subtle links
- 📏 **4 size options** - including icon-only buttons  
- ⚡ **Loading states** - with built-in spinner animation
- 🔗 **Polymorphic** - render as any element with \`asChild\`
- ♿ **Accessible** - follows WCAG guidelines with proper focus management
- 🎯 **Icon support** - left, right, or icon-only configurations
- 📱 **Responsive** - full-width option for mobile layouts

## Usage Guidelines
- Use \`default\` variant for primary call-to-action buttons
- Use \`destructive\` for dangerous actions like delete/remove
- Use \`outline\` for secondary actions or in button groups
- Use \`ghost\` for tertiary actions or navigation
- Use \`link\` for text-based actions that look like links



## 🚀 Installation

\`\`\`bash
npm install @sume/ui
# or
yarn add @sume/ui
# or
pnpm add @sume/ui
\`\`\`


        `,
      },
    },
  },
  decorators: [
    (Story:any) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
          gap: '1rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: { type: 'select' },
      description: 'Visual style variant of the button',
      options: [
        'default',
        'destructive', 
        'outline',
        'ghost',
        'secondary',
        'muted',
        'link',
        'gradient',
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      description: 'Size of the button affecting height and padding',
      options: ['default', 'sm', 'lg', 'icon'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    fullWidth: { 
      control: 'boolean',
      description: 'Makes the button take the full width of its container',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: { 
      control: 'boolean',
      description: 'Shows loading spinner and disables the button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    asChild: { 
      control: 'boolean',
      description: 'Renders as a child component (e.g., Link) using Radix Slot',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: { 
      control: 'boolean',
      description: 'Disables the button and reduces opacity',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    iconLeft: { 
      control: false,
      description: 'Icon component to display on the left side',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    iconRight: { 
      control: false,
      description: 'Icon component to display on the right side',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    children: { 
      control: 'text',
      description: 'Button text content',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Called when the button is clicked',
      table: {
        type: { summary: '(event: MouseEvent) => void' },
      },
    },
  },
  args: {
    variant: 'default',
    size: 'default',
    fullWidth: false,
    loading: false,
    asChild: false,
    disabled: false,
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Stories
export const Primary: Story = {
  args: {
    variant: 'default',
    children: 'Primary Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'The primary button used for main call-to-action elements. Features the brand primary color with hover and focus states.',
      },
    },
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete Account',
  },
  parameters: {
    docs: {
      description: {
        story: 'Used for dangerous or irreversible actions. Always consider adding a confirmation dialog for destructive actions.',
      },
    },
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Secondary Action',
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary buttons that work well alongside primary buttons or in button groups.',
      },
    },
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Subtle Action',
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal styling for tertiary actions or when you need a button that blends into the background.',
      },
    },
  },
};

// Size Variations
export const SmallButton: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact button for tight spaces or when multiple buttons are grouped together.',
      },
    },
  },
};

export const LargeButton: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Larger button for emphasis or when used on mobile interfaces.',
      },
    },
  },
};

// Special States
export const FullWidthButton: Story = {
  args: {
    variant: 'outline',
    fullWidth: true,
    children: 'Full Width Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button that spans the full width of its container. Useful for mobile layouts or form submissions.',
      },
    },
  },
};

export const LoadingButton: Story = {
  args: {
    loading: true,
    children: 'Processing...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows a loading spinner and disables interaction. The button remains accessible to screen readers.',
      },
    },
  },
};

export const DisabledButton: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state with reduced opacity. Consider providing feedback about why the button is disabled.',
      },
    },
  },
};

// Icon Examples
export const ButtonWithLeftIcon: Story = {
  args: {
    variant: 'secondary',
    iconLeft: <Download size={16} />,
    children: 'Download File',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with an icon on the left side. Icons should be 16px for optimal alignment.',
      },
    },
  },
};

export const ButtonWithRightIcon: Story = {
  args: {
    variant: 'outline',
    iconRight: <Star size={16} />,
    children: 'Add to Favorites',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with an icon on the right side. Useful for actions that have a directional component.',
      },
    },
  },
};

export const IconOnlyButton: Story = {
  args: {
    size: 'icon',
    iconLeft: <Heart size={16} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon-only button for space-constrained interfaces. Always include an aria-label for accessibility.',
      },
    },
  },
};

// Special Variants
export const GradientButton: Story = {
  args: {
    variant: 'gradient',
    children: 'Gradient Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Eye-catching gradient button for special promotions or featured actions.',
      },
    },
  },
};

export const LinkStyleButton: Story = {
  args: {
    variant: 'link',
    children: 'Link Style Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styled like a link but with button behavior. Useful for secondary actions in text content.',
      },
    },
  },
};

// Complex Examples
export const ButtonGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Button variant="default">Save</Button>
      <Button variant="outline">Cancel</Button>
      <Button variant="ghost">More Options</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of how buttons work together in a group with different variants.',
      },
    },
  },
};

export const ResponsiveExample: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '400px' }}>
      <Button variant="default" fullWidth>
        Mobile-First Button
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Full-width button optimized for mobile interfaces and forms.',
      },
    },
  },
};
