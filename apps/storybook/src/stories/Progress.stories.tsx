import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { 
  Loader,
  CheckCircle,
  AlertCircle,
  Wifi,
  Volume2,
  HardDrive,
  Activity,
  Settings,
  Info,
  Target,
} from 'lucide-react';
import { ProgressBar } from '@sume/ui/components/ProgessBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `


**Professional, accessible progress indicator built with comprehensive features for determinate and indeterminate progress states.**

The ProgressBar component provides a robust foundation for displaying progress with support for multiple visual variants, label positioning, animations, and comprehensive accessibility features.

## 🎯 When to Use ProgressBar

### ✅ Perfect Use Cases
- **File Operations**: Downloads, uploads, file processing with real-time progress
- **Loading States**: Data fetching, API calls, content loading with determinate progress
- **Form Completion**: Multi-step forms, profile completion, onboarding progress
- **System Metrics**: CPU usage, memory consumption, disk space, battery level
- **Task Progress**: Installation progress, sync operations, batch processing
- **Skill Levels**: User proficiency, completion rates, achievement progress

### ❌ Avoid Using When
- Simple loading states without progress indication (use spinner instead)
- Binary states (complete/incomplete) without intermediate progress
- Very short operations (< 1 second) where progress would be distracting
- Complex multi-dimensional progress (consider custom visualization)

## ✨ Key Features

### Core Functionality
- **Determinate Progress**: Precise progress indication with percentage values (0-100%)
- **Indeterminate Progress**: Animated loading state for unknown duration tasks
- **Custom Range**: Support for custom min/max values beyond 0-100
- **Value Clamping**: Automatic value validation with development warnings
- **Accessibility First**: WCAG 2.1 AA compliant with screen reader support
- **Animation Control**: Smooth transitions with reduced motion support

### Advanced Features
- **Multiple Variants**: 5 distinct visual styles (solid, soft, outline, gradient, striped)
- **Flexible Labeling**: 4 label positions (left, center, right, inside) with custom content
- **Color Theming**: 5 semantic color themes with dark mode support
- **Size Options**: 3 size variants for different interface contexts
- **Remaining Progress**: Option to show remaining vs completed percentage
- **Track Customization**: Hide track for minimal designs
- **Performance Optimized**: Efficient animations with hardware acceleration

## 🎨 Visual Variants

### Solid Variant
- **Appearance**: Traditional solid color progress bar with clean background
- **Use Case**: Standard progress indication, file operations, general purpose
- **Best For**: Most common use cases requiring clear progress visualization

### Soft Variant  
- **Appearance**: Subtle background with softer color palette
- **Use Case**: Dashboard widgets, gentle progress indication
- **Best For**: Interfaces requiring less visual emphasis on progress

### Outline Variant
- **Appearance**: Bordered progress bar with transparent background
- **Use Case**: Minimal designs, overlay progress, cards
- **Best For**: Clean, modern interfaces where subtlety is preferred

### Gradient Variant
- **Appearance**: Beautiful gradient fill with smooth color transitions
- **Use Case**: Premium interfaces, featured progress, visual emphasis
- **Best For**: Marketing pages, premium features, eye-catching progress

### Striped Variant
- **Appearance**: Animated diagonal stripes for dynamic feel
- **Use Case**: Active processing, live operations, engaging feedback
- **Best For**: Operations in progress, active states, dynamic content

## 📏 Size Options

### Small (sm)
- **Height**: 8px (h-2)
- **Use Case**: Compact interfaces, table rows, card footers, mobile space-constrained areas
- **Typography**: Extra small text (10px) for inside labels

### Medium (md) - Default
- **Height**: 12px (h-3)
- **Use Case**: Standard forms, dashboard widgets, general purpose progress
- **Typography**: Small text (14px) for balanced readability

### Large (lg)
- **Height**: 16px (h-4)
- **Use Case**: Prominent progress, main content areas, accessibility needs
- **Typography**: Small text (14px) with better visibility for inside labels

## 🎨 Color Themes

### Primary (Blue)
- **Use Case**: Default progress, system operations, general tasks
- **Psychology**: Trust, reliability, professional

### Success (Green)
- **Use Case**: Completion states, successful operations, positive metrics
- **Psychology**: Success, growth, positive outcomes

### Warning (Amber)
- **Use Case**: Cautionary progress, resource usage warnings, attention needed
- **Psychology**: Caution, attention, moderate concern

### Danger (Red)
- **Use Case**: Critical operations, error states, high resource usage
- **Psychology**: Urgency, critical states, requires attention

### Neutral (Gray)
- **Use Case**: Inactive states, background processes, subtle indication
- **Psychology**: Neutral, secondary, understated

## 📍 Label Positioning

### Outside Positioning
- **Left**: Label and percentage aligned to the left of the progress bar
- **Center**: Label and percentage centered above the progress bar
- **Right**: Label and percentage aligned to the right (default)

### Inside Positioning
- **Inside**: Label and percentage overlaid within the progress bar
- **Best For**: Space-constrained interfaces, clean layouts
- **Accessibility**: Maintains proper contrast with drop shadows

## ♿ Accessibility Features

### WCAG 2.1 AA Compliance
- **Screen Reader Support**: Proper ARIA roles and properties
- **Progress Announcements**: Real-time progress updates for assistive technology
- **Semantic HTML**: Proper \`role="progressbar"\` with value attributes
- **Keyboard Support**: Focusable with clear focus indicators when interactive
- **High Contrast**: Works with high contrast mode and color blindness
- **Reduced Motion**: Respects user motion preferences

### Advanced Accessibility
- **Value Range**: Clear aria-valuemin and aria-valuemax communication
- **Indeterminate States**: Proper aria-valuetext for unknown progress
- **Screen Reader Text**: Hidden descriptive text when needed
- **Color Independence**: Information conveyed beyond color alone
- **Focus Management**: Clear focus indicators when progress is interactive

## 🚀 Performance Features

### Optimization Strategies
- **Efficient Animations**: CSS transforms for hardware acceleration
- **Conditional Rendering**: Only renders necessary elements
- **Value Clamping**: Client-side validation prevents invalid states
- **Bundle Size**: ~3KB gzipped for full feature set
- **Memory Efficient**: Minimal DOM manipulation and event listeners

### Animation Performance
- **Smooth Transitions**: 300ms width transitions with easing
- **Hardware Acceleration**: GPU-accelerated animations
- **Reduced Motion**: Automatic detection and respect for user preferences
- **Frame Rate**: Optimized for 60fps performance across devices

## 📚 Implementation Examples

### Basic File Upload Progress
\`\`\`tsx
import { ProgressBar } from '@astra/ui/components/ProgressBar';

function FileUploadProgress() {
  const [progress, setProgress] = useState(0);
  
  return (
    <ProgressBar
      value={progress}
      label="Uploading document.pdf"
      showPercentage={true}
      variant="solid"
      color="primary"
      size="md"
    />
  );
}
\`\`\`

### Indeterminate Loading State
\`\`\`tsx
function LoadingProgress() {
  return (
    <ProgressBar
      indeterminate={true}
      label="Processing your request"
      variant="striped"
      color="primary"
      animated={true}
      ariaLabel="Processing request, please wait"
    />
  );
}
\`\`\`

### System Resource Monitor
\`\`\`tsx
function SystemMonitor() {
  const [cpuUsage, setCpuUsage] = useState(65);
  const [memoryUsage, setMemoryUsage] = useState(78);
  const [diskUsage, setDiskUsage] = useState(45);
  
  return (
    <div className="space-y-4">
      <ProgressBar
        value={cpuUsage}
        label="CPU Usage"
        showPercentage={true}
        variant="solid"
        color={cpuUsage > 80 ? "danger" : cpuUsage > 60 ? "warning" : "success"}
        size="sm"
      />
      
      <ProgressBar
        value={memoryUsage}
        label="Memory"
        showPercentage={true}
        variant="solid"
        color={memoryUsage > 85 ? "danger" : memoryUsage > 70 ? "warning" : "success"}
        size="sm"
      />
      
      <ProgressBar
        value={diskUsage}
        label="Disk Space"
        showPercentage={true}
        variant="solid"
        color="neutral"
        size="sm"
      />
    </div>
  );
}
\`\`\`

### Profile Completion with Inside Label
\`\`\`tsx
function ProfileCompletion() {
  const [completion, setCompletion] = useState(68);
  
  return (
    <ProgressBar
      value={completion}
      label="Profile Complete"
      showPercentage={true}
      labelPosition="inside"
      variant="gradient"
      color="success"
      size="lg"
      rounded={true}
    />
  );
}
\`\`\`

### Multi-Step Form Progress
\`\`\`tsx
function FormProgress() {
  const [currentStep, setCurrentStep] = useState(2);
  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <ProgressBar
      value={progress}
      label={\`Step \${currentStep} of \${totalSteps}\`}
      labelPosition="center"
      variant="soft"
      color="primary"
      size="md"
      min={0}
      max={100}
    />
  );
}
\`\`\`

### Custom Range Progress
\`\`\`tsx
function ScoreProgress() {
  const [score, setScore] = useState(750);
  const minScore = 300;
  const maxScore = 850;
  
  return (
    <ProgressBar
      value={score}
      min={minScore}
      max={maxScore}
      label="Credit Score"
      showPercentage={false}
      labelPosition="right"
      variant="gradient"
      color="success"
      size="lg"
    />
  );
}
\`\`\`

### Animated Progress with Controls
\`\`\`tsx
function InteractiveProgress() {
  const [progress, setProgress] = useState(25);
  const [isAnimated, setIsAnimated] = useState(true);
  
  const increaseProgress = () => {
    setProgress(prev => Math.min(prev + 10, 100));
  };
  
  const decreaseProgress = () => {
    setProgress(prev => Math.max(prev - 10, 0));
  };
  
  return (
    <div className="space-y-4">
      <ProgressBar
        value={progress}
        label="Interactive Progress"
        showPercentage={true}
        variant="solid"
        color="primary"
        animated={isAnimated}
      />
      
      <div className="flex gap-2">
        <button onClick={decreaseProgress}>Decrease</button>
        <button onClick={increaseProgress}>Increase</button>
        <button onClick={() => setIsAnimated(!isAnimated)}>
          {isAnimated ? 'Disable' : 'Enable'} Animation
        </button>
      </div>
    </div>
  );
}
\`\`\`

### Remaining vs Completed Progress
\`\`\`tsx
function RemainingProgress() {
  const [downloaded, setDownloaded] = useState(75);
  
  return (
    <div className="space-y-4">
      <ProgressBar
        value={downloaded}
        label="Downloaded"
        showPercentage={true}
        showRemaining={false}
        variant="solid"
        color="success"
      />
      
      <ProgressBar
        value={downloaded}
        label="Remaining"
        showPercentage={true}
        showRemaining={true}
        variant="outline"
        color="warning"
      />
    </div>
  );
}
\`\`\`

## 🧪 Testing Strategies

### Unit Testing
\`\`\`typescript
import { render, screen } from '@testing-library/react';
import { ProgressBar } from './ProgressBar';

describe('ProgressBar Component', () => {
  it('should render with correct progress value', () => {
    render(<ProgressBar value={50} ariaLabel="Test progress" />);
    
    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('aria-valuenow', '50');
    expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    expect(progressbar).toHaveAttribute('aria-valuemax', '100');
  });
  
  it('should clamp values outside range', () => {
    render(<ProgressBar value={150} ariaLabel="Test progress" />);
    
    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('aria-valuenow', '100');
  });
  
  it('should handle indeterminate state', () => {
    render(<ProgressBar indeterminate ariaLabel="Loading" />);
    
    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('aria-valuetext', 'Loading');
    expect(progressbar).not.toHaveAttribute('aria-valuenow');
  });
  
  it('should display percentage when enabled', () => {
    render(<ProgressBar value={75} showPercentage label="Test" />);
    
    expect(screen.getByText('75%')).toBeInTheDocument();
  });
  
  it('should show remaining percentage when enabled', () => {
    render(
      <ProgressBar 
        value={30} 
        showPercentage 
        showRemaining 
        label="Remaining" 
      />
    );
    
    expect(screen.getByText('70%')).toBeInTheDocument();
  });
  
  it('should be accessible', async () => {
    const { container } = render(
      <ProgressBar value={50} label="Accessible progress" />
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
\`\`\`

### Integration Testing
\`\`\`typescript
describe('ProgressBar Integration', () => {
  it('should work with custom ranges', () => {
    render(
      <ProgressBar 
        value={750} 
        min={300} 
        max={850} 
        ariaLabel="Credit Score" 
      />
    );
    
    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('aria-valuemin', '300');
    expect(progressbar).toHaveAttribute('aria-valuemax', '850');
    expect(progressbar).toHaveAttribute('aria-valuenow', '750');
  });
  
  it('should handle dynamic value updates', async () => {
    const TestComponent = () => {
      const [value, setValue] = useState(0);
      
      useEffect(() => {
        const timer = setTimeout(() => setValue(50), 100);
        return () => clearTimeout(timer);
      }, []);
      
      return <ProgressBar value={value} ariaLabel="Dynamic progress" />;
    };
    
    render(<TestComponent />);
    
    await waitFor(() => {
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '50');
    });
  });
});
\`\`\`

## 🎛️ Advanced Configuration

### Custom Animations
\`\`\`typescript
// Add to your tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        indeterminate: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        barberpole: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '2rem 0' },
        },
      },
      animation: {
        indeterminate: 'indeterminate 1.2s infinite linear',
        barberpole: 'barberpole 2s linear infinite',
      },
    },
  },
};
\`\`\`

### Theme Customization
\`\`\`css
:root {
  --progress-primary: #3b82f6;
  --progress-primary-bg: #dbeafe;
  --progress-success: #10b981;
  --progress-success-bg: #d1fae5;
  --progress-warning: #f59e0b;
  --progress-warning-bg: #fef3c7;
  --progress-danger: #ef4444;
  --progress-danger-bg: #fee2e2;
  --progress-neutral: #6b7280;
  --progress-neutral-bg: #f3f4f6;
}

.dark {
  --progress-primary: #60a5fa;
  --progress-primary-bg: #1e3a8a;
  --progress-success: #34d399;
  --progress-success-bg: #064e3b;
  --progress-warning: #fbbf24;
  --progress-warning-bg: #78350f;
  --progress-danger: #f87171;
  --progress-danger-bg: #7f1d1d;
  --progress-neutral: #9ca3af;
  --progress-neutral-bg: #374151;
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
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: `**Progress value (0-100)**

The current progress value. If undefined and indeterminate is true, shows animated loading state.

\`\`\`tsx
<ProgressBar value={75} />
\`\`\`

**Features:**
- Automatically clamped to [min, max] range
- Development warnings for out-of-bounds values
- Supports custom ranges with min/max props`,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    indeterminate: {
      control: 'boolean',
      description: `**Enable indeterminate animation**

Shows animated loading state for operations with unknown duration.

\`\`\`tsx
<ProgressBar indeterminate={true} />
\`\`\`

**Use Cases:**
- Data fetching without progress tracking
- Initial loading states
- Background processing tasks
- Network requests with unknown duration`,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    variant: {
      control: 'select',
      options: ['solid', 'soft', 'outline', 'gradient', 'striped'],
      description: `**Visual style variant**

### Solid
- **Appearance**: Traditional solid color with background
- **Use Case**: Standard progress, general purpose

### Soft  
- **Appearance**: Gentle colors with subtle background
- **Use Case**: Dashboard widgets, minimal emphasis

### Outline
- **Appearance**: Bordered with transparent background
- **Use Case**: Clean designs, overlay progress

### Gradient
- **Appearance**: Beautiful gradient transitions
- **Use Case**: Premium interfaces, visual emphasis

### Striped
- **Appearance**: Animated diagonal stripes
- **Use Case**: Active processing, dynamic feedback

\`\`\`tsx
<ProgressBar variant="gradient" value={75} />
\`\`\``,
      table: {
        type: { summary: "'solid' | 'soft' | 'outline' | 'gradient' | 'striped'" },
        defaultValue: { summary: "'solid'" },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: `**Size variant affecting height and typography**

### Small (sm)
- **Height**: 8px, compact for space-constrained areas
- **Use Case**: Table rows, card footers, mobile interfaces

### Medium (md)
- **Height**: 12px, balanced for general use
- **Use Case**: Standard forms, dashboard widgets

### Large (lg)
- **Height**: 16px, prominent for main content
- **Use Case**: Featured progress, accessibility needs

\`\`\`tsx
<ProgressBar size="lg" value={50} />
\`\`\``,
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: "'md'" },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger', 'neutral'],
      description: `**Color theme with semantic meaning**

### Primary (Blue)
- **Use Case**: Default progress, system operations
- **Psychology**: Trust, reliability, professional

### Success (Green)
- **Use Case**: Completion states, positive metrics
- **Psychology**: Success, growth, achievement

### Warning (Amber)
- **Use Case**: Cautionary states, resource warnings
- **Psychology**: Attention, moderate concern

### Danger (Red)
- **Use Case**: Critical operations, error states
- **Psychology**: Urgency, requires immediate attention

### Neutral (Gray)
- **Use Case**: Inactive states, secondary progress
- **Psychology**: Understated, background information

\`\`\`tsx
<ProgressBar color="success" value={100} />
\`\`\``,
      table: {
        type: { summary: "'primary' | 'success' | 'warning' | 'danger' | 'neutral'" },
        defaultValue: { summary: "'primary'" },
      },
    },
    label: {
      control: 'text',
      description: `**Optional label content**

Can be text, React elements, or any renderable content.

\`\`\`tsx
<ProgressBar 
  label="Uploading files..." 
  value={45} 
/>

<ProgressBar 
  label={<span><UploadIcon /> Uploading</span>} 
  value={45} 
/>
\`\`\``,
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    showPercentage: {
      control: 'boolean',
      description: `**Display percentage value**

Shows the progress as a percentage alongside the label.

\`\`\`tsx
<ProgressBar 
  value={75} 
  showPercentage={true}
  label="Processing" 
/>
// Displays: "Processing 75%"
\`\`\``,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'center', 'right', 'inside'],
      description: `**Label positioning**

### Outside Positions
- **left**: Label aligned to left of progress bar
- **center**: Label centered above progress bar  
- **right**: Label aligned to right (default)

### Inside Position
- **inside**: Label overlaid within the progress bar
- Maintains contrast with drop shadows
- Best for space-constrained layouts

\`\`\`tsx
<ProgressBar 
  labelPosition="inside"
  label="Loading"
  showPercentage={true}
  value={60}
/>
\`\`\``,
      table: {
        type: { summary: "'left' | 'center' | 'right' | 'inside'" },
        defaultValue: { summary: "'right'" },
      },
    },
    showRemaining: {
      control: 'boolean',
      description: `**Show remaining vs completed percentage**

When true, displays remaining percentage instead of completed.

\`\`\`tsx
// Shows "25%" (completed)
<ProgressBar value={25} showPercentage />

// Shows "75%" (remaining)
<ProgressBar value={25} showPercentage showRemaining />
\`\`\`

**Use Cases:**
- Download time remaining
- Battery life remaining
- Storage space available`,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    animated: {
      control: 'boolean',
      description: `**Enable smooth animations**

Controls width transitions and stripe animations. Automatically respects user's reduced motion preferences.

\`\`\`tsx
<ProgressBar 
  value={progress}
  animated={true}
  variant="striped"
/>
\`\`\`

**Animation Features:**
- 300ms width transitions with easing
- Striped variant barberpole animation
- Indeterminate sliding animation
- Hardware-accelerated performance`,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    rounded: {
      control: 'boolean',
      description: `**Enable rounded corners**

\`\`\`tsx
<ProgressBar rounded={true} value={50} />
\`\`\``,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    hideTrack: {
      control: 'boolean',
      description: `**Hide background track**

Useful for minimal designs where only the progress bar should be visible.

\`\`\`tsx
<ProgressBar hideTrack={true} value={75} />
\`\`\``,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    min: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'Minimum value for custom ranges',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    max: {
      control: { type: 'number', min: 0, max: 1000 },
      description: 'Maximum value for custom ranges',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      },
    },
    ariaLabel: {
      control: 'text',
      description: `**Accessibility label**

Provide when no visible label exists for screen readers.

\`\`\`tsx
<ProgressBar 
  value={50}
  ariaLabel="File upload progress"
/>
\`\`\``,
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// =================== STORY: BASIC IMPLEMENTATION ===================
export const BasicImplementation: Story = {
  name: '🚀 Basic Implementation',
  parameters: {
    docs: {
      description: {
        story: `
### Quick Start Examples

Simple progress bars for common use cases with clean, accessible implementation.

**Code:**
\`\`\`tsx
// Basic progress with label
<ProgressBar 
  value={45} 
  label="Loading content..." 
  showPercentage={true}
/>

// File upload progress
<ProgressBar 
  value={68} 
  label="Uploading document.pdf"
  showPercentage={true}
  color="primary"
/>
\`\`\`

**Features:**
- Clean, accessible implementation
- Automatic value clamping and validation
- Screen reader friendly with ARIA attributes
- Smooth animations with reduced motion support
        `,
      },
    },
  },
  args: {
    value: 45,
    label: 'Loading content...',
    showPercentage: true,
    variant: 'solid',
    color: 'primary',
    size: 'md',
  },
  render: (args:any) => (
    <div className="space-y-8 max-w-lg mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Basic Progress Examples</h2>
        <p className="text-gray-600">Simple, clean progress indicators</p>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">File Upload Progress</h3>
          <ProgressBar {...args} />
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Download Progress</h3>
          <ProgressBar
            value={78}
            label="Downloading update..."
            showPercentage={true}
            color="success"
          />
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Processing Task</h3>
          <ProgressBar
            value={32}
            label="Processing images"
            showPercentage={true}
            color="warning"
          />
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">Key Features:</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Automatic value validation and clamping</li>
          <li>• Screen reader accessible with ARIA attributes</li>
          <li>• Smooth animations with reduced motion support</li>
          <li>• Semantic color themes for different contexts</li>
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
### Five Distinct Visual Styles

Each variant serves different design needs and user contexts.

**Solid**: Traditional progress bar with solid colors
**Soft**: Gentle appearance with subtle backgrounds  
**Outline**: Clean border-only design for minimal interfaces
**Gradient**: Beautiful color transitions for premium feel
**Striped**: Animated stripes for active/dynamic states

**Implementation:**
\`\`\`tsx
<ProgressBar variant="solid" value={75} />
<ProgressBar variant="gradient" value={75} />
<ProgressBar variant="striped" value={75} animated />
\`\`\`
        `,
      },
    },
  },
  render: () => (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Visual Variants</h1>
        <p className="text-gray-600">Five distinct styles for different design needs</p>
      </div>

      {/* Solid Variant */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <h2 className="text-xl font-bold text-gray-900">Solid Variant</h2>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">Traditional</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <ProgressBar variant="solid" color="primary" value={75} label="Primary Progress" showPercentage />
            <ProgressBar variant="solid" color="success" value={90} label="Success State" showPercentage />
            <ProgressBar variant="solid" color="warning" value={65} label="Warning Level" showPercentage />
            <ProgressBar variant="solid" color="danger" value={85} label="Critical Usage" showPercentage />
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-900 mb-2">Best For:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Standard progress indication</li>
              <li>• File operations and downloads</li>
              <li>• System resource monitoring</li>
              <li>• General purpose progress bars</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gradient Variant */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          <h2 className="text-xl font-bold text-gray-900">Gradient Variant</h2>
          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">Premium</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <ProgressBar variant="gradient" color="primary" value={82} label="Profile Complete" showPercentage />
            <ProgressBar variant="gradient" color="success" value={100} label="Achievement Unlocked" showPercentage />
            <ProgressBar variant="gradient" color="warning" value={45} label="Skill Level" showPercentage />
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-medium text-purple-900 mb-2">Best For:</h3>
            <ul className="text-sm text-purple-800 space-y-1">
              <li>• Premium interfaces and features</li>
              <li>• User achievements and gamification</li>
              <li>• Profile completion indicators</li>
              <li>• Marketing and landing pages</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Striped Variant */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-emerald-600 rounded-full animate-pulse"></div>
          <h2 className="text-xl font-bold text-gray-900">Striped Variant</h2>
          <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-medium">Animated</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <ProgressBar variant="striped" color="primary" value={60} label="Processing Data" showPercentage animated />
            <ProgressBar variant="striped" color="success" value={78} label="Sync in Progress" showPercentage animated />
            <ProgressBar variant="striped" color="warning" indeterminate label="Analyzing..." animated />
          </div>
          <div className="bg-emerald-50 p-4 rounded-lg">
            <h3 className="font-medium text-emerald-900 mb-2">Best For:</h3>
            <ul className="text-sm text-emerald-800 space-y-1">
              <li>• Active processing states</li>
              <li>• Real-time operations</li>
              <li>• Background sync tasks</li>
              <li>• Dynamic, engaging feedback</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Soft and Outline Variants */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 border-2 border-gray-400 rounded-full"></div>
          <h2 className="text-xl font-bold text-gray-900">Soft & Outline Variants</h2>
          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">Minimal</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium text-gray-700 mb-3">Soft Variant</h3>
            <div className="space-y-3">
              <ProgressBar variant="soft" color="primary" value={45} label="Gentle Progress" showPercentage />
              <ProgressBar variant="soft" color="success" value={70} label="Completion Rate" showPercentage />
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-3">Outline Variant</h3>
            <div className="space-y-3">
              <ProgressBar variant="outline" color="primary" value={55} label="Clean Design" showPercentage />
              <ProgressBar variant="outline" color="neutral" value={30} label="Minimal Style" showPercentage />
            </div>
          </div>
        </div>
      </section>

      {/* Variant Comparison */}
      <section className="bg-gray-50 p-6 rounded-xl">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Variant Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold">Variant</th>
                <th className="text-left py-3 px-4 font-semibold">Visual Weight</th>
                <th className="text-left py-3 px-4 font-semibold">Animation</th>
                <th className="text-left py-3 px-4 font-semibold">Best Use Case</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Solid</td>
                <td className="py-3 px-4">Medium</td>
                <td className="py-3 px-4">Width transitions</td>
                <td className="py-3 px-4">General purpose</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Soft</td>
                <td className="py-3 px-4">Light</td>
                <td className="py-3 px-4">Subtle transitions</td>
                <td className="py-3 px-4">Dashboard widgets</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Outline</td>
                <td className="py-3 px-4">Minimal</td>
                <td className="py-3 px-4">Width transitions</td>
                <td className="py-3 px-4">Clean, minimal designs</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Gradient</td>
                <td className="py-3 px-4">High</td>
                <td className="py-3 px-4">Smooth transitions</td>
                <td className="py-3 px-4">Premium interfaces</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Striped</td>
                <td className="py-3 px-4">Dynamic</td>
                <td className="py-3 px-4">Moving stripes</td>
                <td className="py-3 px-4">Active processing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  ),
};

// =================== STORY: LABEL POSITIONING ===================
export const LabelPositioning: Story = {
  name: '📍 Label Positioning',
  parameters: {
    docs: {
      description: {
        story: `
### Flexible Label Placement

Four positioning options to fit different layout needs and space constraints.

**Outside Positions**: Label appears outside the progress bar
- **Left**: Label aligned to left side
- **Center**: Label centered above the progress bar  
- **Right**: Label aligned to right side (default)

**Inside Position**: Label overlaid within the progress bar
- Maintains proper contrast with drop shadows
- Perfect for space-constrained layouts

**Implementation:**
\`\`\`tsx
<ProgressBar 
  labelPosition="inside"
  label="Processing"
  showPercentage={true}
  value={65}
/>
\`\`\`
        `,
      },
    },
  },
  render: () => (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Label Positioning</h1>
        <p className="text-gray-600">Four flexible positioning options for different layouts</p>
      </div>

      {/* Outside Positioning */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Outside Positioning</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Left Position
            </h3>
            <ProgressBar
              value={42}
              label="File Upload Progress"
              showPercentage={true}
              labelPosition="left"
              variant="solid"
              color="primary"
              size="md"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              Center Position
            </h3>
            <ProgressBar
              value={68}
              label="Installation Progress"
              showPercentage={true}
              labelPosition="center"
              variant="gradient"
              color="success"
              size="md"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              Right Position (Default)
            </h3>
            <ProgressBar
              value={85}
              label="Sync Complete"
              showPercentage={true}
              labelPosition="right"
              variant="soft"
              color="warning"
              size="md"
            />
          </div>
        </div>
      </section>

      {/* Inside Positioning */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Inside Positioning</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Large Size - Best for Inside Labels</h3>
            <ProgressBar
              value={72}
              label="Profile Complete"
              showPercentage={true}
              labelPosition="inside"
              variant="gradient"
              color="success"
              size="lg"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Medium Size</h3>
            <ProgressBar
              value={54}
              label="Loading Data"
              showPercentage={true}
              labelPosition="inside"
              variant="solid"
              color="primary"
              size="md"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Small Size - Compact</h3>
            <ProgressBar
              value={38}
              label="38%"
              labelPosition="inside"
              variant="solid"
              color="warning"
              size="sm"
            />
          </div>
        </div>
        
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="font-semibold text-indigo-900 mb-2">Inside Label Benefits:</h3>
          <ul className="text-sm text-indigo-800 space-y-1">
            <li>• Space-efficient for compact layouts</li>
            <li>• Clean, integrated appearance</li>
            <li>• Automatic contrast with drop shadows</li>
            <li>• Works best with larger sizes (md, lg)</li>
          </ul>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Position Comparison</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl border">
            <h3 className="font-semibold text-gray-900 mb-4">Outside Positioning</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-sm">No space constraints within bar</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-sm">Always readable regardless of progress</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-sm">Works well with any size</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-sm">Flexible alignment options</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border">
            <h3 className="font-semibold text-gray-900 mb-4">Inside Positioning</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-sm">Space-efficient layout</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-sm">Clean, integrated appearance</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-sm">Automatic contrast handling</span>
              </div>
              <div className="flex items-center gap-3">
                <AlertCircle size={16} className="text-amber-500" />
                <span className="text-sm">Best with medium/large sizes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
};

// =================== STORY: INDETERMINATE STATES ===================
export const IndeterminateStates: Story = {
  name: '⏳ Indeterminate States',
  parameters: {
    docs: {
      description: {
        story: `
### Loading States with Unknown Duration

Indeterminate progress bars for operations where completion time cannot be predicted.

**Use Cases:**
- Initial data fetching without progress tracking
- Network requests with unknown response time
- Background processing tasks
- System startup and initialization

**Implementation:**
\`\`\`tsx
<ProgressBar
  indeterminate={true}
  label="Loading data..."
  variant="striped"
  animated={true}
  ariaLabel="Loading data, please wait"
/>
\`\`\`

**Accessibility:**
- Proper ARIA attributes for screen readers
- aria-valuetext="Loading" for indeterminate state
- Respects reduced motion preferences
        `,
      },
    },
  },
  render: () => (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Indeterminate Progress</h1>
        <p className="text-gray-600">Loading states for operations with unknown duration</p>
      </div>

      {/* Basic Indeterminate */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Basic Indeterminate States</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Loader className="w-4 h-4 animate-spin" />
              Data Loading
            </h3>
            <ProgressBar
              indeterminate={true}
              label="Fetching user data..."
              variant="solid"
              color="primary"
              animated={true}
              ariaLabel="Loading user data, please wait"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Background Processing
            </h3>
            <ProgressBar
              indeterminate={true}
              label="Processing images..."
              variant="striped"
              color="success"
              animated={true}
              ariaLabel="Processing images in background"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Wifi className="w-4 h-4" />
              Network Request
            </h3>
            <ProgressBar
              indeterminate={true}
              label="Connecting to server..."
              variant="gradient"
              color="warning"
              animated={true}
              ariaLabel="Connecting to server"
            />
          </div>
        </div>
      </section>

      {/* Different Variants */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Indeterminate Variants</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Solid - Clean and Simple</h3>
            <ProgressBar
              indeterminate={true}
              label="Initializing..."
              variant="solid"
              color="primary"
              size="md"
            />
          </div>
          
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Striped - Active Processing</h3>
            <ProgressBar
              indeterminate={true}
              label="Analyzing data..."
              variant="striped"
              color="success"
              size="md"
              animated={true}
            />
          </div>
          
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Gradient - Premium Feel</h3>
            <ProgressBar
              indeterminate={true}
              label="Optimizing performance..."
              variant="gradient"
              color="primary"
              size="md"
            />
          </div>
          
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Outline - Minimal Design</h3>
            <ProgressBar
              indeterminate={true}
              label="Syncing settings..."
              variant="outline"
              color="neutral"
              size="md"
            />
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Real-World Examples</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">System Operations</h3>
            <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <HardDrive className="w-5 h-5 text-blue-600" />
                <div className="flex-1">
                  <ProgressBar
                    indeterminate={true}
                    label="Scanning disk..."
                    variant="solid"
                    color="primary"
                    size="sm"
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-emerald-600" />
                <div className="flex-1">
                  <ProgressBar
                    indeterminate={true}
                    label="Applying updates..."
                    variant="striped"
                    color="success"
                    size="sm"
                    animated={true}
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Wifi className="w-5 h-5 text-amber-600" />
                <div className="flex-1">
                  <ProgressBar
                    indeterminate={true}
                    label="Connecting..."
                    variant="solid"
                    color="warning"
                    size="sm"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Application Loading</h3>
            <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
              <div>
                <ProgressBar
                  indeterminate={true}
                  label="Loading dashboard..."
                  variant="gradient"
                  color="primary"
                  size="md"
                  labelPosition="center"
                />
              </div>
              
              <div>
                <ProgressBar
                  indeterminate={true}
                  label="Fetching notifications..."
                  variant="soft"
                  color="neutral"
                  size="sm"
                />
              </div>
              
              <div>
                <ProgressBar
                  indeterminate={true}
                  label="Synchronizing..."
                  variant="striped"
                  color="success"
                  size="sm"
                  animated={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="bg-blue-50 p-6 rounded-xl">
        <h2 className="text-xl font-bold text-blue-900 mb-4">Indeterminate Progress Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-blue-800 mb-3">When to Use</h3>
            <ul className="text-sm text-blue-700 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-500 mt-0.5" />
                <span>Initial data loading without progress tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-500 mt-0.5" />
                <span>Network requests with unknown response time</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-500 mt-0.5" />
                <span>Background processing without completion estimates</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-500 mt-0.5" />
                <span>System initialization and startup processes</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-blue-800 mb-3">Implementation Tips</h3>
            <ul className="text-sm text-blue-700 space-y-2">
              <li className="flex items-start gap-2">
                <Info size={16} className="text-blue-500 mt-0.5" />
                <span>Always provide descriptive labels for context</span>
              </li>
              <li className="flex items-start gap-2">
                <Info size={16} className="text-blue-500 mt-0.5" />
                <span>Use ariaLabel for screen reader accessibility</span>
              </li>
              <li className="flex items-start gap-2">
                <Info size={16} className="text-blue-500 mt-0.5" />
                <span>Consider striped variant for active processing</span>
              </li>
              <li className="flex items-start gap-2">
                <Info size={16} className="text-blue-500 mt-0.5" />
                <span>Respect user's reduced motion preferences</span>
              </li>
            </ul>
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

WCAG 2.1 AA compliant progress bars with full screen reader support, keyboard navigation, and proper semantic structure.

**Accessibility Features:**
- Proper ARIA roles and attributes
- Screen reader announcements for progress changes
- High contrast support and color independence
- Reduced motion preferences respected
- Keyboard navigation when interactive
- Semantic HTML with meaningful labels

**ARIA Implementation:**
- \`role="progressbar"\` for semantic meaning
- \`aria-valuenow\` for current progress value
- \`aria-valuemin\` and \`aria-valuemax\` for range
- \`aria-label\` or \`aria-labelledby\` for description
- \`aria-valuetext\` for indeterminate states

**Testing Recommendations:**
- Test with NVDA, JAWS, or VoiceOver screen readers
- Verify keyboard navigation works when interactive
- Check high contrast mode compatibility
- Test with 200% zoom level for low vision users
        `,
      },
    },
  },
  render: () => (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Accessibility Features</h1>
        <p className="text-gray-600">
          Built-in accessibility ensures progress bars work for everyone
        </p>
      </div>

      {/* Accessible Progress Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Accessible Progress Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">File Upload with Screen Reader Support</h3>
            <ProgressBar
              value={67}
              label="Uploading document.pdf"
              showPercentage={true}
              ariaLabel="File upload progress, 67% complete"
              variant="solid"
              color="primary"
            />
            <p className="text-sm text-gray-500 mt-1">
              Screen reader announces: "File upload progress, progressbar, 67 out of 100"
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Indeterminate with Descriptive Text</h3>
            <ProgressBar
              indeterminate={true}
              label="Processing your request"
              ariaLabel="Processing your request, please wait"
              variant="striped"
              color="primary"
              animated={true}
            />
            <p className="text-sm text-gray-500 mt-1">
              Screen reader announces: "Processing your request, progressbar, Loading"
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Custom Range Progress</h3>
            <ProgressBar
              value={750}
              min={300}
              max={850}
              label="Credit Score"
              ariaLabel="Credit score rating out of 850"
              variant="gradient"
              color="success"
              showPercentage={false}
            />
            <p className="text-sm text-gray-500 mt-1">
              Screen reader announces: "Credit score rating, progressbar, 750 out of 850"
            </p>
          </div>
        </div>
      </section>

      {/* Accessibility Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl border">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Volume2 size={20} className="text-blue-600" />
            </div>
            Screen Reader Support
          </h3>
          <ul className="text-sm space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <div>
                <strong>ARIA roles:</strong> Proper progressbar role with semantic meaning
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <div>
                <strong>Value announcements:</strong> Current progress communicated clearly
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <div>
                <strong>Range information:</strong> Min/max values provided for context
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <div>
                <strong>State descriptions:</strong> Indeterminate states properly labeled
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle size={20} className="text-green-600" />
            </div>
            Visual Accessibility
          </h3>
          <ul className="text-sm space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <div>
                <strong>High contrast:</strong> Works with high contrast mode
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <div>
                <strong>Color independence:</strong> Information not conveyed by color alone
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <div>
                <strong>Zoom support:</strong> Usable at 200% zoom level
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <div>
                <strong>Focus indicators:</strong> Clear focus states when interactive
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Settings size={20} className="text-purple-600" />
            </div>
            Motion & Animation
          </h3>
          <ul className="text-sm space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <div>
                <strong>Reduced motion:</strong> Respects prefers-reduced-motion setting
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <div>
                <strong>Smooth transitions:</strong> Hardware-accelerated animations
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <div>
                <strong>Optional animation:</strong> Can disable animations per component
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <div>
                <strong>Performance:</strong> Optimized for 60fps across devices
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Target size={20} className="text-orange-600" />
            </div>
            Implementation
          </h3>
          <ul className="text-sm space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <div>
                <strong>Semantic HTML:</strong> Uses proper HTML5 semantics
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <div>
                <strong>WCAG 2.1 AA:</strong> Meets accessibility guidelines
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <div>
                <strong>Testing ready:</strong> Works with automated accessibility tools
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <div>
                <strong>Cross-platform:</strong> Consistent across browsers and devices
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Testing Checklist */}
      <section className="bg-yellow-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-yellow-900 mb-6">Accessibility Testing Checklist</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-yellow-800 mb-3">Screen Reader Testing</h4>
            <div className="space-y-2">
              {[
                'Progress values announced correctly',
                'Range information (min/max) communicated',
                'Indeterminate states described properly',
                'Label content read by screen readers',
                'Progress changes announced in real-time'
              ].map((test, index) => (
                <label key={index} className="flex items-center gap-2 text-sm text-yellow-700">
                  <input type="checkbox" className="rounded" />
                  <span>{test}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-yellow-800 mb-3">Visual & Motion Testing</h4>
            <div className="space-y-2">
              {[
                'High contrast mode compatibility verified',
                'Color information not essential for understanding',
                'Components usable at 200% zoom level',
                'Reduced motion preferences respected',
                'Focus indicators visible when interactive'
              ].map((test, index) => (
                <label key={index} className="flex items-center gap-2 text-sm text-yellow-700">
                  <input type="checkbox" className="rounded" />
                  <span>{test}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="bg-gray-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessibility Implementation Example</h3>
        <pre className="text-sm bg-white p-4 rounded-lg overflow-x-auto border">
{`<ProgressBar
  value={75}
  label="Document processing"
  showPercentage={true}
  ariaLabel="Document processing progress, 75% complete"
  variant="solid"
  color="primary"
  
  // Optional: Link to external label
  labelId="progress-description"
  
  // Ensure animations respect user preferences
  animated={true}
  
  // Custom range if needed
  min={0}
  max={100}
/>

{/* External description if using labelId */}
<div id="progress-description" className="sr-only">
  Processing your document. This may take several minutes.
</div>`}
        </pre>
      </section>
    </div>
  ),
};
