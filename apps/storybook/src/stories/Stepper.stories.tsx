import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React, { useState } from 'react';
import { 
  CheckCircle,
  User,
  MapPin,
  CreditCard,
  FileCheck,
  Globe,
  Settings,
  Download,
  Shield,
  Bell,
  Zap,
  Target,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { Stepper } from '@sume/ui';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
**Professional multi-step progress indicator with smooth animations and interactive navigation.**

The Stepper component provides an intuitive way to guide users through multi-step processes like forms, wizards, or workflows. It supports both horizontal and vertical orientations with smooth progress animations, customizable color themes, and comprehensive accessibility features.

## 🎯 When to Use Stepper

### ✅ Perfect Use Cases
- **Multi-step Forms**: Registration, checkout, profile setup, onboarding processes
- **Wizard Workflows**: Software installation, configuration wizards, guided tutorials
- **Process Tracking**: Order status, application progress, workflow states
- **Sequential Navigation**: Step-by-step guides, instructions, learning paths
- **Data Collection**: Breaking complex forms into digestible, manageable steps
- **User Onboarding**: Welcome flows, feature introductions, setup processes

### ❌ Avoid Using When
- Simple single-step processes that don't require progression
- Non-sequential workflows where users need to jump freely between sections
- When all steps must be visible and accessible simultaneously
- For basic pagination (use Pagination component instead)
- When steps are not logically dependent on each other

## ✨ Key Features

### Core Functionality
- **Dual Orientation**: Both horizontal and vertical layout support
- **Interactive Navigation**: Optional click handlers for non-linear progression
- **Progress Animation**: Smooth transitions between steps with hardware acceleration
- **Visual State Management**: Clear active, completed, and pending states
- **Step Validation**: Integration-ready for form validation and error handling
- **Accessibility First**: WCAG 2.1 AA compliant with full screen reader support

### Advanced Features
- **Color Theming**: 5 semantic color schemes (blue, green, indigo, red, yellow)
- **Flexible Step Data**: Support for custom step numbers and descriptive labels
- **Responsive Design**: Adapts beautifully from mobile to desktop layouts
- **TypeScript Ready**: Full type safety with comprehensive interface definitions
- **Performance Optimized**: Efficient rendering with minimal DOM manipulation
- **Animation Control**: Respects user motion preferences automatically

## 🎨 Visual States

### Step States
- **Pending**: Gray circle with step number - represents future steps
- **Active**: Colored circle with step number - current step in progress
- **Completed**: Colored circle with checkmark icon - successfully finished steps

### Orientation Support
- **Horizontal**: Traditional left-to-right progression, perfect for forms
- **Vertical**: Top-to-bottom layout, ideal for sidebars and mobile interfaces

## 🎨 Color Themes

### Blue (Default)
- **Use Case**: Professional interfaces, standard workflows, business applications
- **Psychology**: Trust, reliability, corporate feel

### Green
- **Use Case**: Success states, completion flows, positive outcomes
- **Psychology**: Growth, success, achievement, environmental themes

### Indigo
- **Use Case**: Modern applications, tech-focused interfaces, premium features
- **Psychology**: Innovation, sophistication, digital-first experiences

### Red
- **Use Case**: Critical processes, urgent workflows, error states
- **Psychology**: Importance, urgency, attention-required processes

### Yellow
- **Use Case**: Warning states, attention-needed processes, caution workflows
- **Psychology**: Caution, attention, highlights, energy

## 📱 Layout Orientations

### Horizontal Layout
- **Best For**: Desktop forms, wizard dialogs, checkout processes
- **Features**: Progress line connecting steps, responsive step spacing
- **Mobile Behavior**: Automatically adapts with smaller text and icons

### Vertical Layout
- **Best For**: Sidebar navigation, mobile interfaces, detailed workflows
- **Features**: Vertical progress line, space for detailed descriptions
- **Content Integration**: Works well alongside content areas

## ♿ Accessibility Features

### WCAG 2.1 AA Compliance
- **Semantic Structure**: Proper HTML5 semantics with meaningful markup
- **Screen Reader Support**: Complete ARIA implementation with announcements
- **Keyboard Navigation**: Full keyboard accessibility when interactive
- **Focus Management**: Clear focus indicators and logical tab order
- **Motion Respect**: Honors user's reduced motion preferences
- **Color Independence**: Information conveyed beyond color alone

### Advanced Accessibility
- **Role Definitions**: Proper ARIA roles for step navigation
- **State Announcements**: Screen readers announce step progress changes
- **Error Communication**: Integration-ready for validation error announcements
- **High Contrast**: Compatible with high contrast mode and color blindness
- **Touch Targets**: Adequate touch target sizes for mobile accessibility

## 🚀 Installation

\`\`\`bash
npm install @sume/ui
# or
yarn add @sume/ui
# or
pnpm add @sume/ui
\`\`\`

## 🔧 Basic Usage

\`\`\`tsx
import { Stepper } from '@sume/ui/components/Stepper';

const steps = [
  { step: 1, label: 'Account Info' },
  { step: 2, label: 'Personal Details' },
  { step: 3, label: 'Verification' },
  { step: 4, label: 'Complete' }
];

function MyForm() {
  const [currentStep, setCurrentStep] = useState(1);
  
  return (
    <Stepper
      steps={steps}
      activeStep={currentStep}
      direction="horizontal"
      color="blue"
      onStepClick={setCurrentStep}
    />
  );
}
\`\`\`

## 🎯 Advanced Implementation Examples

### Multi-Step Form with Validation
\`\`\`tsx
import { useState } from 'react';
import { Stepper } from '@sume/ui/components/Stepper';

function RegistrationWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [formData, setFormData] = useState({});
  
  const steps = [
    { step: 1, label: 'Personal Info' },
    { step: 2, label: 'Contact Details' },
    { step: 3, label: 'Preferences' },
    { step: 4, label: 'Review & Submit' }
  ];
  
  const validateStep = (step: number): boolean => {
    // Your validation logic here
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName;
      case 2:
        return formData.email && formData.phone;
      case 3:
        return true; // Preferences are optional
      default:
        return false;
    }
  };
  
  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCompletedSteps(prev => [...prev, currentStep]);
      setCurrentStep(prev => prev + 1);
    }
  };
  
  const handleStepClick = (step: number) => {
    // Only allow navigation to completed steps or next step
    if (completedSteps.includes(step - 1) || step <= currentStep) {
      setCurrentStep(step);
    }
  };
  
  return (
    <div className="max-w-2xl mx-auto p-6">
      <Stepper
        steps={steps}
        activeStep={currentStep}
        direction="horizontal"
        color="blue"
        onStepClick={handleStepClick}
      />
      
      <div className="mt-8">
        {/* Your form content based on currentStep */}
        {currentStep === 1 && <PersonalInfoForm data={formData} onChange={setFormData} />}
        {currentStep === 2 && <ContactForm data={formData} onChange={setFormData} />}
        {currentStep === 3 && <PreferencesForm data={formData} onChange={setFormData} />}
        {currentStep === 4 && <ReviewForm data={formData} />}
      </div>
      
      <div className="flex justify-between mt-8">
        <button
          onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
          disabled={currentStep === 1}
          className="px-4 py-2 border rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={currentStep === steps.length ? handleSubmit : handleNext}
          className="px-6 py-2 bg-blue-600 text-white rounded-md"
        >
          {currentStep === steps.length ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
}
\`\`\`

### Vertical Stepper for Onboarding
\`\`\`tsx
function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  
  const onboardingSteps = [
    { step: 1, label: 'Welcome' },
    { step: 2, label: 'Profile Setup' },
    { step: 3, label: 'Connect Services' },
    { step: 4, label: 'Customize Dashboard' },
    { step: 5, label: 'Ready to Go!' }
  ];
  
  return (
    <div className="flex min-h-screen">
      <div className="w-80 p-6 bg-gray-50">
        <Stepper
          steps={onboardingSteps}
          activeStep={currentStep}
          direction="vertical"
          color="green"
          onStepClick={setCurrentStep}
        />
      </div>
      
      <div className="flex-1 p-8">
        <OnboardingContent step={currentStep} />
      </div>
    </div>
  );
}
\`\`\`

### Order Status Tracking
\`\`\`tsx
function OrderStatus({ order }) {
  const statusSteps = [
    { step: 1, label: 'Order Placed' },
    { step: 2, label: 'Processing' },
    { step: 3, label: 'Shipped' },
    { step: 4, label: 'Delivered' }
  ];
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Order #{order.id}</h3>
      
      <Stepper
        steps={statusSteps}
        activeStep={order.currentStatus}
        direction="horizontal"
        color="green"
        // No onClick - read-only for status display
      />
      
      <div className="mt-4 text-sm text-gray-600">
        <p>Current Status: {statusSteps[order.currentStatus - 1]?.label}</p>
        <p>Last Updated: {order.lastUpdated}</p>
      </div>
    </div>
  );
}
\`\`\`

## 🎨 Styling & Customization

### Custom Styling
\`\`\`tsx
// Custom CSS classes can be applied
<Stepper
  steps={steps}
  activeStep={currentStep}
  className="my-custom-stepper"
  // Component uses Tailwind classes internally
  // but can be overridden with higher specificity
/>
\`\`\`

### Dynamic Color Based on State
\`\`\`tsx
function DynamicColorStepper() {
  const [currentStep, setCurrentStep] = useState(1);
  const [hasError, setHasError] = useState(false);
  
  const getStepperColor = () => {
    if (hasError) return 'red';
    if (currentStep === steps.length) return 'green';
    return 'blue';
  };
  
  return (
    <Stepper
      steps={steps}
      activeStep={currentStep}
      color={getStepperColor()}
      direction="horizontal"
    />
  );
}
\`\`\`

## 🧪 Testing Strategies

### Component Testing
\`\`\`typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { Stepper } from './Stepper';

describe('Stepper Component', () => {
  const mockSteps = [
    { step: 1, label: 'Step 1' },
    { step: 2, label: 'Step 2' },
    { step: 3, label: 'Step 3' }
  ];
  
  it('should render all steps', () => {
    render(
      <Stepper steps={mockSteps} activeStep={1} direction="horizontal" />
    );
    
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
  });
  
  it('should show active step correctly', () => {
    render(
      <Stepper steps={mockSteps} activeStep={2} direction="horizontal" />
    );
    
    // Active step should have the active styling
    const activeStep = screen.getByRole('button', { name: /step 2/i });
    expect(activeStep).toHaveClass('bg-blue-500'); // or your active class
  });
  
  it('should handle step clicks', () => {
    const handleStepClick = jest.fn();
    
    render(
      <Stepper
        steps={mockSteps}
        activeStep={1}
        direction="horizontal"
        onStepClick={handleStepClick}
      />
    );
    
    fireEvent.click(screen.getByRole('button', { name: /step 2/i }));
    expect(handleStepClick).toHaveBeenCalledWith(2);
  });
  
  it('should show completed steps with checkmarks', () => {
    render(
      <Stepper steps={mockSteps} activeStep={3} direction="horizontal" />
    );
    
    // Steps 1 and 2 should be completed and show checkmarks
    const completedSteps = screen.getAllByRole('img', { hidden: true });
    expect(completedSteps).toHaveLength(2); // SVG checkmarks
  });
  
  it('should be accessible', async () => {
    const { container } = render(
      <Stepper steps={mockSteps} activeStep={2} direction="horizontal" />
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
\`\`\`

### Integration Testing
\`\`\`typescript
describe('Stepper Integration', () => {
  it('should work with form validation', () => {
    const TestForm = () => {
      const [step, setStep] = useState(1);
      const [formData, setFormData] = useState({ name: '', email: '' });
      
      const handleNext = () => {
        if (step === 1 && formData.name) setStep(2);
        if (step === 2 && formData.email) setStep(3);
      };
      
      return (
        <div>
          <Stepper
            steps={mockSteps}
            activeStep={step}
            direction="horizontal"
          />
          <button onClick={handleNext}>Next</button>
          <input
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Name"
          />
        </div>
      );
    };
    
    render(<TestForm />);
    
    // Test form progression with stepper
    fireEvent.change(screen.getByPlaceholderText('Name'), { 
      target: { value: 'John Doe' } 
    });
    fireEvent.click(screen.getByText('Next'));
    
    // Verify stepper advanced
    expect(screen.getByText('2')).toHaveClass('bg-blue-500');
  });
});
\`\`\`

## 🔧 Advanced Configuration

### Custom Step Icons
\`\`\`tsx
// While not directly supported, you can extend the component
function CustomIconStepper() {
  return (
    <div className="relative">
      <Stepper
        steps={steps}
        activeStep={currentStep}
        // Custom styling to hide default icons
        className="custom-stepper"
      />
      {/* Overlay custom icons */}
      {steps.map((step, index) => (
        <CustomStepIcon
          key={step.step}
          icon={getIconForStep(step.step)}
          position={getIconPosition(index)}
          isActive={currentStep === step.step}
          isComplete={currentStep > step.step}
        />
      ))}
    </div>
  );
}
\`\`\`

### Theme Customization
\`\`\`css
/* Custom CSS variables for theming */
:root {
  --stepper-primary: #3b82f6;
  --stepper-success: #10b981;
  --stepper-warning: #f59e0b;
  --stepper-danger: #ef4444;
  --stepper-neutral: #6b7280;
}

.dark {
  --stepper-primary: #60a5fa;
  --stepper-success: #34d399;
  --stepper-warning: #fbbf24;
  --stepper-danger: #f87171;
  --stepper-neutral: #9ca3af;
}

/* Custom animations */
@keyframes step-complete {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.step-completing {
  animation: step-complete 0.3s ease-in-out;
}
\`\`\`
        `
      }
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
    steps: {
      control: 'object',
      description: `**Array of step objects defining the stepper progression**

Each step object must contain:
- \`step\`: Unique step number (typically 1, 2, 3, etc.)
- \`label\`: Display text for the step

\`\`\`tsx
const steps = [
  { step: 1, label: 'Personal Info' },
  { step: 2, label: 'Contact Details' },
  { step: 3, label: 'Review & Submit' }
];
\`\`\`

**Features:**
- Flexible numbering (can use any numbers, not just 1,2,3)
- Labels can be any string length
- Supports Unicode characters and internationalization`,
      table: {
        type: { summary: 'Step[]' },
        defaultValue: { summary: '[]' },
      },
    },
    activeStep: {
      control: { type: 'number', min: 1, max: 10 },
      description: `**Currently active step number**

Must correspond to one of the step numbers in the steps array.

\`\`\`tsx
<Stepper steps={steps} activeStep={2} />
\`\`\`

**Behavior:**
- Steps before activeStep show as completed (with checkmarks)
- The activeStep shows as current (with step number)
- Steps after activeStep show as pending (grayed out)
- Automatically handles visual state transitions`,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: `**Layout orientation of the stepper**

### Horizontal
- **Best For**: Desktop forms, checkout flows, wizard dialogs
- **Features**: Left-to-right progression with connecting line
- **Responsive**: Automatically adapts text size for mobile

### Vertical
- **Best For**: Sidebar navigation, mobile interfaces, detailed workflows
- **Features**: Top-to-bottom layout with vertical progress line
- **Space Efficient**: Great for narrow containers and mobile layouts

\`\`\`tsx
<Stepper direction="horizontal" steps={steps} activeStep={1} />
<Stepper direction="vertical" steps={steps} activeStep={1} />
\`\`\``,
      table: {
        type: { summary: "'horizontal' | 'vertical'" },
        defaultValue: { summary: "'horizontal'" },
      },
    },
    color: {
      control: 'select',
      options: ['blue', 'green', 'indigo', 'red', 'yellow'],
      description: `**Color theme with semantic meaning**

### Blue (Default)
- **Use Case**: Professional interfaces, standard workflows
- **Psychology**: Trust, reliability, business applications

### Green
- **Use Case**: Success flows, completion processes
- **Psychology**: Growth, achievement, positive outcomes

### Indigo
- **Use Case**: Modern apps, tech interfaces, premium features
- **Psychology**: Innovation, sophistication, digital-first

### Red
- **Use Case**: Critical processes, urgent workflows, errors
- **Psychology**: Attention, importance, critical actions

### Yellow
- **Use Case**: Warning states, caution processes
- **Psychology**: Attention, caution, highlights

\`\`\`tsx
<Stepper color="green" steps={steps} activeStep={3} />
\`\`\``,
      table: {
        type: { summary: "'blue' | 'green' | 'indigo' | 'red' | 'yellow'" },
        defaultValue: { summary: "'blue'" },
      },
    },
    onStepClick: {
      description: `**Optional click handler for step navigation**

When provided, makes steps clickable for non-linear navigation.

\`\`\`tsx
const handleStepClick = (step: number) => {
  // Only allow navigation to completed steps
  if (step <= currentStep) {
    setCurrentStep(step);
  }
};

<Stepper
  steps={steps}
  activeStep={currentStep}
  onStepClick={handleStepClick}
/>
\`\`\`

**Common Patterns:**
- Allow navigation to any previous step
- Restrict navigation based on form validation
- Enable navigation to next step only if current is valid
- Disable navigation for read-only status displays`,
      action: 'stepClicked',
      table: {
        type: { summary: '(step: number) => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for stories
const basicSteps = [
  { step: 1, label: 'Account Details' },
  { step: 2, label: 'Personal Info' },
  { step: 3, label: 'Verification' },
  { step: 4, label: 'Complete' }
];

const checkoutSteps = [
  { step: 1, label: 'Cart Review' },
  { step: 2, label: 'Shipping' },
  { step: 3, label: 'Payment' },
  { step: 4, label: 'Confirmation' }
];

const onboardingSteps = [
  { step: 1, label: 'Welcome' },
  { step: 2, label: 'Profile Setup' },
  { step: 3, label: 'Connect Accounts' },
  { step: 4, label: 'Preferences' },
  { step: 5, label: 'Tutorial Complete' }
];

const orderSteps = [
  { step: 1, label: 'Order Placed' },
  { step: 2, label: 'Processing' },
  { step: 3, label: 'Shipped' },
  { step: 4, label: 'Delivered' }
];

// =================== STORY: BASIC IMPLEMENTATION ===================
export const BasicImplementation: Story = {
  name: '🚀 Basic Implementation',
  parameters: {
    docs: {
      description: {
        story: `
### Quick Start Examples

Simple steppers for common use cases with clean, accessible implementation.

**Code:**
\`\`\`tsx
// Basic horizontal stepper
<Stepper 
  steps={steps} 
  activeStep={2}
  direction="horizontal"
  color="blue"
/>

// Interactive stepper with click handling
<Stepper 
  steps={steps}
  activeStep={currentStep}
  onStepClick={setCurrentStep}
  direction="horizontal"
/>
\`\`\`

**Features:**
- Clean, professional appearance
- Automatic state management for completed/active/pending steps
- Smooth animations and transitions
- Screen reader accessible with proper ARIA attributes
        `
      }
    }
  },
  args: {
    steps: basicSteps,
    activeStep: 2,
    direction: 'horizontal',
    color: 'blue'
  },
  render: (args) => (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Basic Stepper Examples</h2>
        <p className="text-gray-600">Simple, clean progress indicators for common workflows</p>
      </div>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Form Registration Process</h3>
          <Stepper {...args} />
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">E-commerce Checkout</h3>
          <Stepper
            steps={checkoutSteps}
            activeStep={3}
            color="green"
            direction="horizontal"
          />
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Status Tracking</h3>
          <Stepper
            steps={orderSteps}
            activeStep={2}
            color="indigo"
            direction="horizontal"
          />
        </div>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-3">Key Features:</h3>
        <ul className="text-sm text-blue-800 space-y-2">
          <li className="flex items-center gap-2">
            <CheckCircle size={16} className="text-green-500" />
            <span>Automatic visual state management (pending, active, completed)</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle size={16} className="text-green-500" />
            <span>Smooth animations with hardware acceleration</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle size={16} className="text-green-500" />
            <span>WCAG 2.1 AA compliant accessibility</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle size={16} className="text-green-500" />
            <span>Responsive design for mobile and desktop</span>
          </li>
        </ul>
      </div>
    </div>
  ),
};

// =================== STORY: INTERACTIVE HORIZONTAL ===================
export const InteractiveHorizontal: Story = {
  name: '🎯 Interactive Horizontal Stepper',
  parameters: {
    docs: {
      description: {
        story: `
### Interactive Navigation with Form Simulation

Complete stepper with navigation controls and form content simulation. Demonstrates real-world usage patterns with step validation and content management.

**Features:**
- Clickable step navigation with validation
- Previous/Next button controls
- Dynamic content based on current step
- Form validation simulation
- Progress persistence across navigation

**Implementation:**
\`\`\`tsx
const [activeStep, setActiveStep] = useState(1);

const handleStepClick = (step: number) => {
  // Allow navigation to any completed step or current step
  if (step <= activeStep) {
    setActiveStep(step);
  }
};

<Stepper
  steps={steps}
  activeStep={activeStep}
  onStepClick={handleStepClick}
  direction="horizontal"
  color="blue"
/>
\`\`\`
        `
      }
    }
  },
  render: () => {
    const [activeStep, setActiveStep] = useState(1);
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      notifications: false
    });
    
    const handleNext = () => {
      if (activeStep < basicSteps.length) {
        setActiveStep(prev => prev + 1);
      }
    };
    
    const handlePrevious = () => {
      if (activeStep > 1) {
        setActiveStep(prev => prev - 1);
      }
    };
    
    const handleStepClick = (step: number) => {
      // Allow navigation to completed steps and current step
      if (step <= activeStep) {
        setActiveStep(step);
      }
    };
    
    const getStepContent = () => {
      switch (activeStep) {
        case 1:
          return (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Account Details</h3>
              <p className="text-gray-600 mb-6">Let's start with your basic account information.</p>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          );
        case 2:
          return (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Personal Information</h3>
              <p className="text-gray-600 mb-6">Now, let's add your contact details.</p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          );
        case 3:
          return (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Verification</h3>
              <p className="text-gray-600 mb-6">We'll send a verification code to your email.</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  <strong>Email:</strong> {formData.email || 'No email provided'}
                </p>
                <p className="text-blue-800 mt-2">
                  <strong>Phone:</strong> {formData.phone || 'No phone provided'}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="notifications"
                  checked={formData.notifications}
                  onChange={(e) => setFormData(prev => ({ ...prev, notifications: e.target.checked }))}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="notifications" className="text-sm text-gray-700">
                  Send me updates and notifications
                </label>
              </div>
            </div>
          );
        case 4:
          return (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Complete</h3>
              <p className="text-gray-600 mb-6">Your account has been successfully created!</p>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle size={24} className="text-green-600" />
                  <span className="text-lg font-medium text-green-800">Registration Complete</span>
                </div>
                <div className="text-sm text-green-700 space-y-1">
                  <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                  <p><strong>Notifications:</strong> {formData.notifications ? 'Enabled' : 'Disabled'}</p>
                </div>
              </div>
            </div>
          );
        default:
          return null;
      }
    };
    
    return (
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Account Registration</h2>
          <p className="text-gray-600">Complete your registration in 4 easy steps</p>
        </div>
        
        <Stepper
          steps={basicSteps}
          activeStep={activeStep}
          direction="horizontal"
          color="blue"
          onStepClick={handleStepClick}
        />
        
        <div className="bg-white border border-gray-200 rounded-lg p-6 min-h-80">
          {getStepContent()}
        </div>
        
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={activeStep === 1}
            className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
          >
            Previous
          </button>
          <button
            onClick={activeStep === basicSteps.length ? () => alert('Registration complete!') : handleNext}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            {activeStep === basicSteps.length ? 'Finish' : 'Next'}
            {activeStep !== basicSteps.length && <ChevronRight size={16} />}
          </button>
        </div>
      </div>
    );
  },
};

// =================== STORY: VERTICAL LAYOUT ===================
export const VerticalLayout: Story = {
  name: '📱 Vertical Stepper Layout',
  parameters: {
    docs: {
      description: {
        story: `
### Vertical Layout for Detailed Workflows

Vertical stepper perfect for sidebar navigation and mobile interfaces. Great for workflows that need space for detailed content alongside each step.

**Use Cases:**
- Onboarding flows with rich content
- Sidebar navigation in dashboards
- Mobile-first responsive designs
- Detailed step descriptions
- Process documentation

**Features:**
- Vertical progress line connecting steps
- Optimized for narrow containers
- Integrates well with content areas
- Mobile-friendly responsive design

**Implementation:**
\`\`\`tsx
<div className="flex gap-8">
  <div className="w-64">
    <Stepper
      steps={steps}
      activeStep={currentStep}
      direction="vertical"
      color="green"
    />
  </div>
  <div className="flex-1">
    <StepContent step={currentStep} />
  </div>
</div>
\`\`\`
        `
      }
    }
  },
  render: () => {
    const [activeStep, setActiveStep] = useState(2);
    
    const getStepContent = () => {
      switch (activeStep) {
        case 1:
          return (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Welcome to Our Platform!</h3>
              <p className="text-gray-600 text-lg">
                Let's get you started with a quick setup process that will personalize your experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <User size={32} className="mx-auto text-blue-600 mb-2" />
                  <h4 className="font-semibold">Profile Setup</h4>
                  <p className="text-sm text-gray-600">Customize your account</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <Globe size={32} className="mx-auto text-green-600 mb-2" />
                  <h4 className="font-semibold">Connect Services</h4>
                  <p className="text-sm text-gray-600">Link your accounts</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <Settings size={32} className="mx-auto text-purple-600 mb-2" />
                  <h4 className="font-semibold">Preferences</h4>
                  <p className="text-sm text-gray-600">Set your preferences</p>
                </div>
              </div>
            </div>
          );
        case 2:
          return (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Setup Your Profile</h3>
              <p className="text-gray-600">Tell us about yourself to personalize your experience.</p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">About You</label>
                  <textarea rows={3} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Tell us about yourself..."></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Profile Picture</label>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                      <User size={24} className="text-gray-400" />
                    </div>
                    <button type="button" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                      Upload Photo
                    </button>
                  </div>
                </div>
              </form>
            </div>
          );
        case 3:
          return (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Connect Your Accounts</h3>
              <p className="text-gray-600">Link your existing accounts for seamless integration.</p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Google', icon: '🔍', connected: false },
                  { name: 'GitHub', icon: '🐙', connected: true },
                  { name: 'Slack', icon: '💬', connected: false },
                  { name: 'Microsoft', icon: '🏢', connected: false },
                  { name: 'LinkedIn', icon: '💼', connected: true },
                  { name: 'Notion', icon: '📝', connected: false }
                ].map((service) => (
                  <div key={service.name} className={`p-4 border rounded-lg ${service.connected ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{service.icon}</span>
                        <span className="font-medium">{service.name}</span>
                      </div>
                      <button className={`px-3 py-1 rounded-md text-sm ${service.connected ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                        {service.connected ? 'Connected' : 'Connect'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        case 4:
          return (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Set Your Preferences</h3>
              <p className="text-gray-600">Customize your experience with these settings.</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Notifications</h4>
                  <div className="space-y-3">
                    {[
                      { label: 'Email notifications', desc: 'Receive updates via email' },
                      { label: 'Push notifications', desc: 'Get browser notifications' },
                      { label: 'Weekly digest', desc: 'Summary of your activity' }
                    ].map((pref) => (
                      <label key={pref.label} className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                        <div>
                          <div className="font-medium">{pref.label}</div>
                          <div className="text-sm text-gray-600">{pref.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Privacy</h4>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input type="radio" name="privacy" className="text-green-600 focus:ring-green-500" />
                      <span>🌍 Public - Visible to everyone</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="radio" name="privacy" className="text-green-600 focus:ring-green-500" defaultChecked />
                      <span>👥 Friends - Visible to connections only</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="radio" name="privacy" className="text-green-600 focus:ring-green-500" />
                      <span>🔒 Private - Only visible to you</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          );
        case 5:
          return (
            <div className="text-center space-y-6">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={48} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">You're All Set!</h3>
              <p className="text-gray-600 text-lg">
                Your profile has been successfully configured. Welcome to our platform!
              </p>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">What's Next?</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Explore the dashboard</li>
                  <li>• Connect with team members</li>
                  <li>• Start your first project</li>
                  <li>• Check out our help documentation</li>
                </ul>
              </div>
              <button className="px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium">
                Go to Dashboard
              </button>
            </div>
          );
        default:
          return null;
      }
    };
    
    return (
      <div className="flex gap-8 max-w-6xl mx-auto">
        <div className="w-64 flex-shrink-0">
          <div className="sticky top-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Onboarding Process</h2>
            <Stepper
              steps={onboardingSteps}
              activeStep={activeStep}
              direction="vertical"
              color="green"
              onStepClick={setActiveStep}
            />
          </div>
        </div>
        
        <div className="flex-1 min-h-96">
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            {getStepContent()}
            
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                disabled={activeStep === 1}
                className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
              >
                Previous
              </button>
              <button
                onClick={() => setActiveStep(Math.min(onboardingSteps.length, activeStep + 1))}
                disabled={activeStep === onboardingSteps.length}
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {activeStep === onboardingSteps.length ? 'Complete' : 'Continue'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// =================== STORY: COLOR THEMES ===================
export const ColorThemes: Story = {
  name: '🎨 Color Themes & Semantic Meaning',
  parameters: {
    docs: {
      description: {
        story: `
### Five Semantic Color Themes

Each color theme conveys different meaning and is appropriate for different use cases and user contexts.

**Available Themes:**
- **Blue (Default)**: Professional, trustworthy, standard workflows
- **Green**: Success, completion, positive outcomes, environmental themes
- **Indigo**: Modern, tech-focused, premium interfaces, innovation
- **Red**: Critical processes, urgent workflows, error states, attention-required
- **Yellow**: Warning states, caution processes, attention highlights

**Implementation:**
\`\`\`tsx
<Stepper color="green" steps={steps} activeStep={3} />
<Stepper color="red" steps={steps} activeStep={1} />
<Stepper color="indigo" steps={steps} activeStep={2} />
\`\`\`

**Choosing the Right Color:**
- Consider the context and user emotions
- Match your brand or application theme
- Use semantic meaning to guide users
- Maintain consistency across related workflows
        `
      }
    }
  },
  render: () => {
    const colors = ['blue', 'green', 'indigo', 'red', 'yellow'] as const;
    const [activeSteps, setActiveSteps] = useState<Record<string, number>>({
      blue: 2,
      green: 4,
      indigo: 1,
      red: 2,
      yellow: 3
    });
    
    const colorDescriptions = {
      blue: {
        name: 'Blue - Professional',
        description: 'Trust, reliability, business applications',
        useCase: 'Standard workflows, professional interfaces, corporate applications',
        examples: ['User registration', 'Account setup', 'Business processes']
      },
      green: {
        name: 'Green - Success',
        description: 'Growth, achievement, positive outcomes',
        useCase: 'Success flows, completion processes, positive feedback',
        examples: ['Order completion', 'Achievement progress', 'Environmental apps']
      },
      indigo: {
        name: 'Indigo - Modern',
        description: 'Innovation, sophistication, premium feel',
        useCase: 'Tech interfaces, premium features, modern applications',
        examples: ['Software setup', 'Premium onboarding', 'Developer tools']
      },
      red: {
        name: 'Red - Critical',
        description: 'Attention, importance, critical actions',
        useCase: 'Critical processes, error states, urgent workflows',
        examples: ['Security setup', 'Critical updates', 'Emergency procedures']
      },
      yellow: {
        name: 'Yellow - Caution',
        description: 'Attention, caution, highlights',
        useCase: 'Warning states, attention-needed processes',
        examples: ['Warning flows', 'Caution processes', 'Alert systems']
      }
    };
    
    return (
      <div className="space-y-12 max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Color Themes & Semantic Meaning</h1>
          <p className="text-gray-600 text-lg">Choose the right color to convey the appropriate meaning and emotion</p>
        </div>
        
        <div className="space-y-8">
          {colors.map(color => (
            <div key={color} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-4 h-4 rounded-full bg-${color}-500`}></div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {colorDescriptions[color].name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-3">{colorDescriptions[color].description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-1">Best Use Cases:</h4>
                    <p className="text-sm text-gray-600">{colorDescriptions[color].useCase}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {colorDescriptions[color].examples.map((example, index) => (
                        <span key={index} className={`px-2 py-1 bg-${color}-50 text-${color}-700 text-xs rounded-full`}>
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-96">
                  <div className="space-y-3">
                    <Stepper
                      steps={basicSteps}
                      activeStep={activeSteps[color]}
                      color={color}
                      direction="horizontal"
                      onStepClick={(step) => setActiveSteps(prev => ({ ...prev, [color]: step }))}
                    />
                    
                    <div className="flex justify-center gap-1">
                      {basicSteps.map((_, index) => (
                        <button
                          key={index + 1}
                          onClick={() => setActiveSteps(prev => ({ ...prev, [color]: index + 1 }))}
                          className={`w-8 h-8 rounded-full text-xs font-medium transition-colors ${
                            activeSteps[color] === index + 1
                              ? `bg-${color}-500 text-white`
                              : `bg-gray-200 text-gray-600 hover:bg-gray-300`
                          }`}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Color Selection Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Consider Context</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <Target size={16} className="text-blue-500 mt-0.5" />
                  <span>Match the emotional tone of your process</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target size={16} className="text-blue-500 mt-0.5" />
                  <span>Consider cultural color associations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target size={16} className="text-blue-500 mt-0.5" />
                  <span>Align with your brand guidelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target size={16} className="text-blue-500 mt-0.5" />
                  <span>Ensure accessibility and contrast</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Best Practices</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-500 mt-0.5" />
                  <span>Use blue for most standard workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-500 mt-0.5" />
                  <span>Reserve red for truly critical processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-500 mt-0.5" />
                  <span>Use green for completion and success flows</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-500 mt-0.5" />
                  <span>Maintain consistency within user sessions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// =================== STORY: REAL WORLD EXAMPLES ===================
export const RealWorldExamples: Story = {
  name: '🌍 Real-World Examples',
  parameters: {
    docs: {
      description: {
        story: `
### Production-Ready Implementation Examples

Real-world scenarios showing how to implement steppers in common application workflows with proper validation, error handling, and user experience patterns.

**Examples Include:**
- **E-commerce Checkout**: Multi-step purchase flow with payment processing
- **User Onboarding**: Account setup with profile configuration
- **Order Tracking**: Read-only status display with time progression
- **Form Wizard**: Complex data collection with validation

**Key Features:**
- Realistic data and validation patterns
- Error state handling
- Progress persistence
- Mobile-responsive design
- Accessibility compliance
        `
      }
    }
  },
  render: () => {
    return (
      <div className="space-y-16 max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Real-World Implementation Examples</h1>
          <p className="text-gray-600 text-lg">Production-ready patterns for common application workflows</p>
        </div>
        
        {/* E-commerce Checkout Example */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <CreditCard size={24} className="text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">E-commerce Checkout Process</h2>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <Stepper
              steps={checkoutSteps}
              activeStep={3}
              direction="horizontal"
              color="green"
            />
            
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-lg font-semibold">Payment Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                    <input 
                      type="text" 
                      placeholder="1234 5678 9012 3456"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                      <input 
                        type="text" 
                        placeholder="MM/YY"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                      <input 
                        type="text" 
                        placeholder="123"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Order Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$89.97</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>$5.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>$7.68</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$103.64</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Order Tracking Example */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Download size={24} className="text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">Order Status Tracking</h2>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-semibold">Order #ORD-2024-001</h3>
                <p className="text-gray-600">Placed on March 15, 2024</p>
              </div>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                In Transit
              </span>
            </div>
            
            <Stepper
              steps={orderSteps}
              activeStep={3}
              direction="horizontal"
              color="indigo"
            />
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { status: 'Order Placed', time: 'Mar 15, 2:30 PM', completed: true },
                { status: 'Processing', time: 'Mar 15, 4:15 PM', completed: true },
                { status: 'Shipped', time: 'Mar 16, 9:00 AM', completed: true },
                { status: 'Delivered', time: 'Estimated Mar 18', completed: false }
              ].map((step, index) => (
                <div key={index} className={`p-4 rounded-lg ${step.completed ? 'bg-indigo-50' : 'bg-gray-50'}`}>
                  <div className={`font-medium ${step.completed ? 'text-indigo-900' : 'text-gray-700'}`}>
                    {step.status}
                  </div>
                  <div className={`text-sm ${step.completed ? 'text-indigo-600' : 'text-gray-500'}`}>
                    {step.time}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-blue-600" />
                <div>
                  <p className="font-medium text-blue-900">Your package is on its way!</p>
                  <p className="text-sm text-blue-700">Tracking: 1Z999AA1234567890</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Form Wizard Example */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <FileCheck size={24} className="text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Multi-Step Form Wizard</h2>
          </div>
          
          <FormWizardExample />
        </section>
      </div>
    );
  },
};

// Helper component for the form wizard example
const FormWizardExample = () => {
  // ✅ Fix: Explicitly type the formData state
  interface FormData {
    company: string;
    industry: string;
    size: string;
    goals: string[];
    budget: string;
    timeline: string;
  }

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    company: '',
    industry: '',
    size: '',
    goals: [], // Now properly typed as string[]
    budget: '',
    timeline: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const wizardSteps = [
    { step: 1, label: 'Company Info' },
    { step: 2, label: 'Requirements' },
    { step: 3, label: 'Budget & Timeline' },
    { step: 4, label: 'Review & Submit' }
  ];
  
  const validateCurrentStep = () => {
    const newErrors: Record<string, string> = {};
    
    if (currentStep === 1) {
      if (!formData.company) newErrors.company = 'Company name is required';
      if (!formData.industry) newErrors.industry = 'Industry is required';
      if (!formData.size) newErrors.size = 'Company size is required';
    } else if (currentStep === 2) {
      if (formData.goals.length === 0) newErrors.goals = 'At least one goal is required';
    } else if (currentStep === 3) {
      if (!formData.budget) newErrors.budget = 'Budget range is required';
      if (!formData.timeline) newErrors.timeline = 'Timeline is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleNext = () => {
    if (validateCurrentStep() && currentStep < wizardSteps.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  // ✅ Fix: Helper function for toggling goals
  const toggleGoal = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal) 
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Tell us about your company</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 ${errors.company ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Industry *</label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
                  className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 ${errors.industry ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select Industry</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="retail">Retail</option>
                  <option value="other">Other</option>
                </select>
                {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Size *</label>
                <div className="grid grid-cols-2 gap-3">
                  {['1-10', '11-50', '51-200', '200+'].map(size => (
                    <label key={size} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="size"
                        value={size}
                        checked={formData.size === size}
                        onChange={(e) => setFormData(prev => ({ ...prev, size: e.target.value }))}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span>{size} employees</span>
                    </label>
                  ))}
                </div>
                {errors.size && <p className="text-red-500 text-sm mt-1">{errors.size}</p>}
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">What are your main goals?</h3>
            <div className="space-y-3">
              {[
                'Increase sales and revenue',
                'Improve customer experience',
                'Streamline operations',
                'Expand market reach',
                'Reduce costs',
                'Digital transformation'
              ].map(goal => (
                <label key={goal} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.goals.includes(goal)}
                    onChange={() => toggleGoal(goal)} // ✅ Now properly typed
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span>{goal}</span>
                </label>
              ))}
            </div>
            {errors.goals && <p className="text-red-500 text-sm mt-1">{errors.goals}</p>}
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Budget and Timeline</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Budget Range *</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                  className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 ${errors.budget ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select Budget Range</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="over-100k">Over $100,000</option>
                </select>
                {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Timeline *</label>
                <div className="grid grid-cols-2 gap-3">
                  {['ASAP', '1-3 months', '3-6 months', '6+ months'].map(timeline => (
                    <label key={timeline} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="timeline"
                        value={timeline}
                        checked={formData.timeline === timeline}
                        onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span>{timeline}</span>
                    </label>
                  ))}
                </div>
                {errors.timeline && <p className="text-red-500 text-sm mt-1">{errors.timeline}</p>}
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Review Your Information</h3>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">Company Information</h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li><strong>Company:</strong> {formData.company}</li>
                  <li><strong>Industry:</strong> {formData.industry}</li>
                  <li><strong>Size:</strong> {formData.size} employees</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900">Goals</h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  {formData.goals.map((goal, index) => (
                    <li key={index}>• {goal}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900">Budget & Timeline</h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li><strong>Budget:</strong> {formData.budget}</li>
                  <li><strong>Timeline:</strong> {formData.timeline}</li>
                </ul>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <Stepper
        steps={wizardSteps}
        activeStep={currentStep}
        direction="horizontal"
        color="blue"
        onStepClick={(step) => {
          if (step <= currentStep) {
            setCurrentStep(step);
          }
        }}
      />
      
      <div className="mt-8 min-h-80">
        {renderStepContent()}
      </div>
      
      <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
        <button
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
          className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
        >
          Previous
        </button>
        <button
          onClick={currentStep === wizardSteps.length ? () => alert('Form submitted!') : handleNext}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          {currentStep === wizardSteps.length ? 'Submit' : 'Next'}
          {currentStep !== wizardSteps.length && <ArrowRight size={16} />}
        </button>
      </div>
    </div>
  );
};

// =================== STORY: ACCESSIBILITY FEATURES ===================
export const AccessibilityFeatures: Story = {
  name: '♿ Accessibility & Testing',
  parameters: {
    docs: {
      description: {
        story: `
### WCAG 2.1 AA Compliant Implementation

Comprehensive accessibility features ensure the stepper works for all users, including those using assistive technologies.

**Accessibility Features:**
- Proper ARIA roles and semantic markup
- Screen reader announcements for step changes
- Keyboard navigation support when interactive
- High contrast mode compatibility
- Color-independent information conveyance
- Focus management and clear focus indicators

**Testing Guidelines:**
- Screen reader compatibility (NVDA, JAWS, VoiceOver)
- Keyboard navigation testing
- High contrast mode verification
- Color blindness simulation
- Mobile accessibility validation

**ARIA Implementation:**
- Semantic step structure with proper roles
- Step state announcements
- Progress information for assistive technology
- Error state communication when integrated with forms
        `
      }
    }
  },
  render: () => (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Accessibility & Testing</h1>
        <p className="text-gray-600 text-lg">Built for everyone, tested for compliance</p>
      </div>
      
      {/* Accessible Stepper Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Accessible Implementation Examples</h2>
        
        <div className="space-y-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Screen Reader Friendly Stepper</h3>
            <Stepper
              steps={basicSteps}
              activeStep={2}
              direction="horizontal"
              color="blue"
              onStepClick={() => {}}
            />
            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Screen Reader Output:</strong> "Step 2 of 4: Personal Info, current step. Account Details, completed step. Verification, step 3 of 4. Complete, step 4 of 4."
              </p>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Keyboard Navigation Example</h3>
            <Stepper
              steps={checkoutSteps}
              activeStep={3}
              direction="horizontal"
              color="green"
              onStepClick={() => {}}
            />
            <div className="mt-4 bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-800 mb-2">
                <strong>Keyboard Navigation:</strong>
              </p>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• <kbd className="bg-gray-200 px-2 py-1 rounded text-xs">Tab</kbd> - Navigate between interactive steps</li>
                <li>• <kbd className="bg-gray-200 px-2 py-1 rounded text-xs">Enter</kbd> or <kbd className="bg-gray-200 px-2 py-1 rounded text-xs">Space</kbd> - Activate step navigation</li>
                <li>• <kbd className="bg-gray-200 px-2 py-1 rounded text-xs">Escape</kbd> - Cancel navigation (if applicable)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Accessibility Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
            <Shield size={24} className="text-blue-600" />
            WCAG 2.1 AA Compliance
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>Semantic HTML:</strong> Proper step structure with meaningful markup</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>ARIA Implementation:</strong> Complete role definitions and state management</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>Color Independence:</strong> Information conveyed beyond color alone</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>High Contrast:</strong> Compatible with high contrast mode</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
            <Bell size={24} className="text-green-600" />
            Assistive Technology
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>Screen Readers:</strong> Full compatibility with NVDA, JAWS, VoiceOver</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>Progress Announcements:</strong> Real-time step change notifications</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>Voice Control:</strong> Compatible with voice navigation software</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>Switch Navigation:</strong> Works with switch-based input devices</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
            <Zap size={24} className="text-purple-600" />
            Motor & Vision Support
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>Large Touch Targets:</strong> Minimum 44px touch targets for mobile</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>Focus Indicators:</strong> Clear visual focus states</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>Zoom Support:</strong> Usable at 200% zoom level</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>Motion Respect:</strong> Honors reduced motion preferences</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
            <Target size={24} className="text-orange-600" />
            Testing & Validation
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>Automated Testing:</strong> Passes axe-core accessibility tests</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>Manual Testing:</strong> Verified with real assistive technology</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>User Testing:</strong> Validated with users with disabilities</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>Continuous Monitoring:</strong> Regular accessibility audits</span>
            </li>
          </ul>
        </div>
      </section>
      
      {/* Testing Checklist */}
      <section className="bg-yellow-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-yellow-900 mb-6">Accessibility Testing Checklist</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-yellow-800 mb-3">Screen Reader Testing</h4>
            <div className="space-y-2">
              {[
                'Step progression announced correctly',
                'Current step clearly identified',
                'Completed steps indicated properly',
                'Interactive steps navigable',
                'Error states communicated clearly'
              ].map((test, index) => (
                <label key={index} className="flex items-center gap-2 text-sm text-yellow-700">
                  <input type="checkbox" className="rounded border-yellow-400 text-yellow-600" />
                  <span>{test}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-yellow-800 mb-3">Keyboard & Visual Testing</h4>
            <div className="space-y-2">
              {[
                'All interactive elements keyboard accessible',
                'Focus indicators clearly visible',
                'High contrast mode compatibility verified',
                'Component usable at 200% zoom',
                'Reduced motion preferences respected'
              ].map((test, index) => (
                <label key={index} className="flex items-center gap-2 text-sm text-yellow-700">
                  <input type="checkbox" className="rounded border-yellow-400 text-yellow-600" />
                  <span>{test}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Implementation Example */}
      <section className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessible Implementation Code</h3>
        <pre className="text-sm bg-white p-4 rounded-lg overflow-x-auto border">
{`<Stepper
  steps={[
    { step: 1, label: 'Personal Information' },
    { step: 2, label: 'Contact Details' },
    { step: 3, label: 'Review & Submit' }
  ]}
  activeStep={currentStep}
  direction="horizontal"
  color="blue"
  onStepClick={handleStepNavigation}
  
  // Accessibility enhancements
  aria-label="Registration progress"
  role="navigation"
  
  // The component automatically provides:
  // - Proper ARIA roles for each step
  // - Step state announcements
  // - Keyboard navigation support
  // - Focus management
  // - Screen reader compatibility
/>`}
        </pre>
      </section>
    </div>
  ),
};
