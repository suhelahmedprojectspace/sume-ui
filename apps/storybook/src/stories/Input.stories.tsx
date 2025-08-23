import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {Input} from "@sume/ui/components/Input"
import { useState } from 'react';
import { 
  Search, 
  Mail, 
  Phone, 
  CreditCard, 
  User, 
 
  DollarSign,
  Calendar,
  MapPin,
  Globe,
  FileText,
  Hash,
  AtSign
} from 'lucide-react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A comprehensive and accessible input component built with React forwardRef and CVA (Class Variance Authority). 
Supports multiple variants, sizes, floating labels, validation states, and various addons for enhanced user experience.

## Features
- 🎨 **6 visual variants** - default, outline, ghost, filled, error, and success states
- 📏 **3 size options** - small, medium, and large with consistent typography
- 🏷️ **Floating labels** - modern material design-inspired floating label animation
- 🔍 **Left/Right addons** - icons, buttons, or custom components on either side
- 👁️ **Password visibility** - built-in toggle for password fields with proper ARIA labels
- ✅ **Validation states** - error and success states with descriptive messaging
- 🧹 **Clearable input** - optional clear button for quick content removal
- ♿ **Accessibility first** - proper ARIA attributes, labels, and keyboard navigation
- 🎯 **Helper text support** - contextual help text with appropriate icons
- 🔄 **Controlled/Uncontrolled** - works with both controlled and uncontrolled patterns

## Input Types Supported
- **Text inputs** - standard text, email, tel, url, search
- **Password inputs** - with built-in visibility toggle
- **Number inputs** - with proper number formatting
- **Date/Time inputs** - date, datetime-local, time
- **File inputs** - with proper styling and accessibility

## Accessibility Features
- Proper ARIA labeling and descriptions
- Screen reader announcements for validation states
- Keyboard navigation support
- Focus management and visual indicators
- Required field indicators
- Error and success state announcements

## Usage Guidelines
- Use **floating labels** for modern, space-efficient forms
- Use **helper text** to provide additional context or instructions
- Use **left icons** to indicate input type or category
- Use **right addons** for actions like clear, toggle, or submit
- Always provide **proper labels** for accessibility
- Use **validation states** to provide immediate feedback
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          minHeight: '300px',
          padding: '2rem',
        }}
      >
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: { type: 'select' },
      description: 'Visual style variant of the input',
      options: ['default', 'outline', 'ghost', 'filled', 'error', 'success'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    inputSize: {
      control: { type: 'select' },
      description: 'Size of the input affecting height, padding, and font size',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    label: {
      control: 'text',
      description: 'Label text for the input field',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when input is empty',
      table: {
        type: { summary: 'string' },
      },
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the input',
      table: {
        type: { summary: 'string' },
      },
    },
    error: {
      control: 'text',
      description: 'Error message displayed when validation fails',
      table: {
        type: { summary: 'string' },
      },
    },
    success: {
      control: 'boolean',
      description: 'Shows success state with check icon',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    successText: {
      control: 'text',
      description: 'Success message displayed when validation passes',
      table: {
        type: { summary: 'string' },
      },
    },
    floating: {
      control: 'boolean',
      description: 'Enables floating label animation',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    clearable: {
      control: 'boolean',
      description: 'Shows clear button when input has value',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input field',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Marks the field as required with asterisk indicator',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    type: {
      control: { type: 'select' },
      description: 'HTML input type',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date', 'time'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    icon: {
      control: false,
      description: 'Icon component displayed on the left side',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    leftAddon: {
      control: false,
      description: 'Custom component displayed on the left side',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    rightAddon: {
      control: false,
      description: 'Custom component displayed on the right side',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
  args: {
    variant: 'default',
    inputSize: 'md',
    type: 'text',
    placeholder: 'Enter text...',
    floating: false,
    success: false,
    clearable: false,
    disabled: false,
    required: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default input style with clean border and subtle focus states. Perfect for most form inputs.',
      },
    },
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email',
    icon: <Mail size={16} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Input with a left-side icon to provide visual context about the expected input type.',
      },
    },
  },
};

export const FloatingLabel: Story = {
  args: {
    label: 'Phone Number',
    type: 'tel',
    placeholder: '+1 (555) 000-0000',
    floating: true,
    icon: <Phone size={16} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Modern floating label that animates when the input gains focus or has content.',
      },
    },
  },
};

// Size Variations
export const SmallSize: Story = {
  args: {
    inputSize: 'sm',
    label: 'Search',
    placeholder: 'Search...',
    icon: <Search size={14} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact input perfect for search bars, filters, or space-constrained interfaces.',
      },
    },
  },
};

export const LargeSize: Story = {
  args: {
    inputSize: 'lg',
    label: 'Account Number',
    placeholder: 'Enter account number',
    icon: <Hash size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Large input for prominent form fields or better touch targets on mobile devices.',
      },
    },
  },
};

// Variant Styles
export const OutlineVariant: Story = {
  args: {
    variant: 'outline',
    label: 'Website URL',
    type: 'url',
    placeholder: 'https://example.com',
    icon: <Globe size={16} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Outline variant with stronger border emphasis, great for forms that need clear field definition.',
      },
    },
  },
};

export const FilledVariant: Story = {
  args: {
    variant: 'filled',
    label: 'Description',
    placeholder: 'Enter description',
    icon: <FileText size={16} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Filled background variant that provides subtle visual separation without heavy borders.',
      },
    },
  },
};

export const GhostVariant: Story = {
  args: {
    variant: 'ghost',
    label: 'Username',
    placeholder: 'Enter username',
    icon: <AtSign size={16} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal ghost variant that only shows borders on hover, perfect for clean interfaces.',
      },
    },
  },
};

// Password Input
export const PasswordInput: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    required: true,
    helperText: 'Must be at least 8 characters long',
  },
  parameters: {
    docs: {
      description: {
        story: 'Password input with built-in visibility toggle and proper accessibility attributes.',
      },
    },
  },
};

// Validation States
export const WithError: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    value: 'invalid-email',
    error: 'Please enter a valid email address',
    icon: <Mail size={16} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Error state with red styling and descriptive error message for failed validation.',
      },
    },
  },
};

export const WithSuccess: Story = {
  args: {
    label: 'Username',
    value: 'john_doe',
    success: true,
    successText: 'Username is available!',
    icon: <User size={16} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Success state with green styling and confirmation message for passed validation.',
      },
    },
  },
};

// Interactive Features
export const ClearableInput: Story = {
  render: (args) => {
    const [value, setValue] = useState('Sample text you can clear');
    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue('')}
      />
    );
  },
  args: {
    label: 'Search Query',
    placeholder: 'Type to search...',
    clearable: true,
    icon: <Search size={16} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Input with clearable functionality - shows an X button when there is content to clear.',
      },
    },
  },
};

// Advanced Examples
export const WithLeftAddon: Story = {
  args: {
    label: 'Price',
    type: 'number',
    placeholder: '0.00',
    leftAddon: (
      <div className="flex items-center text-gray-500 font-medium">
        <DollarSign size={16} />
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Input with a left addon component, useful for currency symbols or custom elements.',
      },
    },
  },
};

export const WithRightAddon: Story = {
  args: {
    label: 'Card Number',
    placeholder: '1234 5678 9012 3456',
    icon: <CreditCard size={16} />,
    rightAddon: (
      <button 
        type="button" 
        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        onClick={() => alert('Scan card')}
      >
        Scan
      </button>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Input with a right addon component, perfect for action buttons or additional controls.',
      },
    },
  },
};

export const DisabledState: Story = {
  args: {
    label: 'Read Only Field',
    value: 'This field is disabled',
    disabled: true,
    helperText: 'This field cannot be edited',
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled input state with reduced opacity and proper cursor styling.',
      },
    },
  },
};

// Form Examples
export const ContactForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    const updateField = (field: string, value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
      <div className="space-y-4">
        <Input
          label="Full Name"
          value={formData.name}
          onChange={(e) => updateField('name', e.target.value)}
          placeholder="Enter your full name"
          icon={<User size={16} />}
          required
        />
        
        <Input
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          icon={<Mail size={16} />}
          required
          floating
        />
        
        <Input
          label="Phone Number"
          type="tel"
          value={formData.phone}
          onChange={(e) => updateField('phone', e.target.value)}
          icon={<Phone size={16} />}
          helperText="We'll only use this for important updates"
          floating
        />
        
        <Input
          label="How did you hear about us?"
          value={formData.message}
          onChange={(e) => updateField('message', e.target.value)}
          clearable
          onClear={() => updateField('message', '')}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete contact form example showing various input configurations working together.',
      },
    },
  },
};

export const LoginForm: Story = {
  render: () => {
    const [credentials, setCredentials] = useState({
      email: '',
      password: '',
      rememberMe: false
    });
    const [errors, setErrors] = useState<{email?: string; password?: string}>({});

    const validateEmail = (email: string) => {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      return isValid;
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const email = e.target.value;
      setCredentials(prev => ({ ...prev, email }));
      
      if (email && !validateEmail(email)) {
        setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
      } else {
        setErrors(prev => ({ ...prev, email: undefined }));
      }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const password = e.target.value;
      setCredentials(prev => ({ ...prev, password }));
      
      if (password && password.length < 6) {
        setErrors(prev => ({ ...prev, password: 'Password must be at least 6 characters' }));
      } else {
        setErrors(prev => ({ ...prev, password: undefined }));
      }
    };

    return (
      <div className="space-y-4">
        <Input
          label="Email"
          type="email"
          value={credentials.email}
          onChange={handleEmailChange}
       
          icon={<Mail size={16} />}
          error={errors.email}
        //   success={credentials.email && !errors.email && validateEmail(credentials.email)}
          successText={credentials.email && !errors.email ? "Email format is valid" : undefined}
          required
          floating
        />
        
        <Input
          label="Password"
          type="password"
          value={credentials.password}
          onChange={handlePasswordChange}
          error={errors.password}
        //   success={credentials.password && !errors.password && credentials.password.length >= 6}
          required
          floating
        />
        
        <div className="pt-2">
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            disabled={!credentials.email || !credentials.password || !!errors.email || !!errors.password}
          >
            Sign In
          </button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Login form with real-time validation, showing both error and success states dynamically.',
      },
    },
  },
};

// Special Input Types
export const DateTimeInputs: Story = {
  render: () => (
    <div className="space-y-4">
      <Input
        label="Birth Date"
        type="date"
        icon={<Calendar size={16} />}
        
      />
      
      <Input
        label="Appointment Time"
        type="time"
        helperText="Select your preferred time slot"
        
      />
      
      <Input
        label="Event Date & Time"
        type="datetime-local"
        icon={<Calendar size={16} />}
    
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Date and time input examples with proper icons and floating labels.',
      },
    },
  },
};

export const SearchWithFilters: Story = {
  render: () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [location, setLocation] = useState('');

    return (
      <div className="space-y-4">
        <Input
          inputSize="lg"
          placeholder="Search for jobs, companies, or skills..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          icon={<Search size={20} />}
          clearable
          onClear={() => setSearchQuery('')}
          rightAddon={
            <button 
              type="submit"
              className="bg-blue-600 text-white px-4 py-1 rounded text-sm hover:bg-blue-700"
            >
              Search
            </button>
          }
        />
        
        <Input
          label="Location"
          placeholder="City, state, or remote"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          icon={<MapPin size={16} />}
          helperText="Enter a location or 'remote' for remote work"
          clearable
          onClear={() => setLocation('')}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Search interface example with primary search input and location filter.',
      },
    },
  },
};
