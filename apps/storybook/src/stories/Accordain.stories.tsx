import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import React, { useState } from 'react';
import { 
  ChevronRight,
  Plus,
  Minus,
  HelpCircle,
  Settings,
  User,
  Shield,
  CreditCard,
  Bell,
  Globe,
  Lock,
  FileText,
  Star,

  
} from 'lucide-react';

import { Accordion } from '@sume/ui/components/Accordion';



type AccordionProps = React.ComponentProps<typeof Accordion>;

const meta: Meta<AccordionProps> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `


**Professional, accessible accordion component built with Framer Motion for smooth animations and comprehensive keyboard navigation.**

The Accordion component provides a space-efficient way to present collapsible content sections with advanced features like multiple expansion modes, keyboard navigation, and customizable variants.

## 🎯 When to Use Accordion

### ✅ Perfect Use Cases
- **FAQ sections**: Frequently asked questions with expandable answers
- **Settings panels**: Organized configuration options by category
- **Content organization**: Long-form content broken into digestible sections
- **Navigation menus**: Hierarchical navigation with collapsible sub-sections
- **Form sections**: Multi-step forms with grouped fields
- **Documentation**: API docs, guides with expandable code examples

### ❌ Avoid Using When
- Content is short enough to display all at once
- Users need to compare information across sections simultaneously
- Critical information that should always be visible
- Navigation where all options should be immediately accessible

## ✨ Key Features

### Core Functionality
- **Single/Multiple Mode**: Control whether multiple panels can be open simultaneously
- **Smooth Animations**: Hardware-accelerated transitions with Framer Motion
- **Keyboard Navigation**: Full keyboard accessibility with arrow keys, Home, End
- **Default States**: Pre-configure which panels are open initially
- **Custom Icons**: Replace default chevrons with custom icons
- **Expand/Collapse All**: Bulk controls for multiple mode

### Advanced Features
- **Visual Variants**: Three distinct styling approaches (default, minimal, cards)
- **Accessibility First**: WCAG 2.1 AA compliant with proper ARIA attributes
- **Dark Mode Support**: Built-in dark mode styling
- **Animation Control**: Optional content animation with staggered effects
- **Flexible Positioning**: Chevron icons on left or right
- **Event Handling**: Custom callbacks for expand/collapse events

## 🎨 Visual Variants

### Default Variant
- **Appearance**: Traditional accordion with borders and background fills
- **Use Case**: Standard content organization, FAQ sections, general purpose
- **Best For**: Most common use cases requiring clear section boundaries

### Minimal Variant  
- **Appearance**: Clean, borderless design with subtle dividers
- **Use Case**: Modern interfaces, content-focused designs
- **Best For**: When content should feel integrated and seamless

### Cards Variant
- **Appearance**: Each section as an individual card with shadows
- **Use Case**: Dashboard widgets, feature showcases, premium interfaces
- **Best For**: When each section represents a distinct entity or feature

## ♿ Accessibility Features

### WCAG 2.1 AA Compliance
- **Keyboard Navigation**: Full keyboard support with arrow keys, Enter, Space
- **Screen Readers**: Proper ARIA roles, states, and properties
- **Focus Management**: Clear focus indicators and logical tab order
- **Semantic HTML**: Uses proper heading structure (h3) for triggers
- **Touch Targets**: Minimum 44px touch target size for mobile

### Advanced Keyboard Shortcuts
- **Arrow Keys**: Navigate between accordion headers
- **Enter/Space**: Toggle accordion panels
- **Home/End**: Jump to first/last accordion header
- **Ctrl+A**: Expand all panels (multiple mode only)
- **Escape**: Collapse all panels

## 🚀 Performance Features

### Optimization Strategies
- **Efficient Animations**: Hardware-accelerated transforms for 60fps
- **Conditional Rendering**: Content only rendered when expanded
- **Memoized Components**: Prevents unnecessary re-renders
- **Gesture Optimization**: Touch gestures optimized for mobile
- **Bundle Size**: ~12KB gzipped including Framer Motion

### Animation Performance
- **CSS Transforms**: Height animations using auto calculations
- **Staggered Effects**: Content fades in after panel opens
- **Motion Preferences**: Respects user's reduced motion settings
- **Will-Change**: Optimized for GPU acceleration

## 📚 Implementation Examples

### Basic FAQ Accordion
\`\`\`tsx
import { Accordion } from '@astra/ui/components/Accordion';

function FAQSection() {
  return (
    <Accordion className="max-w-2xl">
      <Accordion.Item>
        <Accordion.Trigger>
          What is your return policy?
        </Accordion.Trigger>
        <Accordion.Content>
          We offer a 30-day return policy for all unused items in original packaging.
          Return shipping is free for defective items.
        </Accordion.Content>
      </Accordion.Item>
      
      <Accordion.Item>
        <Accordion.Trigger>
          How long does shipping take?
        </Accordion.Trigger>
        <Accordion.Content>
          Standard shipping takes 3-5 business days. Express shipping is available
          for 1-2 business days at an additional cost.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
\`\`\`

### Multiple Mode with Controls
\`\`\`tsx
function SettingsAccordion() {
  return (
    <Accordion 
      multiple={true}
      showControls={true}
      variant="cards"
      defaultOpenIndexes={[0]}
    >
      <Accordion.Item>
        <Accordion.Trigger icon={<User size={20} />}>
          Account Settings
        </Accordion.Trigger>
        <Accordion.Content>
          <div className="space-y-4">
            <div>
              <label>Display Name</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label>Email Address</label>
              <input type="email" className="w-full p-2 border rounded" />
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Item>
      
      <Accordion.Item>
        <Accordion.Trigger icon={<Shield size={20} />}>
          Privacy & Security
        </Accordion.Trigger>
        <Accordion.Content>
          <div className="space-y-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Two-factor authentication
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Login notifications
            </label>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
\`\`\`

### Custom Styling with Minimal Variant
\`\`\`tsx
function DocumentationAccordion() {
  return (
    <Accordion 
      variant="minimal"
      multiple={true}
      className="max-w-4xl"
    >
      <Accordion.Item>
        <Accordion.Trigger 
          chevronPosition="left"
          icon={<FileText size={18} />}
        >
          Getting Started
        </Accordion.Trigger>
        <Accordion.Content animateContent={true}>
          <div className="prose max-w-none">
            <p>Welcome to our API documentation. This guide will help you get started
            with integrating our services into your application.</p>
            
            <h4>Quick Start</h4>
            <pre className="bg-gray-100 p-4 rounded">
              npm install @company/sdk
            </pre>
          </div>
        </Accordion.Content>
      </Accordion.Item>
      
      <Accordion.Item>
        <Accordion.Trigger 
          chevronPosition="left"
          icon={<Settings size={18} />}
        >
          API Configuration
        </Accordion.Trigger>
        <Accordion.Content animateContent={true}>
          <div className="space-y-4">
            <h4>Authentication</h4>
            <p>All API requests require authentication using API keys.</p>
            
            <h4>Base URL</h4>
            <code>https://api.company.com/v1</code>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
\`\`\`

### Advanced Form Integration
\`\`\`tsx
import { useForm } from 'react-hook-form';

function MultiStepForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [openSections, setOpenSections] = useState([0]);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Accordion 
        variant="cards"
        multiple={false}
        defaultOpenIndexes={}
        className="max-w-2xl"
      >
        <Accordion.Item>
          <Accordion.Trigger>
            Personal Information
            {errors.firstName && <XCircle className="w-4 h-4 text-red-500 ml-2" />}
          </Accordion.Trigger>
          <Accordion.Content>
            <div className="grid grid-cols-2 gap-4">
              <input 
                {...register('firstName', { required: true })}
                placeholder="First Name"
                className="p-3 border rounded-lg"
              />
              <input 
                {...register('lastName', { required: true })}
                placeholder="Last Name"
                className="p-3 border rounded-lg"
              />
            </div>
          </Accordion.Content>
        </Accordion.Item>
        
        <Accordion.Item>
          <Accordion.Trigger>
            Contact Details
          </Accordion.Trigger>
          <Accordion.Content>
            <div className="space-y-4">
              <input 
                {...register('email', { required: true })}
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-lg"
              />
              <input 
                {...register('phone')}
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-lg"
              />
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
      
      <button type="submit" className="mt-6 w-full p-3 bg-blue-600 text-white rounded-lg">
        Submit Form
      </button>
    </form>
  );
}
\`\`\`

### Dynamic Content with State Management
\`\`\`tsx
function DynamicAccordion() {
  const [sections, setSections] = useState([
    { id: 1, title: 'Section 1', content: 'Content 1', count: 5 },
    { id: 2, title: 'Section 2', content: 'Content 2', count: 12 },
    { id: 3, title: 'Section 3', content: 'Content 3', count: 3 }
  ]);
  
  const addSection = () => {
    setSections(prev => [...prev, {
      id: Date.now(),
      title: \`Section \${prev.length + 1}\`,
      content: \`Dynamic content \${prev.length + 1}\`,
      count: Math.floor(Math.random() * 20)
    }]);
  };
  
  return (
    <div className="space-y-4">
      <button 
        onClick={addSection}
        className="px-4 py-2 bg-green-600 text-white rounded-lg"
      >
        Add Section
      </button>
      
      <Accordion variant="cards" multiple={true}>
        {sections.map((section, index) => (
          <Accordion.Item key={section.id}>
            <Accordion.Trigger>
              <span className="flex items-center justify-between w-full">
                <span>{section.title}</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                  {section.count}
                </span>
              </span>
            </Accordion.Trigger>
            <Accordion.Content>
              <p>{section.content}</p>
              <button 
                onClick={() => setSections(prev => prev.filter(s => s.id !== section.id))}
                className="mt-2 text-red-600 hover:text-red-800"
              >
                Remove Section
              </button>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}
\`\`\`

## 🧪 Testing Strategies

### Unit Testing
\`\`\`typescript
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Accordion } from './Accordion';

describe('Accordion Component', () => {
  const sampleContent = (
    <Accordion>
      <Accordion.Item>
        <Accordion.Trigger>Section 1</Accordion.Trigger>
        <Accordion.Content>Content 1</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>Section 2</Accordion.Trigger>
        <Accordion.Content>Content 2</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
  
  it('should render all triggers', () => {
    render(sampleContent);
    expect(screen.getByText('Section 1')).toBeInTheDocument();
    expect(screen.getByText('Section 2')).toBeInTheDocument();
  });
  
  it('should expand content on trigger click', async () => {
    render(sampleContent);
    const trigger = screen.getByText('Section 1');
    
    fireEvent.click(trigger);
    
    await waitFor(() => {
      expect(screen.getByText('Content 1')).toBeInTheDocument();
    });
  });
  
  it('should handle keyboard navigation', async () => {
    const user = userEvent.setup();
    render(sampleContent);
    
    const firstTrigger = screen.getByText('Section 1');
    firstTrigger.focus();
    
    await user.keyboard('{ArrowDown}');
    expect(screen.getByText('Section 2')).toHaveFocus();
    
    await user.keyboard('{Enter}');
    await waitFor(() => {
      expect(screen.getByText('Content 2')).toBeInTheDocument();
    });
  });
  
  it('should be accessible', async () => {
    const { container } = render(sampleContent);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  
  it('should handle multiple mode correctly', () => {
    render(
      <Accordion multiple={true}>
        <Accordion.Item>
          <Accordion.Trigger>Item 1</Accordion.Trigger>
          <Accordion.Content>Content 1</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Trigger>Item 2</Accordion.Trigger>
          <Accordion.Content>Content 2</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );
    
    // Both should be expandable simultaneously
    fireEvent.click(screen.getByText('Item 1'));
    fireEvent.click(screen.getByText('Item 2'));
    
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });
});
\`\`\`

### Integration Testing
\`\`\`typescript
describe('Accordion Integration', () => {
  it('should work with form libraries', () => {
    const onSubmit = jest.fn();
    
    render(
      <form onSubmit={onSubmit}>
        <Accordion>
          <Accordion.Item>
            <Accordion.Trigger>Form Section</Accordion.Trigger>
            <Accordion.Content>
              <input name="test" data-testid="test-input" />
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
        <button type="submit">Submit</button>
      </form>
    );
    
    fireEvent.click(screen.getByText('Form Section'));
    fireEvent.change(screen.getByTestId('test-input'), { target: { value: 'test' } });
    fireEvent.click(screen.getByText('Submit'));
    
    expect(onSubmit).toHaveBeenCalled();
  });
});
\`\`\`

## 🎛️ Advanced Configuration

### Custom Animation Settings
\`\`\`typescript
const customAccordionVariants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.4, delay: 0.1 }
    }
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.2 }
    }
  }
};
\`\`\`

### Theme Customization
\`\`\`css
:root {
  --accordion-border-color: #e5e7eb;
  --accordion-bg-color: #ffffff;
  --accordion-hover-color: #f9fafb;
  --accordion-text-color: #111827;
  --accordion-accent-color: #6366f1;
}

.dark {
  --accordion-border-color: #374151;
  --accordion-bg-color: #111827;
  --accordion-hover-color: #1f2937;
  --accordion-text-color: #f9fafb;
  --accordion-accent-color: #818cf8;
}
\`\`\`
        `,
      },
    },
    viewport: {
      defaultViewport: 'responsive',
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'gray', value: '#f8fafc' },
        { name: 'dark', value: '#1e293b' },
      ],
    },
  },
  argTypes: {
    children: {
      control: false,
      description: `**Accordion content - typically Accordion.Item components**

Each child should contain an Accordion.Item with nested Trigger and Content components.

\`\`\`tsx
<Accordion>
  <Accordion.Item>
    <Accordion.Trigger>Question</Accordion.Trigger>
    <Accordion.Content>Answer</Accordion.Content>
  </Accordion.Item>
</Accordion>
\`\`\``,
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    multiple: {
      control: 'boolean',
      description: `**Enable multiple panels to be open simultaneously**

- **true**: Multiple panels can be expanded at the same time
- **false**: Only one panel can be expanded at a time (accordion behavior)

\`\`\`tsx
<Accordion multiple={true}>
  {/* Multiple sections can be open */}
</Accordion>
\`\`\`

**Use Cases:**
- **Single mode**: FAQ sections, navigation menus
- **Multiple mode**: Settings panels, content organization`,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    defaultOpenIndexes: {
      control: 'object',
      description: `**Array of panel indexes that should be open by default**

Zero-indexed array specifying which panels start in an expanded state.

\`\`\`tsx
<Accordion defaultOpenIndexes={[0, 2]}>
  {/* First and third panels will be open initially */}
</Accordion>
\`\`\`

**Examples:**
- \`[]\` - All panels closed
- \`[0]\` - First panel open
- \`[0, 1, 2]\` - First three panels open`,
      table: {
        type: { summary: 'number[]' },
        defaultValue: { summary: '[]' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'minimal', 'cards'],
      description: `**Visual styling variant**

### Default Variant
- **Appearance**: Traditional accordion with borders and backgrounds
- **Best For**: Standard FAQ sections, general-purpose content organization
- **Features**: Clear section boundaries, hover states, focus indicators

### Minimal Variant  
- **Appearance**: Clean, borderless design with subtle dividers
- **Best For**: Modern interfaces, content-focused designs, documentation
- **Features**: Seamless integration, minimal visual weight, typography focus

### Cards Variant
- **Appearance**: Each section as individual cards with shadows
- **Best For**: Dashboard widgets, feature showcases, premium interfaces
- **Features**: Distinct visual separation, elevated appearance, hover effects

\`\`\`tsx
<Accordion variant="cards">
  {/* Each section appears as a card */}
</Accordion>
\`\`\``,
      table: {
        type: { summary: "'default' | 'minimal' | 'cards'" },
        defaultValue: { summary: "'default'" },
      },
    },
    showControls: {
      control: 'boolean',
      description: `**Show expand/collapse all buttons (multiple mode only)**

Displays "Expand All" and "Collapse All" buttons above the accordion when multiple mode is enabled.

\`\`\`tsx
<Accordion multiple={true} showControls={true}>
  {/* Shows control buttons */}
</Accordion>
\`\`\`

**Features:**
- Only appears when \`multiple={true}\`
- Keyboard shortcut: Ctrl+A to expand all
- Accessible button controls with proper focus management`,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the accordion container',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<AccordionProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for demos
const faqData = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all unused items in their original packaging. Return shipping is free for defective items, and we'll provide a prepaid shipping label. For other returns, standard shipping costs apply."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 3-5 business days within the continental US. Express shipping (1-2 business days) and overnight shipping are available for an additional cost. International shipping typically takes 7-14 business days."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 50 countries worldwide. International shipping costs vary by destination and package weight. Customers are responsible for any customs fees or import duties."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email. You can track your package on our website or directly with the shipping carrier. Orders typically ship within 1-2 business days."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All payments are processed securely through encrypted connections."
  }
];

const settingsData = [
  {
    icon: <User size={20} />,
    title: "Account Settings",
    content: (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Display Name</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" defaultValue="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded-lg" defaultValue="john@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
          <textarea className="w-full p-2 border border-gray-300 rounded-lg h-20" placeholder="Tell us about yourself..." />
        </div>
      </div>
    )
  },
  {
    icon: <Shield size={20} />,
    title: "Privacy & Security",
    content: (
      <div className="space-y-4">
        <label className="flex items-center gap-3">
          <input type="checkbox" className="rounded" defaultChecked />
          <span>Enable two-factor authentication</span>
        </label>
        <label className="flex items-center gap-3">
          <input type="checkbox" className="rounded" />
          <span>Receive login notifications</span>
        </label>
        <label className="flex items-center gap-3">
          <input type="checkbox" className="rounded" defaultChecked />
          <span>Make profile private</span>
        </label>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Session Timeout</label>
          <select className="w-full p-2 border border-gray-300 rounded-lg">
            <option>15 minutes</option>
            <option>30 minutes</option>
            <option>1 hour</option>
            <option>4 hours</option>
          </select>
        </div>
      </div>
    )
  },
  {
    icon: <Bell size={20} />,
    title: "Notifications",
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Email Notifications</h4>
          <div className="space-y-2">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="rounded" defaultChecked />
              <span>Product updates</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="rounded" />
              <span>Marketing emails</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="rounded" defaultChecked />
              <span>Security alerts</span>
            </label>
          </div>
        </div>
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Push Notifications</h4>
          <div className="space-y-2">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="rounded" defaultChecked />
              <span>Order updates</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="rounded" />
              <span>Promotional offers</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
];

// =================== STORY: BASIC IMPLEMENTATION ===================
export const BasicImplementation: Story = {
  name: '🚀 Basic Implementation',
  parameters: {
    docs: {
      description: {
        story: `
### Quick Start Example

Simple accordion for FAQ sections with single-expand behavior.

**Code:**
\`\`\`tsx
<Accordion>
  <Accordion.Item>
    <Accordion.Trigger>
      What is your return policy?
    </Accordion.Trigger>
    <Accordion.Content>
      We offer a 30-day return policy for all unused items...
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
\`\`\`

**Features:**
- Single-expand mode (only one panel open at a time)
- Smooth animations with Framer Motion
- Full keyboard accessibility
- Default variant styling
        `,
      },
    },
  },
  args: {
    multiple: false,
    variant: 'default',
    showControls: false,
    className: 'max-w-2xl',
  },
  render: (args:AccordionProps) => (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-600">Find answers to common questions about our service</p>
      </div>
      
      <Accordion {...args}>
        {faqData.map((item, index) => (
          <Accordion.Item key={index}>
            <Accordion.Trigger>
              {item.question}
            </Accordion.Trigger>
            <Accordion.Content>
              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">Try These Interactions:</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Click any question to expand the answer</li>
          <li>• Use arrow keys to navigate between questions</li>
          <li>• Press Enter or Space to toggle sections</li>
          <li>• Only one section can be open at a time</li>
        </ul>
      </div>
    </div>
  ),
};

// =================== STORY: VISUAL VARIANTS ===================
export const VisualVariants: Story = {
  name: '🎨 Visual Variants',
  parameters: {
    docs: {
      description: {
        story: `
### Three Distinct Visual Styles

Choose the variant that best matches your design system and use case.

**Default Variant:**
- Traditional accordion with clear borders
- Best for standard FAQ sections and general content

**Minimal Variant:**
- Clean, borderless design with subtle dividers
- Perfect for modern, content-focused interfaces

**Cards Variant:**
- Individual cards with shadows and spacing
- Ideal for dashboards and premium interfaces

**Implementation:**
\`\`\`tsx
<Accordion variant="default">   {/* Traditional */}
<Accordion variant="minimal">   {/* Modern */}
<Accordion variant="cards">     {/* Premium */}
\`\`\`
        `,
      },
    },
  },
  render: () => (
    <div className="space-y-16 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Visual Variants</h1>
        <p className="text-gray-600">Three distinct styles for different design needs</p>
      </div>

      {/* Default Variant */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-900">Default Variant</h2>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">Traditional</span>
        </div>
        
        <Accordion variant="default" className="max-w-2xl">
          {faqData.slice(0, 3).map((item, index) => (
            <Accordion.Item key={index}>
              <Accordion.Trigger>
                {item.question}
              </Accordion.Trigger>
              <Accordion.Content>
                <p className="text-gray-700">{item.answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>

        <div className="bg-blue-50 p-4 rounded-lg max-w-2xl">
          <h3 className="font-medium text-blue-900 mb-2">Best For:</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Standard FAQ sections and help documentation</li>
            <li>• Traditional corporate interfaces</li>
            <li>• Clear section boundaries needed</li>
            <li>• Familiar accordion behavior expected</li>
          </ul>
        </div>
      </section>

      {/* Minimal Variant */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-900">Minimal Variant</h2>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Modern</span>
        </div>
        
        <Accordion variant="minimal" className="max-w-2xl">
          {[
            {
              question: "What makes this minimal?",
              answer: "Clean typography, subtle dividers, and seamless content integration create a modern, distraction-free experience."
            },
            {
              question: "When should I use minimal design?",
              answer: "Perfect for content-focused interfaces, documentation, and when you want the accordion to feel integrated rather than prominent."
            },
            {
              question: "How does it differ from default?",
              answer: "Removes borders, backgrounds, and heavy visual elements in favor of typography and spacing to create hierarchy."
            }
          ].map((item, index) => (
            <Accordion.Item key={index}>
              <Accordion.Trigger>
                {item.question}
              </Accordion.Trigger>
              <Accordion.Content>
                <p className="text-gray-700">{item.answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>

        <div className="bg-green-50 p-4 rounded-lg max-w-2xl">
          <h3 className="font-medium text-green-900 mb-2">Best For:</h3>
          <ul className="text-sm text-green-800 space-y-1">
            <li>• Modern, content-focused interfaces</li>
            <li>• Documentation and knowledge bases</li>
            <li>• When accordion should feel integrated</li>
            <li>• Typography-driven designs</li>
          </ul>
        </div>
      </section>

      {/* Cards Variant */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-900">Cards Variant</h2>
          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">Premium</span>
        </div>
        
        <Accordion variant="cards" className="max-w-2xl">
          {[
            {
              question: "What defines the cards variant?",
              answer: "Individual cards with shadows, spacing, and elevated appearance create a premium, dashboard-like experience."
            },
            {
              question: "When is cards variant appropriate?",
              answer: "Ideal for dashboards, settings panels, feature showcases, and when each section represents a distinct entity."
            },
            {
              question: "What visual features does it include?",
              answer: "Shadows, rounded corners, spacing between sections, and subtle hover effects create visual separation and hierarchy."
            }
          ].map((item, index) => (
            <Accordion.Item key={index}>
              <Accordion.Trigger>
                {item.question}
              </Accordion.Trigger>
              <Accordion.Content>
                <p className="text-gray-700">{item.answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>

        <div className="bg-purple-50 p-4 rounded-lg max-w-2xl">
          <h3 className="font-medium text-purple-900 mb-2">Best For:</h3>
          <ul className="text-sm text-purple-800 space-y-1">
            <li>• Dashboard widgets and admin panels</li>
            <li>• Premium and enterprise interfaces</li>
            <li>• Feature showcases and product tours</li>
            <li>• When sections represent distinct entities</li>
          </ul>
        </div>
      </section>

      {/* Variant Comparison */}
      <section className="bg-gray-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Variant Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold">Feature</th>
                <th className="text-left py-3 px-4 font-semibold text-blue-600">Default</th>
                <th className="text-left py-3 px-4 font-semibold text-green-600">Minimal</th>
                <th className="text-left py-3 px-4 font-semibold text-purple-600">Cards</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Visual Weight</td>
                <td className="py-3 px-4">Medium</td>
                <td className="py-3 px-4">Light</td>
                <td className="py-3 px-4">Heavy</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Borders</td>
                <td className="py-3 px-4">Full borders</td>
                <td className="py-3 px-4">Minimal dividers</td>
                <td className="py-3 px-4">Card borders</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Shadows</td>
                <td className="py-3 px-4">None</td>
                <td className="py-3 px-4">None</td>
                <td className="py-3 px-4">Drop shadows</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Spacing</td>
                <td className="py-3 px-4">Connected</td>
                <td className="py-3 px-4">Minimal gaps</td>
                <td className="py-3 px-4">Spaced apart</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Best Use Case</td>
                <td className="py-3 px-4">General purpose</td>
                <td className="py-3 px-4">Content-focused</td>
                <td className="py-3 px-4">Premium interfaces</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  ),
};

// =================== STORY: MULTIPLE MODE ===================
export const MultipleMode: Story = {
  name: '📂 Multiple Mode & Controls',
  parameters: {
    docs: {
      description: {
        story: `
### Multiple Panels Open Simultaneously

Enable multiple mode to allow several accordion panels to be expanded at the same time, perfect for settings panels and content organization.

**Features:**
- Multiple panels can be open simultaneously
- Expand/Collapse All controls
- Advanced keyboard shortcuts (Ctrl+A, Escape)
- Individual section management

**Implementation:**
\`\`\`tsx
<Accordion 
  multiple={true}
  showControls={true}
  defaultOpenIndexes={[0]}
  variant="cards"
>
  <Accordion.Item>
    <Accordion.Trigger icon={<User size={20} />}>
      Account Settings
    </Accordion.Trigger>
    <Accordion.Content>
      {/* Settings content */}
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
\`\`\`

**Keyboard Shortcuts:**
- **Ctrl+A**: Expand all sections
- **Escape**: Collapse all sections
- **Arrow Keys**: Navigate between headers
        `,
      },
    },
  },
  render: () => (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Settings Panel</h1>
        <p className="text-gray-600">
          Multiple sections can be open simultaneously. Use the controls or keyboard shortcuts.
        </p>
      </div>

      <Accordion 
        multiple={true}
        showControls={true}
        variant="cards"
        defaultOpenIndexes={[0]}
      >
        {settingsData.map((section, index) => (
          <Accordion.Item key={index}>
            <Accordion.Trigger icon={section.icon}>
              {section.title}
            </Accordion.Trigger>
            <Accordion.Content>
              {section.content}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>

      <div className="bg-indigo-50 p-6 rounded-xl">
        <h3 className="font-semibold text-indigo-900 mb-4">Advanced Features:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-indigo-800 mb-2">Keyboard Shortcuts</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white border border-indigo-200 rounded text-xs font-mono">Ctrl+A</kbd>
                <span className="text-indigo-700">Expand all sections</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white border border-indigo-200 rounded text-xs font-mono">Escape</kbd>
                <span className="text-indigo-700">Collapse all sections</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white border border-indigo-200 rounded text-xs font-mono">↑↓</kbd>
                <span className="text-indigo-700">Navigate between headers</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-indigo-800 mb-2">Multiple Mode Benefits</h4>
            <ul className="text-sm text-indigo-700 space-y-1">
              <li>• Compare settings across sections</li>
              <li>• Efficient bulk configuration</li>
              <li>• Reduced navigation overhead</li>
              <li>• Better for complex forms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
};

// =================== STORY: CUSTOM ICONS ===================
export const CustomIcons: Story = {
  name: '🎯 Custom Icons & Positioning',
  parameters: {
    docs: {
      description: {
        story: `
### Custom Icons and Flexible Positioning

Replace default chevron icons and control their positioning for better visual hierarchy.

**Icon Customization:**
- Replace chevrons with custom icons
- Position icons on left or right
- Icons rotate automatically on expand/collapse

**Implementation:**
\`\`\`tsx
<Accordion.Trigger 
  icon={<Plus size={18} />}
  chevronPosition="left"
>
  Custom Icon Section
</Accordion.Trigger>
\`\`\`

**Use Cases:**
- Category icons for better identification  
- Plus/minus icons for add/remove actions
- Status icons for different states
- Brand icons for company sections
        `,
      },
    },
  },
  render: () => (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Custom Icons & Positioning</h1>
        <p className="text-gray-600">Enhance visual hierarchy with custom icons and flexible positioning</p>
      </div>

      {/* Left-positioned Icons */}
      <section className="space-y-6 ">
        <div className="flex items-center gap-3">
          <ChevronRight className="text-blue-600" size={20} />
          <h2 className="text-xl font-semibold text-gray-900">Left-positioned Icons</h2>
        </div>

        <Accordion variant="minimal" >
          {[
            { icon: <FileText size={18} />, title: "Documentation", content: "Comprehensive guides and API references for developers." },
            { icon: <Settings size={18} />, title: "Configuration", content: "System settings and environment configuration options." },
            { icon: <HelpCircle size={18} />, title: "Support", content: "Get help from our support team and community resources." }
          ].map((item, index) => (
            <Accordion.Item key={index}>
              <Accordion.Trigger 
                icon={item.icon}
                chevronPosition="left"
              >
                {item.title}
              </Accordion.Trigger>
              <Accordion.Content>
                <p className="text-gray-700">{item.content}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
      </section>

      {/* Plus/Minus Icons */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Plus className="text-green-600" size={20} />
          <h2 className="text-xl font-semibold text-gray-900">Plus/Minus Icons</h2>
        </div>

        <div>
          {[
            { title: "Add New Feature", content: "Configure and enable new platform features for your organization." },
            { title: "Expand Integration", content: "Connect with third-party services and external APIs." },
            { title: "Scale Resources", content: "Increase capacity and performance for growing demands." }
          ].map((item, index) => {
            const [isOpen, setIsOpen] = useState(false);
            return (
              <div key={index} className="border border-gray-200 rounded-lg mb-4">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center justify-between w-full p-4 text-left hover:bg-gray-50"
                >
                  <span className="font-medium">{item.title}</span>
                  <div className="flex items-center gap-2">
                    {isOpen ? (
                      <Minus size={18} className="text-red-500" />
                    ) : (
                      <Plus size={18} className="text-green-500" />
                    )}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 border-t border-gray-100 bg-gray-50/50">
                    <p className="text-gray-700 pt-3">{item.content}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Category Icons */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Star className="text-yellow-600" size={20} />
          <h2 className="text-xl font-semibold text-gray-900">Category Icons</h2>
        </div>

        <Accordion variant="cards" multiple={true} >
          {[
            { icon: <CreditCard size={20} />, title: "Billing & Payments", content: "Manage your subscription, payment methods, and billing history." },
            { icon: <Globe size={20} />, title: "Integrations", content: "Connect your account with external services and third-party applications." },
            { icon: <Lock size={20} />, title: "Security", content: "Configure security settings, two-factor authentication, and access controls." }
          ].map((item, index) => (
            <Accordion.Item key={index}>
              <Accordion.Trigger icon={item.icon}>
                {item.title}
              </Accordion.Trigger>
              <Accordion.Content>
                <p className="text-gray-700">{item.content}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
      </section>

      {/* Implementation Examples */}
      <section className="bg-gray-50 p-8 rounded-xl">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Icon Implementation Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium text-gray-800 mb-3">Basic Custom Icon</h3>
            <pre className="text-xs bg-white p-4 rounded border overflow-x-auto">
{`<Accordion.Trigger icon={<Settings size={18} />}>
  Configuration
</Accordion.Trigger>`}
            </pre>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-3">Left-positioned Icon</h3>
            <pre className="text-xs bg-white p-4 rounded border overflow-x-auto">
{`<Accordion.Trigger 
  icon={<FileText size={18} />}
  chevronPosition="left"
>
  Documentation
</Accordion.Trigger>`}
            </pre>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-3">Conditional Icon</h3>
            <pre className="text-xs bg-white p-4 rounded border overflow-x-auto">
{`<Accordion.Trigger 
  icon={isOpen ? <Minus size={18} /> : <Plus size={18} />}
>
  Toggle Section
</Accordion.Trigger>`}
            </pre>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-3">Status Icon</h3>
            <pre className="text-xs bg-white p-4 rounded border overflow-x-auto">
{`<Accordion.Trigger 
  icon={<CheckCircle size={18} className="text-green-500" />}
>
  Completed Section
</Accordion.Trigger>`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  ),
};

// =================== STORY: ACCESSIBILITY FEATURES ===================
export const AccessibilityFeatures: Story = {
  name: '♿ Accessibility Features',
  parameters: {
    docs: {
      description: {
        story: `
### Comprehensive Accessibility Implementation

WCAG 2.1 AA compliant accordion with full keyboard navigation, screen reader support, and proper semantic structure.

**Accessibility Features:**
- Full keyboard navigation with arrow keys
- Proper ARIA roles and properties
- Screen reader announcements
- High contrast focus indicators
- Semantic HTML structure (h3 headings)
- Touch targets ≥44px

**Keyboard Navigation:**
- **Arrow Keys**: Navigate between headers
- **Enter/Space**: Toggle sections
- **Home/End**: Jump to first/last header
- **Ctrl+A**: Expand all (multiple mode)
- **Escape**: Collapse all sections

**ARIA Implementation:**
- \`aria-expanded\`: Indicates panel state
- \`aria-controls\`: Links trigger to content
- \`role="region"\`: Defines content regions
- \`aria-labelledby\`: Associates content with headers
        `,
      },
    },
  },
  render: () => (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Accessibility Features</h1>
        <p className="text-gray-600">
          Built-in accessibility ensures the accordion works for everyone
        </p>
      </div>

      <Accordion className="max-w-2xl mx-auto">
        {[
          {
            question: "How accessible is this accordion?",
            answer: "This accordion is WCAG 2.1 AA compliant with full keyboard navigation, screen reader support, proper ARIA attributes, and semantic HTML structure. It includes focus management, high contrast indicators, and touch-friendly targets."
          },
          {
            question: "What keyboard shortcuts are available?",
            answer: "Use arrow keys to navigate between headers, Enter or Space to toggle sections, Home/End to jump to first/last header, Ctrl+A to expand all sections (in multiple mode), and Escape to collapse all sections."
          },
          {
            question: "How does it work with screen readers?",
            answer: "Screen readers announce the current state of each section (expanded/collapsed), the total number of sections, and provide proper context through ARIA labels and semantic heading structure."
          },
          {
            question: "Is it mobile-friendly?",
            answer: "Yes, all interactive elements meet the minimum 44px touch target size, and the component adapts well to different screen sizes with appropriate spacing and typography scaling."
          }
        ].map((item, index) => (
          <Accordion.Item key={index}>
            <Accordion.Trigger>
              {item.question}
            </Accordion.Trigger>
            <Accordion.Content>
              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>

      <div className="bg-blue-50 p-4 rounded-lg max-w-2xl mx-auto">
        <p className="text-blue-800 text-sm">
          <strong>Try it:</strong> Use Tab to focus the first header, then arrow keys to navigate. 
          Press Enter to expand sections. Screen readers will announce state changes.
        </p>
      </div>

      {/* Accessibility Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Keyboard Navigation</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">↑↓</kbd>
              <span className="text-sm">Navigate between headers</span>
            </div>
            <div className="flex items-center gap-3">
              <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">Enter</kbd>
              <span className="text-sm">Toggle section</span>
            </div>
            <div className="flex items-center gap-3">
              <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">Space</kbd>
              <span className="text-sm">Toggle section</span>
            </div>
            <div className="flex items-center gap-3">
              <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">Home</kbd>
              <span className="text-sm">First header</span>
            </div>
            <div className="flex items-center gap-3">
              <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">End</kbd>
              <span className="text-sm">Last header</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">ARIA Implementation</h3>
          <ul className="text-sm space-y-2">
            <li>• <strong>aria-expanded</strong>: Indicates panel state to screen readers</li>
            <li>• <strong>aria-controls</strong>: Links trigger button to content region</li>
            <li>• <strong>role="region"</strong>: Defines expandable content areas</li>
            <li>• <strong>aria-labelledby</strong>: Associates content with header text</li>
            <li>• <strong>h3 elements</strong>: Proper heading hierarchy for navigation</li>
          </ul>
        </div>
      </div>

      {/* Testing Checklist */}
      <div className="bg-yellow-50 p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-yellow-900 mb-4">Accessibility Testing Checklist</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-yellow-800 mb-2">Manual Testing</h4>
            <div className="space-y-2">
              {[
                'Keyboard navigation works correctly',
                'Focus indicators are clearly visible',
                'Screen reader announces state changes',
                'All interactive elements are focusable',
                'Touch targets are ≥44px on mobile',
                'Works without mouse/pointer'
              ].map((test, index) => (
                <label key={index} className="flex items-center gap-2 text-sm text-yellow-700">
                  <input type="checkbox" className="rounded" />
                  <span>{test}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-yellow-800 mb-2">Automated Testing</h4>
            <div className="space-y-2">
              {[
                'axe-core accessibility audit passes',
                'Color contrast meets WCAG AA',
                'ARIA attributes are valid',
                'Semantic HTML structure verified',
                'Focus management tested',
                'Reduced motion preferences respected'
              ].map((test, index) => (
                <label key={index} className="flex items-center gap-2 text-sm text-yellow-700">
                  <input type="checkbox" className="rounded" />
                  <span>{test}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
