import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React, { useState } from 'react';
import { 
  MessageSquare,
  FileText,
  Edit3,
  CheckCircle,
  AlertCircle,
  Info,
  Users,
  Star,
  Send,
  Target,
  Zap,
  Settings,
  Eye,
  Volume2,
  Shield
} from 'lucide-react';
import { TextArea } from '@sume/ui/components/TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
**Professional, accessible multi-line text input with advanced features and comprehensive customization options.**

The TextArea component provides a robust foundation for multi-line text input with support for auto-resize, character counting, clearable functionality, and multiple visual variants for different use cases.

## 🎯 When to Use TextArea

### ✅ Perfect Use Cases
- **Long-form Content**: Comments, reviews, descriptions, blog posts, documentation
- **User Feedback**: Support tickets, feedback forms, survey responses, testimonials
- **Communication**: Messages, chat interfaces, email composition, notes
- **Data Entry**: Product descriptions, user bios, project details, specifications
- **Code Input**: Configuration files, scripts, JSON data, custom CSS/HTML
- **Creative Writing**: Story composition, article drafts, creative content

### ❌ Avoid Using When
- Single-line text input (use Input component instead)
- Structured data entry with specific formats (use dedicated form controls)
- Binary choices or selections (use radio buttons, checkboxes, or select)
- Numeric input with validation (use specialized numeric inputs)
- Short, predictable responses (use Input with suggestions/autocomplete)

## ✨ Key Features

### Core Functionality
- **Auto-Resize**: Dynamically adjusts height based on content length
- **Character Counting**: Real-time character count with max length validation
- **Clearable Interface**: One-click content clearing with visual feedback
- **Label Integration**: Built-in label support with proper accessibility
- **Error Handling**: Error message display with validation states
- **Flexible Sizing**: Three size variants for different interface contexts

### Advanced Features
- **Multiple Variants**: 3 distinct visual styles (default, ghost, outline)
- **Responsive Design**: Adapts beautifully across all screen sizes
- **Accessibility First**: WCAG 2.1 AA compliant with screen reader support
- **Performance Optimized**: Efficient re-rendering with proper event handling
- **TypeScript Ready**: Full type safety with comprehensive interface definitions
- **Ref Forwarding**: Proper ref handling for external control and focus management

## 🎨 Visual Variants

### Default Variant
- **Appearance**: Traditional bordered textarea with background and shadow
- **Use Case**: Standard forms, general text input, primary content areas
- **Best For**: Most common use cases requiring clear input boundaries

### Ghost Variant  
- **Appearance**: Transparent background with no border, minimal visual weight
- **Use Case**: Inline editing, overlay interfaces, seamless content integration
- **Best For**: Rich text interfaces, comment systems, seamless editing experiences

### Outline Variant
- **Appearance**: Bordered textarea with transparent background, clean modern look
- **Use Case**: Minimal designs, form overlays, clean interfaces
- **Best For**: Modern applications, card interfaces, minimal design systems

## 📏 Size Options

### Small (sm)
- **Padding**: 8px 12px (px-2 py-1)
- **Font Size**: 14px (text-sm)
- **Use Case**: Compact interfaces, mobile forms, sidebar inputs, space-constrained areas
- **Best For**: Quick inputs, short comments, mobile-optimized forms

### Medium (md) - Default
- **Padding**: 12px 16px (px-3 py-2)  
- **Font Size**: 14px (text-sm)
- **Use Case**: Standard forms, general purpose text areas, balanced interfaces
- **Best For**: Most common scenarios, desktop and mobile balance

### Large (lg)
- **Padding**: 16px 20px (px-4 py-3)
- **Font Size**: 16px (text-base)
- **Use Case**: Prominent text areas, accessibility needs, featured content input
- **Best For**: Main content creation, accessibility compliance, senior-friendly interfaces

## ♿ Accessibility Features

### WCAG 2.1 AA Compliance
- **Semantic HTML**: Proper textarea element with label association
- **Screen Reader Support**: Complete ARIA implementation with descriptions
- **Keyboard Navigation**: Full keyboard accessibility with proper focus management
- **Focus Indicators**: Clear visual focus states with high contrast
- **Label Association**: Proper htmlFor/id relationships for assistive technology
- **Error Communication**: Clear error state communication for validation

### Advanced Accessibility
- **Character Count Announcements**: Screen reader updates for count changes
- **Error State Announcements**: Validation errors communicated to assistive technology
- **Required Field Indicators**: Clear visual and programmatic required field communication
- **Help Text Support**: Associated help text with proper ARIA relationships
- **High Contrast Support**: Works with high contrast mode and color blindness
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
import { TextArea } from '@sume/ui/components/TextArea';

function MyForm() {
  const [comment, setComment] = useState('');
  
  return (
    <TextArea
      label="Your Comment"
      value={comment}
      onChange={(e) => setComment(e.target.value)}
      placeholder="Share your thoughts..."
      maxLength={500}
      showCounter={true}
      autoResize={true}
    />
  );
}
\`\`\`

## 🎯 Advanced Implementation Examples

### Auto-Resizing Comment System
\`\`\`tsx
function CommentForm() {
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  return (
    <form onSubmit={handleSubmit}>
      <TextArea
        label="Add a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Share your thoughts on this topic..."
        autoResize={true}
        maxLength={1000}
        showCounter={true}
        clearable={true}
        variant="outline"
        size="md"
        disabled={isSubmitting}
      />
      
      <button 
        type="submit" 
        disabled={!comment.trim() || isSubmitting}
      >
        {isSubmitting ? 'Posting...' : 'Post Comment'}
      </button>
    </form>
  );
}
\`\`\`

### Form with Validation
\`\`\`tsx
function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');
  
  const validateFeedback = (value: string) => {
    if (value.length < 10) {
      setError('Feedback must be at least 10 characters long');
    } else if (value.length > 2000) {
      setError('Feedback must not exceed 2000 characters');
    } else {
      setError('');
    }
  };
  
  return (
    <TextArea
      label="Your Feedback *"
      value={feedback}
      onChange={(e) => {
        setFeedback(e.target.value);
        validateFeedback(e.target.value);
      }}
      errorMessage={error}
      placeholder="Tell us about your experience..."
      maxLength={2000}
      showCounter={true}
      autoResize={true}
      clearable={true}
      required
    />
  );
}
\`\`\`

### Rich Text Editor Integration
\`\`\`tsx
function RichTextEditor() {
  const [content, setContent] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  const insertText = (text: string) => {
    if (textareaRef.current) {
      const start = textareaRef.current.selectionStart;
      const end = textareaRef.current.selectionEnd;
      const newValue = content.slice(0, start) + text + content.slice(end);
      setContent(newValue);
      
      // Restore cursor position
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = start + text.length;
          textareaRef.current.selectionEnd = start + text.length;
          textareaRef.current.focus();
        }
      }, 0);
    }
  };
  
  return (
    <div>
      <div className="toolbar">
        <button onClick={() => insertText('**bold**')}>Bold</button>
        <button onClick={() => insertText('*italic*')}>Italic</button>
        <button onClick={() => insertText('[link](url)')}>Link</button>
      </div>
      
      <TextArea
        ref={textareaRef}
        label="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write in Markdown..."
        autoResize={true}
        variant="outline"
        size="lg"
        rows={10}
      />
    </div>
  );
}
\`\`\`

### Multi-Step Form Integration
\`\`\`tsx
function ProfileBioForm() {
  const [bio, setBio] = useState('');
  const [isDirty, setIsDirty] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
    setIsDirty(true);
  };
  
  const handleSave = () => {
    // Save logic
    setIsDirty(false);
  };
  
  return (
    <div className="space-y-4">
      <TextArea
        label="Professional Bio"
        value={bio}
        onChange={handleChange}
        placeholder="Tell us about your professional background, skills, and interests..."
        maxLength={500}
        showCounter={true}
        autoResize={true}
        clearable={true}
        variant="default"
        size="md"
      />
      
      {isDirty && (
        <div className="text-amber-600 text-sm">
          You have unsaved changes
        </div>
      )}
      
      <button 
        onClick={handleSave}
        disabled={!isDirty}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        Save Changes
      </button>
    </div>
  );
}
\`\`\`

## 🎨 Styling & Customization

### Custom Styling
\`\`\`tsx
// Custom CSS classes can be applied
<TextArea
  className="font-mono text-gray-700 bg-gray-50"
  variant="outline"
  // Component uses CVA internally for consistent styling
  // but can be overridden with higher specificity
/>
\`\`\`

### Dynamic Variant Based on State
\`\`\`tsx
function DynamicTextArea() {
  const [hasError, setHasError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  const getVariant = () => {
    if (hasError) return 'outline';
    if (isFocused) return 'default';
    return 'ghost';
  };
  
  return (
    <TextArea
      variant={getVariant()}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      errorMessage={hasError ? 'Please provide valid input' : undefined}
    />
  );
}
\`\`\`

## 🧪 Testing Strategies

### Component Testing
\`\`\`typescript
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { TextArea } from './TextArea';

describe('TextArea Component', () => {
  it('should render with label', () => {
    render(<TextArea label="Test Label" />);
    
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });
  
  it('should show character counter when enabled', () => {
    render(
      <TextArea 
        maxLength={100} 
        showCounter={true}
        defaultValue="Hello"
      />
    );
    
    expect(screen.getByText('5 / 100')).toBeInTheDocument();
  });
  
  it('should auto-resize when content changes', async () => {
    const { container } = render(
      <TextArea autoResize={true} />
    );
    
    const textarea = screen.getByRole('textbox');
    
    fireEvent.change(textarea, { 
      target: { value: 'Line 1\\nLine 2\\nLine 3\\nLine 4\\nLine 5' } 
    });
    
    await waitFor(() => {
      expect(textarea.style.height).toBeTruthy();
    });
  });
  
  it('should show clear button when clearable and has content', () => {
    render(
      <TextArea clearable={true} defaultValue="Test content" />
    );
    
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  
  it('should clear content when clear button is clicked', () => {
    const handleChange = jest.fn();
    render(
      <TextArea 
        clearable={true} 
        value="Test content"
        onChange={handleChange}
      />
    );
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({ target: { value: '' } })
    );
  });
  
  it('should be accessible', async () => {
    const { container } = render(
      <TextArea label="Accessible textarea" />
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
\`\`\`

### Integration Testing
\`\`\`typescript
describe('TextArea Integration', () => {
  it('should work with form validation', async () => {
    const TestForm = () => {
      const [value, setValue] = useState('');
      const [error, setError] = useState('');
      
      const validate = (val: string) => {
        if (val.length < 5) {
          setError('Must be at least 5 characters');
        } else {
          setError('');
        }
      };
      
      return (
        <TextArea
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            validate(e.target.value);
          }}
          errorMessage={error}
          label="Test Input"
        />
      );
    };
    
    render(<TestForm />);
    
    const textarea = screen.getByLabelText('Test Input');
    
    fireEvent.change(textarea, { target: { value: 'Hi' } });
    expect(screen.getByText('Must be at least 5 characters')).toBeInTheDocument();
    
    fireEvent.change(textarea, { target: { value: 'Hello there' } });
    expect(screen.queryByText('Must be at least 5 characters')).not.toBeInTheDocument();
  });
});
\`\`\`

## 🔧 Advanced Configuration

### Custom Auto-Resize Logic
\`\`\`typescript
// Custom hook for advanced auto-resize behavior
function useAdvancedAutoResize(ref: RefObject<HTMLTextAreaElement>, content: string) {
  useEffect(() => {
    if (ref.current) {
      const textarea = ref.current;
      
      // Reset height to auto to get the correct scrollHeight
      textarea.style.height = 'auto';
      
      // Set minimum and maximum heights
      const minHeight = 60; // Minimum 3 rows
      const maxHeight = 300; // Maximum height before scrolling
      
      const scrollHeight = textarea.scrollHeight;
      const newHeight = Math.min(Math.max(scrollHeight, minHeight), maxHeight);
      
      textarea.style.height = \`\${newHeight}px\`;
      textarea.style.overflowY = scrollHeight > maxHeight ? 'auto' : 'hidden';
    }
  }, [content, ref]);
}
\`\`\`

### Theme Customization
\`\`\`css
/* Custom CSS variables for theming */
:root {
  --textarea-bg: #ffffff;
  --textarea-border: #d1d5db;
  --textarea-focus: #3b82f6;
  --textarea-error: #ef4444;
  --textarea-text: #111827;
  --textarea-placeholder: #6b7280;
}

.dark {
  --textarea-bg: #1f2937;
  --textarea-border: #374151;
  --textarea-focus: #60a5fa;
  --textarea-error: #f87171;
  --textarea-text: #f9fafb;
  --textarea-placeholder: #9ca3af;
}

/* Custom variant */
.textarea-custom {
  background: var(--textarea-bg);
  border-color: var(--textarea-border);
  color: var(--textarea-text);
}

.textarea-custom:focus {
  border-color: var(--textarea-focus);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.textarea-custom.error {
  border-color: var(--textarea-error);
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
    variant: {
      control: 'select',
      options: ['default', 'ghost', 'outline'],
      description: `**Visual style variant for different use cases**

### Default
- **Appearance**: Traditional bordered textarea with background and subtle shadow
- **Use Case**: Standard forms, general text input, primary content areas
- **Best For**: Most common scenarios requiring clear input boundaries

### Ghost  
- **Appearance**: Transparent background with no border, minimal visual footprint
- **Use Case**: Inline editing, overlay interfaces, seamless content integration
- **Best For**: Rich text interfaces, comment systems, seamless editing experiences

### Outline
- **Appearance**: Clean border with transparent background, modern minimal look
- **Use Case**: Minimal designs, form overlays, clean contemporary interfaces
- **Best For**: Modern applications, card interfaces, minimal design systems

\`\`\`tsx
<TextArea variant="default" />
<TextArea variant="ghost" />  
<TextArea variant="outline" />
\`\`\``,
      table: {
        type: { summary: "'default' | 'ghost' | 'outline'" },
        defaultValue: { summary: "'default'" },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: `**Size variant affecting padding, font size, and overall scale**

### Small (sm)
- **Padding**: 8px 12px, compact for space-constrained areas
- **Font Size**: 14px (text-sm)
- **Use Case**: Compact interfaces, mobile forms, sidebar inputs

### Medium (md) - Default
- **Padding**: 12px 16px, balanced for general use
- **Font Size**: 14px (text-sm) 
- **Use Case**: Standard forms, general purpose, desktop and mobile balance

### Large (lg)
- **Padding**: 16px 20px, prominent for main content areas
- **Font Size**: 16px (text-base)
- **Use Case**: Featured content input, accessibility needs, prominent forms

\`\`\`tsx
<TextArea size="sm" placeholder="Compact input" />
<TextArea size="md" placeholder="Standard input" />
<TextArea size="lg" placeholder="Prominent input" />
\`\`\``,
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: "'md'" },
      },
    },
    label: {
      control: 'text',
      description: `**Optional label text for the textarea**

Automatically creates proper accessibility relationships between label and textarea.

\`\`\`tsx
<TextArea label="Your Message" />
<TextArea label="Product Description *" />
\`\`\`

**Features:**
- Automatically associates label with textarea using htmlFor/id
- Supports rich text content and styling
- Required field indicators can be included in label text`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    placeholder: {
      control: 'text',
      description: `**Placeholder text shown when textarea is empty**

\`\`\`tsx
<TextArea placeholder="Share your thoughts..." />
<TextArea placeholder="Describe your experience in detail" />
\`\`\``,
      table: {
        type: { summary: 'string' },
      },
    },
    autoResize: {
      control: 'boolean',
      description: `**Enable automatic height adjustment based on content**

When enabled, the textarea dynamically adjusts its height as content is added or removed.

\`\`\`tsx
<TextArea autoResize={true} />
\`\`\`

**Features:**
- Smoothly expands and contracts with content
- Maintains minimum height for usability
- Performance optimized with proper event handling
- Works with both controlled and uncontrolled components

**Use Cases:**
- Comment systems with variable content length
- Dynamic forms where content length varies
- Rich text editors and content creation tools
- Chat interfaces and messaging applications`,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    clearable: {
      control: 'boolean',
      description: `**Add clear button to quickly empty the textarea**

Shows a clear button (trash icon) when textarea has content, allowing one-click clearing.

\`\`\`tsx
<TextArea clearable={true} />
\`\`\`

**Features:**
- Appears only when textarea contains content
- Provides visual feedback on hover
- Maintains focus on textarea after clearing
- Triggers onChange event for controlled components
- Accessible with proper keyboard interaction

**Use Cases:**
- Forms where users frequently need to start over
- Search and filter interfaces
- Draft composition where users need quick reset
- Mobile interfaces where text selection is difficult`,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showCounter: {
      control: 'boolean',
      description: `**Display character count indicator**

Shows current character count and maximum length (when maxLength is set).

\`\`\`tsx
<TextArea 
  maxLength={500}
  showCounter={true}
  placeholder="Max 500 characters"
/>
\`\`\`

**Features:**
- Real-time character count updates
- Visual indication when approaching limit
- Works with maxLength prop for validation
- Accessible screen reader announcements
- Right-aligned for consistent positioning

**Requirements:**
- Requires maxLength prop to be set
- Only displays when showCounter is true

**Use Cases:**
- Social media posts with character limits
- Product descriptions with length constraints  
- Form fields with validation requirements
- User-generated content with guidelines`,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    maxLength: {
      control: { type: 'number', min: 1, max: 10000 },
      description: `**Maximum number of characters allowed**

Sets character limit and enables native browser validation.

\`\`\`tsx
<TextArea maxLength={280} showCounter={true} />
\`\`\`

**Features:**
- Native browser enforcement of character limit
- Works with showCounter for visual feedback
- Form validation integration
- Prevents further input when limit reached

**Common Values:**
- Twitter-style posts: 280
- Short descriptions: 160
- Long-form content: 2000-5000
- Comments: 500-1000`,
      table: {
        type: { summary: 'number' },
      },
    },
    errorMessage: {
      control: 'text',
      description: `**Error message to display below the textarea**

Shows validation errors with proper styling and accessibility.

\`\`\`tsx
<TextArea 
  errorMessage="Message is too short (minimum 10 characters)"
  // Error styling automatically applied
/>
\`\`\`

**Features:**
- Automatic error styling application
- Proper ARIA error associations
- Screen reader announcements
- Visual error indicators
- Integrates with form validation libraries

**Integration:**
- Works with validation libraries (Formik, React Hook Form)
- Can be dynamically set based on validation state
- Cleared automatically when error state resolves`,
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: `**Disable the textarea**

\`\`\`tsx
<TextArea disabled={true} />
\`\`\``,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: 'boolean',
      description: `**Mark textarea as required**

\`\`\`tsx
<TextArea required={true} label="Required Field *" />
\`\`\``,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    rows: {
      control: { type: 'number', min: 1, max: 20 },
      description: `**Initial number of visible text rows**

Sets the initial height of the textarea.

\`\`\`tsx
<TextArea rows={5} /> // Taller initial height
<TextArea rows={2} /> // Compact initial height
\`\`\``,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '3' },
      },
    },
  },
} satisfies Meta<typeof TextArea>;

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

Simple textareas for common use cases with clean, accessible implementation.

**Code:**
\`\`\`tsx
// Basic textarea with label
<TextArea 
  label="Your Message"
  placeholder="Share your thoughts..."
/>

// Textarea with character limit
<TextArea 
  label="Product Review"
  maxLength={500}
  showCounter={true}
  placeholder="Write your review..."
/>
\`\`\`

**Features:**
- Clean, professional appearance
- Automatic label association for accessibility
- Built-in validation and error handling
- Responsive design for all screen sizes
        `
      }
    }
  },
  args: {
    label: 'Your Message',
    placeholder: 'Share your thoughts...',
    variant: 'default',
    size: 'md'
  },
  render: (args) => (
    <div className="space-y-8 max-w-lg mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Basic TextArea Examples</h2>
        <p className="text-gray-600">Simple, accessible text input areas</p>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Standard Message Input</h3>
          <TextArea {...args} />
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Product Review</h3>
          <TextArea
            label="Share your experience"
            placeholder="Tell us about your experience with this product..."
            maxLength={500}
            showCounter={true}
          />
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Support Ticket</h3>
          <TextArea
            label="Describe your issue *"
            placeholder="Please describe the problem you're experiencing in detail..."
            required
            rows={4}
          />
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">Key Features:</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Automatic accessibility with proper label associations</li>
          <li>• Responsive design adapts to all screen sizes</li>
          <li>• Built-in validation and error state handling</li>
          <li>• Performance optimized with efficient re-rendering</li>
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

Each variant serves different design needs and user contexts.

**Default**: Traditional bordered textarea with background and shadow
**Ghost**: Transparent background with no border for seamless integration  
**Outline**: Clean bordered design with transparent background

**Implementation:**
\`\`\`tsx
<TextArea variant="default" />
<TextArea variant="ghost" />
<TextArea variant="outline" />
\`\`\`
        `
      }
    }
  },
  render: () => {
    const [values, setValues] = useState({
      default: '',
      ghost: '',
      outline: ''
    });
    
    const handleChange = (variant: string) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValues(prev => ({ ...prev, [variant]: e.target.value }));
    };
    
    return (
      <div className="space-y-12 max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Visual Variants</h1>
          <p className="text-gray-600">Three distinct styles for different design needs</p>
        </div>

        {/* Default Variant */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <h2 className="text-xl font-bold text-gray-900">Default Variant</h2>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">Traditional</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <TextArea
                variant="default"
                label="Standard Message"
                placeholder="Traditional textarea with full styling..."
                value={values.default}
                onChange={handleChange('default')}
                maxLength={200}
                showCounter={true}
              />
              
              <TextArea
                variant="default"
                size="sm"
                label="Compact Version"
                placeholder="Smaller size for compact layouts"
              />
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">Best For:</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Standard forms and applications</li>
                <li>• Primary content input areas</li>
                <li>• Traditional interface designs</li>
                <li>• Clear input boundaries needed</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ghost Variant */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <h2 className="text-xl font-bold text-gray-900">Ghost Variant</h2>
            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">Seamless</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
              <TextArea
                variant="ghost"
                label="Inline Comment"
                placeholder="Seamless integration with background..."
                value={values.ghost}
                onChange={handleChange('ghost')}
                autoResize={true}
              />
              
              <TextArea
                variant="ghost"
                size="lg"
                placeholder="Large ghost textarea for rich content editing"
                autoResize={true}
              />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Best For:</h3>
              <ul className="text-sm text-gray-800 space-y-1">
                <li>• Inline editing interfaces</li>
                <li>• Comment systems and discussions</li>
                <li>• Rich text editor integration</li>
                <li>• Seamless content creation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Outline Variant */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 border-2 border-gray-600 rounded-full"></div>
            <h2 className="text-xl font-bold text-gray-900">Outline Variant</h2>
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">Modern</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <TextArea
                variant="outline"
                label="Modern Design"
                placeholder="Clean, minimal outline styling..."
                value={values.outline}
                onChange={handleChange('outline')}
                clearable={true}
              />
              
              <TextArea
                variant="outline"
                label="Feedback Form"
                placeholder="Share your thoughts on our service..."
                maxLength={300}
                showCounter={true}
                autoResize={true}
              />
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-medium text-purple-900 mb-2">Best For:</h3>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• Modern, minimal interfaces</li>
                <li>• Card-based layouts</li>
                <li>• Clean, contemporary designs</li>
                <li>• Overlay and modal forms</li>
              </ul>
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
                  <th className="text-left py-3 px-4 font-semibold">Background</th>
                  <th className="text-left py-3 px-4 font-semibold">Best Use Case</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">Default</td>
                  <td className="py-3 px-4">Medium</td>
                  <td className="py-3 px-4">Background + Border + Shadow</td>
                  <td className="py-3 px-4">Standard forms</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">Ghost</td>
                  <td className="py-3 px-4">Minimal</td>
                  <td className="py-3 px-4">Transparent</td>
                  <td className="py-3 px-4">Inline editing</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Outline</td>
                  <td className="py-3 px-4">Clean</td>
                  <td className="py-3 px-4">Transparent + Border</td>
                  <td className="py-3 px-4">Modern interfaces</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  },
};

// =================== STORY: SIZE OPTIONS ===================
export const SizeOptions: Story = {
  name: '📏 Size Options',
  parameters: {
    docs: {
      description: {
        story: `
### Three Size Variants

Different sizes for various interface contexts and accessibility needs.

**Small (sm)**: Compact for space-constrained areas
**Medium (md)**: Standard size for general use
**Large (lg)**: Prominent for main content areas

**Implementation:**
\`\`\`tsx
<TextArea size="sm" />
<TextArea size="md" /> // Default
<TextArea size="lg" />
\`\`\`
        `
      }
    }
  },
  render: () => (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Size Options</h1>
        <p className="text-gray-600">Three sizes for different interface contexts</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Small (sm)
          </h3>
          <TextArea
            size="sm"
            label="Quick Note"
            placeholder="Compact textarea for brief inputs..."
            variant="outline"
          />
          <div className="bg-green-50 p-3 rounded-lg">
            <h4 className="font-medium text-green-800 mb-1">Best For:</h4>
            <ul className="text-xs text-green-700 space-y-1">
              <li>• Mobile interfaces</li>
              <li>• Sidebar forms</li>
              <li>• Compact layouts</li>
              <li>• Quick inputs</li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            Medium (md)
          </h3>
          <TextArea
            size="md"
            label="Standard Message"
            placeholder="Default size for most use cases..."
            variant="default"
            maxLength={200}
            showCounter={true}
          />
          <div className="bg-blue-50 p-3 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-1">Best For:</h4>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>• General forms</li>
              <li>• Standard interfaces</li>
              <li>• Desktop and mobile balance</li>
              <li>• Most common scenarios</li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            Large (lg)
          </h3>
          <TextArea
            size="lg"
            label="Detailed Description"
            placeholder="Prominent textarea for important content..."
            variant="default"
            autoResize={true}
            clearable={true}
          />
          <div className="bg-purple-50 p-3 rounded-lg">
            <h4 className="font-medium text-purple-800 mb-1">Best For:</h4>
            <ul className="text-xs text-purple-700 space-y-1">
              <li>• Featured content input</li>
              <li>• Accessibility needs</li>
              <li>• Main content areas</li>
              <li>• Premium interfaces</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-4">Size Specifications</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-3">Size</th>
                <th className="text-left py-2 px-3">Padding</th>
                <th className="text-left py-2 px-3">Font Size</th>
                <th className="text-left py-2 px-3">Min Height</th>
                <th className="text-left py-2 px-3">Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-3 font-medium">Small</td>
                <td className="py-2 px-3">8px 12px</td>
                <td className="py-2 px-3">14px</td>
                <td className="py-2 px-3">80px</td>
                <td className="py-2 px-3">Compact interfaces</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-3 font-medium">Medium</td>
                <td className="py-2 px-3">12px 16px</td>
                <td className="py-2 px-3">14px</td>
                <td className="py-2 px-3">100px</td>
                <td className="py-2 px-3">Standard forms</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-medium">Large</td>
                <td className="py-2 px-3">16px 20px</td>
                <td className="py-2 px-3">16px</td>
                <td className="py-2 px-3">120px</td>
                <td className="py-2 px-3">Featured content</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ),
};

// =================== STORY: ADVANCED FEATURES ===================
export const AdvancedFeatures: Story = {
  name: '⚡ Advanced Features',
  parameters: {
    docs: {
      description: {
        story: `
### Advanced Functionality Showcase

Demonstrates auto-resize, character counting, clearable interface, and form integration.

**Features:**
- **Auto-Resize**: Dynamic height adjustment based on content
- **Character Counter**: Real-time count with limit validation  
- **Clearable**: One-click content clearing
- **Error Handling**: Validation integration with visual feedback

**Implementation:**
\`\`\`tsx
<TextArea
  autoResize={true}
  maxLength={500}
  showCounter={true}
  clearable={true}
  errorMessage="Content is required"
/>
\`\`\`
        `
      }
    }
  },
  render: () => {
    const [values, setValues] = useState({
      autoResize: '',
      counter: '',
      clearable: 'This textarea has content that can be cleared with the button.',
      validation: ''
    });
    
    const [errors, setErrors] = useState<Record<string, string>>({});
    
    const handleChange = (key: string) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setValues(prev => ({ ...prev, [key]: value }));
      
      // Validation example
      if (key === 'validation') {
        if (value.length < 10 && value.length > 0) {
          setErrors(prev => ({ ...prev, [key]: 'Message must be at least 10 characters long' }));
        } else {
          setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[key];
            return newErrors;
          });
        }
      }
    };
    
    return (
      <div className="space-y-12 max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Advanced Features</h1>
          <p className="text-gray-600">Powerful functionality for modern applications</p>
        </div>
        
        {/* Auto-Resize */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Zap size={24} className="text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Auto-Resize</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <TextArea
                label="Auto-Expanding Textarea"
                value={values.autoResize}
                onChange={handleChange('autoResize')}
                placeholder="Start typing and watch this textarea expand automatically..."
                autoResize={true}
                variant="outline"
                size="md"
              />
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">How It Works:</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Automatically adjusts height as you type</li>
                <li>• Maintains minimum height for usability</li>
                <li>• Smooth transitions and performance optimized</li>
                <li>• Perfect for dynamic content creation</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Character Counter */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Target size={24} className="text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">Character Counter</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <TextArea
                label="Social Media Post"
                value={values.counter}
                onChange={handleChange('counter')}
                placeholder="Share what's on your mind (280 characters max)..."
                maxLength={280}
                showCounter={true}
                variant="default"
                autoResize={true}
              />
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-900 mb-2">Features:</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Real-time character counting</li>
                <li>• Visual feedback when approaching limit</li>
                <li>• Prevents input beyond maxLength</li>
                <li>• Screen reader accessible announcements</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Clearable */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Settings size={24} className="text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">Clearable Interface</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <TextArea
                label="Draft Message"
                value={values.clearable}
                onChange={handleChange('clearable')}
                placeholder="Type your message here..."
                clearable={true}
                variant="outline"
                maxLength={500}
                showCounter={true}
              />
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-medium text-purple-900 mb-2">User Experience:</h3>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• Clear button appears when content exists</li>
                <li>• One-click content clearing</li>
                <li>• Maintains focus after clearing</li>
                <li>• Keyboard accessible interaction</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Validation */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <AlertCircle size={24} className="text-red-600" />
            <h2 className="text-2xl font-bold text-gray-900">Validation & Error Handling</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <TextArea
                label="Feedback Message *"
                value={values.validation}
                onChange={handleChange('validation')}
                placeholder="Please provide detailed feedback (minimum 10 characters)..."
                errorMessage={errors.validation}
                required
                maxLength={1000}
                showCounter={true}
                variant="default"
              />
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-medium text-red-900 mb-2">Validation Features:</h3>
              <ul className="text-sm text-red-800 space-y-1">
                <li>• Real-time validation feedback</li>
                <li>• Error message display with styling</li>
                <li>• ARIA error associations</li>
                <li>• Form integration ready</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Feature Combination */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Combined Features Example</h2>
          <TextArea
            label="Complete Feature Demo"
            placeholder="This textarea combines all advanced features: auto-resize, character counter, clearable, and validation..."
            autoResize={true}
            clearable={true}
            maxLength={500}
            showCounter={true}
            variant="outline"
            size="lg"
          />
          <p className="text-sm text-gray-600 mt-2">
            This example combines auto-resize, character counting, clearable interface, and is ready for validation integration.
          </p>
        </section>
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

Real-world scenarios showing TextArea in common application workflows.

**Examples Include:**
- **Comment System**: Social media style commenting with auto-resize
- **Support Ticket**: Help desk form with validation and character limits
- **Blog Editor**: Content creation with rich features
- **Feedback Form**: Customer feedback collection with validation

**Key Features:**
- Realistic validation patterns
- Error state handling  
- User experience optimization
- Mobile-responsive design
        `
      }
    }
  },
  render: () => {
    return (
      <div className="space-y-16 max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Real-World Implementation Examples</h1>
          <p className="text-gray-600 text-lg">Production-ready patterns for common use cases</p>
        </div>
        
        {/* Comment System */}
        <CommentSystemExample />
        
        {/* Support Ticket */}
        <SupportTicketExample />
        
        {/* Blog Editor */}
        <BlogEditorExample />
        
        {/* Feedback Form */}
        <FeedbackFormExample />
      </div>
    );
  },
};

// Helper components for real-world examples
const CommentSystemExample = () => {
  const [comment, setComment] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  
  const handlePost = async () => {
    setIsPosting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setComment('');
    setIsPosting(false);
  };
  
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <MessageSquare size={24} className="text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">Comment System</h2>
      </div>
      
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <Users size={20} className="text-blue-600" />
          </div>
          <div>
            <div className="font-medium">Add a comment</div>
            <div className="text-sm text-gray-500">Share your thoughts on this topic</div>
          </div>
        </div>
        
        <TextArea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="What are your thoughts?"
          autoResize={true}
          clearable={true}
          maxLength={500}
          showCounter={true}
          variant="outline"
          size="md"
          disabled={isPosting}
        />
        
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-500">
            <Star size={16} className="inline mr-1" />
            Be respectful and constructive
          </div>
          <button
            onClick={handlePost}
            disabled={!comment.trim() || isPosting}
            className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            {isPosting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Posting...
              </>
            ) : (
              <>
                <Send size={16} />
                Post Comment
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

const SupportTicketExample = () => {
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
    priority: 'medium'
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Please describe your issue';
    } else if (formData.description.length < 20) {
      newErrors.description = 'Description must be at least 20 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Support ticket submitted!');
    }
  };
  
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <AlertCircle size={24} className="text-red-600" />
        <h2 className="text-2xl font-bold text-gray-900">Support Ticket Form</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
            placeholder="Brief description of your issue"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
          <select
            value={formData.priority}
            onChange={(e) => setFormData(prev => ({ ...prev, priority: e.target.value }))}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
          >
            <option value="low">Low - General question</option>
            <option value="medium">Medium - Issue affecting work</option>
            <option value="high">High - Blocking issue</option>
            <option value="critical">Critical - Service down</option>
          </select>
        </div>
        
        <TextArea
          label="Issue Description *"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          placeholder="Please provide a detailed description of your issue, including steps to reproduce if applicable..."
          errorMessage={errors.description}
          maxLength={2000}
          showCounter={true}
          autoResize={true}
          clearable={true}
          required
          rows={6}
        />
        
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-yellow-800 mb-2">
            <Info size={16} />
            <span className="font-medium">Tips for better support</span>
          </div>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Include error messages if any</li>
            <li>• Mention your browser and device</li>
            <li>• Describe what you expected vs what happened</li>
          </ul>
        </div>
        
        <button
          type="submit"
          className="w-full px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-medium"
        >
          Submit Support Ticket
        </button>
      </form>
    </section>
  );
};

const BlogEditorExample = () => {
  const [content, setContent] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  
  const updateWordCount = (text: string) => {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  };
  
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    updateWordCount(e.target.value);
  };
  
  const handleSave = async () => {
    setIsSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastSaved(new Date());
    setIsSaving(false);
  };
  
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <Edit3 size={24} className="text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-900">Blog Content Editor</h2>
      </div>
      
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                Words: <span className="font-medium">{wordCount}</span>
              </span>
              <span className="text-sm text-gray-600">
                Reading time: <span className="font-medium">{Math.max(1, Math.ceil(wordCount / 200))} min</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              {lastSaved && (
                <span className="text-sm text-gray-500">
                  Saved {lastSaved.toLocaleTimeString()}
                </span>
              )}
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50 transition-colors text-sm"
              >
                {isSaving ? 'Saving...' : 'Save Draft'}
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <TextArea
            value={content}
            onChange={handleContentChange}
            placeholder="Start writing your blog post... You can use Markdown formatting."
            autoResize={true}
            variant="ghost"
            size="lg"
            rows={15}
            className="font-mono leading-relaxed"
          />
        </div>
      </div>
      
      <div className="bg-purple-50 p-4 rounded-lg">
        <h3 className="font-medium text-purple-900 mb-2">Editor Features:</h3>
        <ul className="text-sm text-purple-800 space-y-1">
          <li>• Auto-expanding editor that grows with content</li>
          <li>• Real-time word count and reading time estimation</li>
          <li>• Auto-save functionality with timestamp</li>
          <li>• Markdown-ready with monospace font</li>
        </ul>
      </div>
    </section>
  );
};

const FeedbackFormExample = () => {
  const [feedback, setFeedback] = useState({
    rating: '',
    experience: '',
    improvements: '',
    recommend: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
  };
  
  if (submitted) {
    return (
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <CheckCircle size={24} className="text-green-600" />
          <h2 className="text-2xl font-bold text-gray-900">Thank You!</h2>
        </div>
        
        <div className="bg-green-50 p-8 rounded-lg text-center">
          <CheckCircle size={48} className="mx-auto text-green-600 mb-4" />
          <h3 className="text-lg font-semibold text-green-900 mb-2">Feedback Submitted</h3>
          <p className="text-green-700">Thank you for taking the time to share your experience with us.</p>
        </div>
      </section>
    );
  }
  
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <FileText size={24} className="text-green-600" />
        <h2 className="text-2xl font-bold text-gray-900">Customer Feedback Form</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Overall Rating</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                type="button"
                onClick={() => setFeedback(prev => ({ ...prev, rating: rating.toString() }))}
                className={`p-2 rounded-md ${
                  feedback.rating === rating.toString() 
                    ? 'bg-yellow-400 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Star size={16} fill={feedback.rating === rating.toString() ? 'currentColor' : 'none'} />
              </button>
            ))}
          </div>
        </div>
        
        <TextArea
          label="Tell us about your experience"
          value={feedback.experience}
          onChange={(e) => setFeedback(prev => ({ ...prev, experience: e.target.value }))}
          placeholder="What did you like most? What could we improve?"
          autoResize={true}
          maxLength={1000}
          showCounter={true}
          clearable={true}
          variant="outline"
        />
        
        <TextArea
          label="Suggestions for improvement"
          value={feedback.improvements}
          onChange={(e) => setFeedback(prev => ({ ...prev, improvements: e.target.value }))}
          placeholder="Any specific features or improvements you'd like to see?"
          autoResize={true}
          maxLength={500}
          showCounter={true}
          variant="outline"
          size="sm"
        />
        
        <TextArea
          label="Would you recommend us to others? Why?"
          value={feedback.recommend}
          onChange={(e) => setFeedback(prev => ({ ...prev, recommend: e.target.value }))}
          placeholder="Help us understand what makes us worth recommending..."
          autoResize={true}
          clearable={true}
          variant="outline"
        />
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 transition-colors font-medium flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Submitting...
            </>
          ) : (
            'Submit Feedback'
          )}
        </button>
      </form>
    </section>
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

Comprehensive accessibility features ensure the TextArea works for all users, including those using assistive technologies.

**Accessibility Features:**
- Proper semantic HTML with textarea elements
- Label association with htmlFor/id relationships
- ARIA error descriptions and validation states
- Screen reader announcements for character counts
- Keyboard navigation and focus management
- High contrast mode compatibility

**Testing Guidelines:**
- Screen reader compatibility testing
- Keyboard navigation verification
- Color contrast validation
- Mobile accessibility testing
- Voice control compatibility
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
      
      {/* Accessible Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Accessible Implementation Examples</h2>
        
        <div className="space-y-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Screen Reader Optimized</h3>
            <TextArea
              label="Accessible Message Input"
              placeholder="This textarea is optimized for screen readers with proper labeling and ARIA attributes"
              maxLength={300}
              showCounter={true}
              clearable={true}
              variant="default"
            />
            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Screen Reader Output:</strong> "Accessible Message Input, text area, 0 of 300 characters used"
              </p>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Error State Communication</h3>
            <TextArea
              label="Required Field Example *"
              errorMessage="This field is required and must be at least 10 characters long"
              placeholder="Type at least 10 characters..."
              required
              variant="outline"
            />
            <div className="mt-4 bg-red-50 p-4 rounded-lg">
              <p className="text-sm text-red-800">
                <strong>Error Announcement:</strong> "Required Field Example, text area, invalid data, This field is required and must be at least 10 characters long"
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Accessibility Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
            <Volume2 size={24} className="text-blue-600" />
            Screen Reader Support
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>Semantic HTML:</strong> Proper textarea element with label associations</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>ARIA Labels:</strong> Descriptive labels and error associations</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>Character Announcements:</strong> Counter updates communicated</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>State Changes:</strong> Error states properly announced</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
            <Eye size={24} className="text-green-600" />
            Visual Accessibility
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>High Contrast:</strong> Compatible with high contrast mode</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>Focus Indicators:</strong> Clear visual focus states</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>Color Independence:</strong> Information beyond color alone</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>Zoom Support:</strong> Usable at 200% zoom level</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
            <Settings size={24} className="text-purple-600" />
            Keyboard & Motor
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>Keyboard Navigation:</strong> Full keyboard accessibility</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>Touch Targets:</strong> Adequate size for motor accessibility</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>Clear Button Access:</strong> Keyboard and screen reader accessible</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>Voice Control:</strong> Works with voice navigation software</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
            <Shield size={24} className="text-orange-600" />
            Standards Compliance
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>WCAG 2.1 AA:</strong> Meets accessibility guidelines</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>Section 508:</strong> Government accessibility compliant</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>ADA Compliance:</strong> Americans with Disabilities Act</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>Automated Testing:</strong> Passes axe-core validations</span>
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
                'Label properly announced',
                'Character count updates announced',
                'Error messages communicated',
                'Clear button accessible and announced',
                'Placeholder text read correctly'
              ].map((test, index) => (
                <label key={index} className="flex items-center gap-2 text-sm text-yellow-700">
                  <input type="checkbox" className="rounded border-yellow-400 text-yellow-600" />
                  <span>{test}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-yellow-800 mb-3">Visual & Interaction Testing</h4>
            <div className="space-y-2">
              {[
                'High contrast mode compatibility verified',
                'Focus indicators clearly visible',
                'Component usable at 200% zoom',
                'Touch targets adequate for mobile',
                'Keyboard navigation works completely'
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
{`<TextArea
  label="Message to Support Team *"
  placeholder="Describe your issue in detail..."
  maxLength={500}
  showCounter={true}
  clearable={true}
  autoResize={true}
  required
  errorMessage={validationError}
  
  // Accessibility is built-in:
  // - Automatic label association via htmlFor/id
  // - ARIA error descriptions when errorMessage is present
  // - Screen reader announcements for character count
  // - Keyboard accessible clear button
  // - Proper focus management and indicators
/>`}
        </pre>
      </section>
    </div>
  ),
};
