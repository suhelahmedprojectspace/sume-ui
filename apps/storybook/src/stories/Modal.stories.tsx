import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Modal } from '@sume/ui/components/Modal';
import { useState } from 'react';
import { Button } from '@sume/ui/components/Button';
import { Input } from '@sume/ui/components/Input';
import { AlertTriangle, CheckCircle, Settings } from 'lucide-react';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen', // Changed from 'centered' to 'fullscreen'
    docs: {
      story: {
        inline: false, // This ensures modals render in their own iframe
        iframeHeight: 600, // Set minimum height for modal stories
      },
      description: {
        component: `


A flexible, accessible modal dialog with animations and focus management.

## Features
- ✨ Smooth animations with Framer Motion
- 🎯 Focus trap and keyboard navigation
- 📱 Responsive design
- ♿ Full accessibility support
- 🎨 Multiple variants and sizes
- 🔒 Configurable backdrop click behavior

## Basic Usage
\`\`\`tsx
import { Modal } from '@astra/modal';
import { useState } from 'react';

function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal 
        open={open} 
        onClose={() => setOpen(false)}
        title="My Modal"
      >
        <p>Modal content goes here</p>
      </Modal>
    </>
  );
}
\`\`\`
## 🚀 Installation

\`\`\`bash
npm install @sume/ui
# or
yarn add @sume/ui
# or
pnpm add @sume/ui
\`\`\`

        `
      }
    }
  },
  argTypes: {
    open: { control: 'boolean', description: 'Controls modal visibility' },
    title: { control: 'text', description: 'Modal header title' },
    helperText: { control: 'text', description: 'Subtitle text below title' },
    showClose: { control: 'boolean', description: 'Show close (X) button' },
    showAction: { control: 'boolean', description: 'Show Cancel/Submit buttons' },
    actionLabel: { control: 'text', description: 'Text for submit button' },
    closeOnBackdropClick: { control: 'boolean', description: 'Close when clicking outside' }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Enhanced wrapper for proper modal display in Storybook
const ModalWrapper = ({ 
  children, 
  buttonText = "Open Modal", 
  autoOpen = false,
  ...modalProps 
}: { 
  children: React.ReactNode;
  buttonText?: string;
  autoOpen?: boolean;
  [key: string]: any;
}) => {
  const [open, setOpen] = useState(autoOpen);
  
  return (
    <div 
      className="flex items-center justify-center min-h-screen w-full p-8"
      style={{ 
        minHeight: '100vh',
        position: 'relative',
        zIndex: 1
      }}
    >
      <Button onClick={() => setOpen(true)}>{buttonText}</Button>
      <Modal 
        {...modalProps} 
        open={open} 
        onClose={() => setOpen(false)}
      >
        {children}
      </Modal>
    </div>
  );
};

// =================== BASIC EXAMPLES ===================

export const Default: Story = {
  render: () => (
    <ModalWrapper title="Basic Modal">
      <div className="space-y-4">
        <p>This is a simple modal with a title and some content.</p>
        <p className="text-sm text-gray-500">
          Press <kbd className="px-2 py-1 bg-gray-100 rounded">Escape</kbd> or 
          click outside to close.
        </p>
      </div>
    </ModalWrapper>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: { 
        inline: false,
        iframeHeight: 500 
      },
      description: {
        story: 'The most basic modal with just a title and content.'
      }
    }
  }
};

export const WithHelperText: Story = {
  render: () => (
    <ModalWrapper 
      title="Modal with Helper Text" 
      helperText="This subtitle provides additional context about the modal's purpose."
    >
      <div className="space-y-4">
        <p>Helper text appears below the title to provide extra context or instructions.</p>
        <div className="bg-blue-50 p-3 rounded">
          <p className="text-blue-800 text-sm">
            💡 Use helper text to clarify what users should do or expect.
          </p>
        </div>
      </div>
    </ModalWrapper>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: { 
        inline: false,
        iframeHeight: 500 
      },
      description: {
        story: 'Modal with helper text that provides additional context below the title.'
      }
    }
  }
};

export const WithActions: Story = {
  render: () => (
    <ModalWrapper 
      title="Confirm Action"
      helperText="This action cannot be undone."
      showAction={true}
      actionLabel="Delete"
      onAction={() => alert('Action confirmed!')}
      buttonText="Delete Item"
    >
      <div className="space-y-4">
        <div className="flex items-center space-x-3 p-3 bg-red-50 rounded border border-red-200">
          <AlertTriangle className="w-5 h-5 text-red-600" />
          <p className="text-red-800">This will permanently delete the selected item.</p>
        </div>
        <p className="text-sm text-gray-600">Click "Delete" to confirm or "Cancel" to abort.</p>
      </div>
    </ModalWrapper>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: { 
        inline: false,
        iframeHeight: 500 
      },
      description: {
        story: 'Modal with action buttons - perfect for confirmations and form submissions.'
      }
    }
  }
};

// =================== DEMONSTRATION STORIES ===================

export const LiveDemo: Story = {
  render: () => (
    <ModalWrapper 
      title="Live Modal Demo"
      helperText="This modal opens automatically to show you how it looks!"
      autoOpen={true}
      showAction={true}
      actionLabel="Got it!"
      onAction={() => {}}
    >
      <div className="space-y-4">
        <div className="bg-green-50 p-4 rounded border border-green-200">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <p className="text-green-800 font-medium">Modal is fully visible!</p>
          </div>
          <p className="text-green-700 text-sm mt-2">
            This demonstrates how the modal appears in the documentation.
          </p>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-medium">What you can see:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>✅ Complete modal with backdrop</li>
            <li>✅ Title and helper text</li>
            <li>✅ Action buttons</li>
            <li>✅ Proper spacing and styling</li>
            <li>✅ Close button functionality</li>
          </ul>
        </div>
      </div>
    </ModalWrapper>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: { 
        inline: false,
        iframeHeight: 600 
      },
      description: {
        story: `
### Live Modal Demonstration

This story automatically opens the modal to show how it appears in the docs.

**Key improvements for Storybook display:**
- \`layout: 'fullscreen'\` - Gives modal space to render
- \`inline: false\` - Renders in separate iframe for proper z-index
- \`iframeHeight\` - Ensures adequate height for modal display
- \`autoOpen: true\` - Shows modal immediately for documentation

**Why this fixes the display issue:**
- Prevents modal from being clipped by container bounds
- Ensures proper z-index stacking
- Provides adequate viewport space
- Shows the complete modal experience
        `
      }
    }
  }
};

// =================== SIZE VARIANTS ===================

export const SizeVariants: Story = {
  render: () => (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 p-8">
      <h2 className="text-2xl font-bold">Modal Size Variants</h2>
      <p className="text-gray-600 text-center max-w-2xl">
        The Modal component supports different sizes. Click each button to see the size difference.
      </p>
      
      <div className="flex flex-wrap gap-4 justify-center">
        <ModalWrapper 
          buttonText="Small Modal" 
          title="Small Modal"
          helperText="Compact size for simple messages"
          className="max-w-sm"
        >
          <div className="space-y-3">
            <p className="text-sm">This is a small modal, perfect for simple confirmations or brief messages.</p>
            <div className="bg-gray-100 p-3 rounded text-sm">
              <strong>Use case:</strong> Quick confirmations, alerts, simple forms
            </div>
          </div>
        </ModalWrapper>

        <ModalWrapper 
          buttonText="Medium Modal" 
          title="Medium Modal (Default)"
          helperText="Standard size for most use cases"
          className="max-w-md"
        >
          <div className="space-y-3">
            <p>This is the default medium modal size, suitable for most common scenarios.</p>
            <div className="bg-gray-100 p-3 rounded">
              <strong>Use case:</strong> Forms, settings, content display, general purpose
            </div>
          </div>
        </ModalWrapper>

        <ModalWrapper 
          buttonText="Large Modal" 
          title="Large Modal"
          helperText="Spacious layout for complex content"
          className="max-w-2xl"
        >
          <div className="space-y-4">
            <p>This is a large modal, ideal for complex forms, detailed content, or multi-section layouts.</p>
            <div className="bg-gray-100 p-4 rounded">
              <strong>Use case:</strong> Complex forms, detailed views, multi-step processes, rich content
            </div>
            <p className="text-sm text-gray-600">
              Large modals provide more space for content while maintaining good readability and user experience.
            </p>
          </div>
        </ModalWrapper>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: { 
        inline: false,
        iframeHeight: 700 
      },
      description: {
        story: `
### Modal Sizes

Control modal width using the \`className\` prop with max-width utilities:

\`\`\`tsx
// Small modal
<Modal className="max-w-sm" title="Small">
  {/* Content */}
</Modal>

// Medium modal (default)
<Modal className="max-w-md" title="Medium">
  {/* Content */}
</Modal>

// Large modal  
<Modal className="max-w-2xl" title="Large">
  {/* Content */}
</Modal>

// Extra large modal
<Modal className="max-w-4xl" title="Extra Large">
  {/* Content */}
</Modal>
\`\`\`

**Size Guidelines:**
- **Small (max-w-sm)**: Quick confirmations, simple alerts
- **Medium (max-w-md)**: Default size, forms, general content
- **Large (max-w-2xl)**: Complex forms, detailed content
- **Extra Large (max-w-4xl)**: Rich content, dashboards
        `
      }
    }
  }
};

// =================== REAL WORLD EXAMPLES ===================

export const ContactForm: Story = {
  render: () => (
    <ModalWrapper 
      title="Contact Us"
      helperText="Send us a message and we'll get back to you soon."
      showAction={true}
      actionLabel="Send Message"
      onAction={() => alert('Message sent!')}
      buttonText="Contact Form Example"
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name *</label>
          <Input placeholder="Your full name" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email *</label>
          <Input type="email" placeholder="your@email.com" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Subject</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>General Inquiry</option>
            <option>Technical Support</option>
            <option>Billing Question</option>
            <option>Feature Request</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message *</label>
          <textarea 
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows={4}
            placeholder="Tell us how we can help..."
          />
        </div>
        <div className="text-xs text-gray-500">
          * Required fields
        </div>
      </div>
    </ModalWrapper>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: { 
        inline: false,
        iframeHeight: 600 
      }
    }
  }
};

export const SettingsModal: Story = {
  render: () => (
    <ModalWrapper 
      title="Application Settings"
      helperText="Configure your preferences and account settings."
      showAction={true}
      actionLabel="Save Changes"
      onAction={() => alert('Settings saved!')}
      buttonText="Settings Example"
    >
      <div className="space-y-6">
        <div>
          <h4 className="flex items-center font-medium mb-3">
            <Settings className="w-4 h-4 mr-2" />
            Appearance
          </h4>
          <div className="space-y-3 ml-6">
            <div>
              <label className="block text-sm font-medium mb-1">Theme</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Language</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-3">Notifications</h4>
          <div className="space-y-2 ml-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <span className="text-sm">Email notifications</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Push notifications</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <span className="text-sm">Marketing updates</span>
            </label>
          </div>
        </div>
      </div>
    </ModalWrapper>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: { 
        inline: false,
        iframeHeight: 600 
      }
    }
  }
};

// =================== ACCESSIBILITY ===================

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-8 p-8">
      <div className="text-center max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">♿ Accessibility Features</h2>
        <p className="text-gray-600 mb-8">
          Our Modal component includes comprehensive accessibility features for all users.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold text-green-800 mb-4">✅ Keyboard Navigation</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Escape</kbd>
                <span>Close modal</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Tab</kbd>
                <span>Navigate elements</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd>
                <span>Activate buttons</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold text-blue-800 mb-4">🔊 Screen Readers</h3>
            <ul className="text-sm space-y-1">
              <li>• ARIA dialog role</li>
              <li>• Modal attributes</li>
              <li>• Descriptive labels</li>
              <li>• Focus announcements</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold text-purple-800 mb-4">🎯 Focus Management</h3>
            <ul className="text-sm space-y-1">
              <li>• Automatic focus trapping</li>
              <li>• Returns focus to trigger</li>
              <li>• Clear focus indicators</li>
              <li>• Prevents background interaction</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold text-orange-800 mb-4">📱 Mobile Support</h3>
            <ul className="text-sm space-y-1">
              <li>• Touch-friendly buttons</li>
              <li>• Responsive sizing</li>
              <li>• Prevents body scroll</li>
              <li>• Gesture support</li>
            </ul>
          </div>
        </div>

        <ModalWrapper 
          title="Test Accessibility"
          helperText="Try keyboard navigation and screen reader features!"
          showAction={true}
          actionLabel="Excellent!"
          onAction={() => alert('Great accessibility testing!')}
          buttonText="Test Accessibility Features"
        >
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded">
              <p className="text-blue-800 font-medium mb-2">Try these accessibility features:</p>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Tab through all interactive elements</li>
                <li>• Press Escape to close the modal</li>
                <li>• Use Enter/Space on buttons</li>
                <li>• Test with a screen reader if available</li>
              </ul>
            </div>
            
            <div className="flex gap-2 justify-center">
              <Button size="sm">First Button</Button>
              <Button size="sm" variant="outline">Second Button</Button>
              <Button size="sm" variant="outline">Third Button</Button>
            </div>
          </div>
        </ModalWrapper>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: { 
        inline: false,
        iframeHeight: 700 
      },
      description: {
        story: `
### Complete Accessibility Implementation

The Modal component follows WCAG 2.1 guidelines and includes:

**Automatic Features:**
- Focus trapping with focus-trap-react
- ARIA dialog role and attributes
- Keyboard event handling (Escape, Tab, Enter)
- Screen reader announcements

**Implementation:**
\`\`\`tsx
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
>
  <FocusTrap active={open}>
    <h2 id="modal-title">{title}</h2>
    {children}
  </FocusTrap>
</div>
\`\`\`

**Testing Checklist:**
- [ ] Tab navigation works correctly
- [ ] Escape key closes modal
- [ ] Focus returns to trigger element
- [ ] Screen reader announces modal opening
- [ ] All interactive elements are accessible
        `
      }
    }
  }
};
