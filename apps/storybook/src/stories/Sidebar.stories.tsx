import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState, useEffect } from 'react';
import { 
  Home, 
  Settings, 
  Users, 
  FileText, 
  BarChart, 
  HelpCircle,
  User,
  LogOut,
  Bell,
  Search,
  Calendar,
  Database,
  Shield,
  Globe,
  Mail,
  CreditCard,
  Package,
  Truck,
  DollarSign,
  TrendingUp,
  Activity,
  Zap,
  Target,
  Award,
  Star,
  Heart,
  Bookmark,
  Camera,
  Music,
  Video,
  Image as ImageIcon,
  Download,
  Upload,
  Edit,
  Share,
  Eye,
  CheckCircle,
  MessageSquare,
  Phone,
  Clock,
  Lock,
  Copy,
  Info,
  RefreshCw,
  PlayCircle,
  PauseCircle,
  SkipBack,
  Calculator,
  Plus, 
  Bug,
  Code,
  SkipForward,
} from 'lucide-react';
import {
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarItem,
  SidebarTrigger,
  SidebarSubItem,
  SidebarMobileToggle,
  SidebarCollapseToggle
} from '@sume/ui/components/Sidebar';
const noop = () => {};
type SidebarProps = React.ComponentProps<typeof Sidebar>;
const meta:Meta<SidebarProps> = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `


A comprehensive, production-ready sidebar navigation system built with React, TypeScript, and Framer Motion.

## 🏗️ Architecture

The sidebar system consists of modular components that work together through React Context:

- **Sidebar**: Main container with responsive behavior and state management
- **SidebarHeader**: Branded header area with icon and title support
- **SidebarFooter**: Footer area for user info, actions, or additional content
- **SidebarItem**: Wrapper for navigation items with consistent spacing
- **SidebarTrigger**: Interactive navigation item with optional expandable children
- **SidebarSubItem**: Nested navigation items for hierarchical structures
- **SidebarMobileToggle**: Mobile hamburger menu button
- **SidebarCollapseToggle**: Desktop collapse/expand control

## 🎯 Key Features

### Responsive Design
- **Desktop (≥1024px)**: Collapsible sidebar with icon-only and full-width modes
- **Mobile (<1024px)**: Slide-out overlay with backdrop and smooth animations
- **Breakpoint Detection**: Automatic responsive behavior based on viewport size

### State Management
- **React Context**: Centralized state sharing across all child components
- **Controlled Components**: External state management for collapsed/mobile states
- **Event Callbacks**: Comprehensive callback system for state changes

### Accessibility
- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Focus Management**: Proper focus trapping and restoration
- **Semantic HTML**: Correct use of nav, ul, li elements

### Performance
- **Optimized Animations**: Hardware-accelerated transforms using Framer Motion
- **Efficient Re-renders**: Context optimization to prevent unnecessary updates
- **Lazy State Updates**: Debounced resize events for smooth performance

### Animation System
- **Smooth Transitions**: 200ms default timing with spring physics
- **Micro-interactions**: Hover states, click feedback, and loading states
- **Coordinated Motion**: Synchronized animations across components
- **Reduced Motion Support**: Respects user preferences for accessibility

## 📱 Responsive Behavior

### Desktop Mode (≥1024px)
\`\`\`
┌─────────────────────────────────────────────────────────────┐
│ ┌─────────────┐ ┌─────────────────────────────────────────┐ │
│ │   Sidebar   │ │           Main Content Area             │ │
│ │             │ │                                         │ │
│ │   [Header]  │ │  - Sidebar can collapse to 5rem width  │ │
│ │             │ │  - Icons remain visible when collapsed  │ │
│ │ [Nav Items] │ │  - Smooth width transitions             │ │
│ │             │ │  - Collapse button on right edge       │ │
│ │   [Footer]  │ │                                         │ │
│ └─────────────┘ └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
\`\`\`

### Mobile Mode (<1024px)
\`\`\`
┌─────────────────────────────────────────────────────────────┐
│ [☰] ← Mobile Toggle                                         │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                Main Content Area                        │ │
│ │                                                         │ │
│ │  - Sidebar slides in from left as overlay              │ │
│ │  - Full screen width when open                         │ │
│ │  - Backdrop prevents interaction with main content     │ │
│ │  - Touch-friendly tap targets                          │ │
│ │                                                         │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
\`\`\`

## 🔧 Implementation Examples

### Basic Setup
\`\`\`tsx
import { useState } from 'react';
import { Home, Settings } from 'lucide-react';
import {
  Sidebar,
  SidebarHeader,
  SidebarItem,
  SidebarTrigger,
  SidebarMobileToggle,
  SidebarCollapseToggle
} from './components/Sidebar';

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <SidebarMobileToggle 
        onClick={() => setMobileOpen(!mobileOpen)} 
      />
      
      <Sidebar
        collapsed={collapsed}
        onCollapseToggle={() => setCollapsed(!collapsed)}
        mobileOpen={mobileOpen}
        onMobileToggle={() => setMobileOpen(!mobileOpen)}
      >
        <SidebarCollapseToggle 
          collapsed={collapsed}
          onClick={() => setCollapsed(!collapsed)}
        />
        
        <SidebarHeader icon={<Home />}>
          My Application
        </SidebarHeader>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <SidebarItem>
              <SidebarTrigger label="Dashboard" icon={<Home />} />
            </SidebarItem>
            <SidebarItem>
              <SidebarTrigger label="Settings" icon={<Settings />} />
            </SidebarItem>
          </ul>
        </nav>
      </Sidebar>
      
      <main className="flex-1 p-8">
        {/* Your main content */}
      </main>
    </div>
  );
}
\`\`\`

### Advanced Hierarchical Navigation
\`\`\`tsx
<SidebarItem>
  <SidebarTrigger label="User Management" icon={<Users />}>
    <SidebarSubItem 
      label="All Users" 
      icon={<Users />}
      active={currentRoute === '/users'}
      onClick={() => navigate('/users')}
    />
    <SidebarSubItem 
      label="User Groups" 
      icon={<Shield />}
      onClick={() => navigate('/users/groups')}
    />
    <SidebarSubItem 
      label="Permissions" 
      icon={<Lock />}
      onClick={() => navigate('/users/permissions')}
    />
  </SidebarTrigger>
</SidebarItem>
\`\`\`

## 🎨 Customization

### Custom Styling
\`\`\`tsx
<SidebarHeader 
  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
  icon={<Home />}
>
  Custom Branded Header
</SidebarHeader>
\`\`\`

### Theme Integration
\`\`\`css
/* CSS Custom Properties for theming */
:root {
  --sidebar-bg: theme('colors.white');
  --sidebar-border: theme('colors.gray.200');
  --sidebar-text: theme('colors.gray.900');
  --sidebar-hover: theme('colors.gray.50');
  --sidebar-active: theme('colors.blue.50');
  --sidebar-active-text: theme('colors.blue.600');
}

[data-theme="dark"] {
  --sidebar-bg: theme('colors.gray.900');
  --sidebar-border: theme('colors.gray.700');
  --sidebar-text: theme('colors.gray.100');
  --sidebar-hover: theme('colors.gray.800');
  --sidebar-active: theme('colors.blue.900');
  --sidebar-active-text: theme('colors.blue.400');
}
\`\`\`

## 🧪 Testing Guidelines

### Unit Testing
\`\`\`tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Sidebar, SidebarTrigger } from './Sidebar';

test('sidebar collapses when toggle is clicked', () => {
  const onCollapseToggle = jest.fn();
  render(
    <Sidebar collapsed={false} onCollapseToggle={onCollapseToggle}>
      <SidebarTrigger label="Test" />
    </Sidebar>
  );
  
  const collapseButton = screen.getByLabelText(/collapse sidebar/i);
  fireEvent.click(collapseButton);
  
  expect(onCollapseToggle).toHaveBeenCalledTimes(1);
});
\`\`\`

### Integration Testing
\`\`\`tsx
test('mobile sidebar opens and closes correctly', async () => {
  // Mock window.innerWidth for mobile simulation
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 768,
  });

  const { rerender } = render(<SidebarTest />);
  
  const mobileToggle = screen.getByLabelText(/toggle sidebar/i);
  fireEvent.click(mobileToggle);
  
  expect(screen.getByRole('navigation')).toBeVisible();
  
  // Test backdrop click
  const backdrop = document.querySelector('.bg-black\\/20');
  fireEvent.click(backdrop);
  
  await waitFor(() => {
    expect(screen.queryByRole('navigation')).not.toBeVisible();
  });
});
\`\`\`

## 🚀 Performance Considerations

### Optimization Strategies
1. **Component Memoization**: Use React.memo for static sub-components
2. **Context Splitting**: Separate collapsed state from other sidebar state
3. **Event Delegation**: Use single event listeners for multiple nav items
4. **Lazy Loading**: Code-split large navigation trees
5. **Animation Optimization**: Use transform and opacity for smooth 60fps animations

### Bundle Size Impact
- Core component: ~8KB gzipped (including Framer Motion)
- Additional icons: ~2KB per 10 Lucide React icons
- Recommended: Tree-shake unused components and icons

## 🔗 Related Components

- **NavigationMenu**: For horizontal navigation bars
- **Breadcrumb**: For hierarchical page navigation
- **Tabs**: For content switching within pages
- **CommandPalette**: For quick navigation and actions
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
        { name: 'dark', value: '#1f2937' },
        { name: 'gray', value: '#f3f4f6' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    collapsed: {
      control: { type: 'boolean' },
      description: '**Controls the collapsed state of the sidebar on desktop**\n\n- `true`: Sidebar shows only icons (5rem width)\n- `false`: Sidebar shows full content (16rem width)\n\n*Note: This prop is ignored on mobile devices*',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    mobileOpen: {
      control: { type: 'boolean' },
      description: '**Controls the visibility of the sidebar on mobile devices**\n\n- `true`: Sidebar slides in from left with backdrop\n- `false`: Sidebar is hidden off-screen\n\n*Note: This prop only affects mobile viewports (<1024px)*',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: { type: 'text' },
      description: '**Additional CSS classes to apply to the sidebar container**\n\nUseful for:\n- Custom background colors\n- Border modifications\n- Shadow adjustments\n- Theme-specific styling',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    onCollapseToggle: {
      action: 'onCollapseToggle',
      description: '**Callback fired when the collapse state should change**\n\nTriggered by:\n- Clicking the collapse toggle button\n- Keyboard navigation (Enter/Space)\n- Programmatic state changes\n\n``````',
      table: {
        type: { summary: '() => void' },
      },
    },
    onMobileToggle: {
      action: 'onMobileToggle',
      description: '**Callback fired when the mobile sidebar state should change**\n\nTriggered by:\n- Clicking the mobile toggle button\n- Clicking the backdrop overlay\n- Swipe gestures (if implemented)\n- Escape key press\n\n``````',
      table: {
        type: { summary: '() => void' },
      },
    },
    children: {
      control: false,
      description: '**React children to render inside the sidebar**\n\nTypically includes:\n- `SidebarHeader`\n- Navigation content (`<nav>`)\n- `SidebarFooter`\n- `SidebarCollapseToggle`',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
} satisfies Meta<SidebarProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// Enhanced Wrapper Component with Detailed State Management
const SidebarWrapper = ({ 
  initialCollapsed = false, 
  initialMobileOpen = false,
  children,
  showMainContent = true,
  debugMode = false,
  ...args 
}: any) => {
  const [collapsed, setCollapsed] = useState(initialCollapsed);
  const [mobileOpen, setMobileOpen] = useState(initialMobileOpen);
  const [activeRoute, setActiveRoute] = useState('/dashboard/overview');
  const [expandedItems, setExpandedItems] = useState<string[]>(['dashboard', 'users']);

  // Debug information for development
  useEffect(() => {
    if (debugMode) {
      console.log('Sidebar State:', { collapsed, mobileOpen, activeRoute, expandedItems });
    }
  }, [collapsed, mobileOpen, activeRoute, expandedItems, debugMode]);

  const handleCollapseToggle = () => {
    const newCollapsed = !collapsed;
    setCollapsed(newCollapsed);
    if (args.onCollapseToggle) {
      args.onCollapseToggle(newCollapsed);
    }
  };

  const handleMobileToggle = () => {
    const newMobileOpen = !mobileOpen;
    setMobileOpen(newMobileOpen);
    if (args.onMobileToggle) {
      args.onMobileToggle(newMobileOpen);
    }
  };

  const handleRouteChange = (route: string) => {
    setActiveRoute(route);
    // Close mobile sidebar on navigation
    if (mobileOpen && window.innerWidth < 1024) {
      setMobileOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <SidebarMobileToggle onClick={handleMobileToggle} />
      
      <Sidebar
        {...args}
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onCollapseToggle={handleCollapseToggle}
        onMobileToggle={handleMobileToggle}
      >
        <SidebarCollapseToggle 
          collapsed={collapsed}
          onClick={handleCollapseToggle}
        />
        {children}
      </Sidebar>
      
      {showMainContent && (
        <main className="flex-1 p-4 lg:p-8 overflow-auto">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Dashboard Overview
              </h1>
              <p className="text-lg text-gray-600">
                Current Route: <code className="bg-gray-100 px-2 py-1 rounded text-sm">{activeRoute}</code>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Sidebar State</h3>
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Settings className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Collapsed:</span>
                    <span className={`font-medium px-2 py-1 rounded ${collapsed ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>
                      {collapsed ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mobile Open:</span>
                    <span className={`font-medium px-2 py-1 rounded ${mobileOpen ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
                      {mobileOpen ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Viewport:</span>
                    <span className="font-medium text-gray-900">
                      {typeof window !== 'undefined' && window.innerWidth >= 1024 ? 'Desktop' : 'Mobile'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Usage Tips</h3>
                  <div className="p-2 bg-green-100 rounded-lg">
                    <HelpCircle className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Click collapse button to toggle desktop view</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Use hamburger menu on mobile devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Click backdrop to close mobile sidebar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Resize browser to test responsive behavior</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Zap className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
                <div className="space-y-3">
                  <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors"
                  >
                    {collapsed ? 'Expand' : 'Collapse'} Sidebar
                  </button>
                  <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors"
                  >
                    {mobileOpen ? 'Close' : 'Open'} Mobile Menu
                  </button>
                  <button
                    onClick={() => handleRouteChange('/settings/general')}
                    className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors"
                  >
                    Navigate to Settings
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Responsive Design Features
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Desktop Experience</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Collapsible sidebar with smooth width transitions</li>
                      <li>• Icon-only mode preserves navigation accessibility</li>
                      <li>• Hover states reveal full labels when collapsed</li>
                      <li>• Dedicated collapse button for easy toggling</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">Mobile Experience</h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Slide-out overlay with backdrop blur</li>
                      <li>• Touch-friendly tap targets (minimum 44px)</li>
                      <li>• Automatic close on navigation for better UX</li>
                      <li>• Swipe gesture support (when implemented)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Implementation Patterns
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-medium text-purple-900 mb-2">State Management</h4>
                    <pre className="text-xs text-purple-800 bg-purple-100 p-2 rounded overflow-x-auto">
{`const [collapsed, setCollapsed] = useState(false);
const [mobileOpen, setMobileOpen] = useState(false);

<Sidebar
  collapsed={collapsed}
  mobileOpen={mobileOpen}
  onCollapseToggle={() => setCollapsed(!collapsed)}
  onMobileToggle={() => setMobileOpen(!mobileOpen)}
>`}</pre>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-medium text-orange-900 mb-2">Navigation Handling</h4>
                    <pre className="text-xs text-orange-800 bg-orange-100 p-2 rounded overflow-x-auto">
{`<SidebarSubItem
  label="Dashboard"
  active={route === '/dashboard'}
  onClick={() => {
    navigate('/dashboard');
    // Close mobile sidebar on navigation
    if (isMobile) setMobileOpen(false);
  }}
/>`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

// Story: Default Implementation
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: `
### Basic Sidebar Implementation

The default sidebar configuration with essential navigation items. This example demonstrates:

- **Simple Navigation Structure**: Basic menu items without nested children
- **Icon Integration**: Lucide React icons for visual hierarchy
- **Header Branding**: Company logo and application name
- **Responsive Behavior**: Automatic mobile/desktop adaptation

**Key Features Demonstrated:**
- Clean, minimal design
- Hover states and transitions
- Proper semantic HTML structure
- Accessibility considerations

**Use Case:** Perfect for simple applications with flat navigation structures, such as:
- Personal dashboards
- Small business tools
- Portfolio websites
- Documentation sites
        `,
      },
    },
  },
  args: {
    onCollapseToggle: noop,
    onMobileToggle: noop,
  },
  render: (args:SidebarProps) => (
    <SidebarWrapper {...args}>
      <SidebarHeader icon={<Home />}>
        My Application
      </SidebarHeader>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <SidebarItem>
            <SidebarTrigger label="Dashboard" icon={<Home />} />
          </SidebarItem>
          <SidebarItem>
            <SidebarTrigger label="Analytics" icon={<BarChart />} />
          </SidebarItem>
          <SidebarItem>
            <SidebarTrigger label="Users" icon={<Users />} />
          </SidebarItem>
          <SidebarItem>
            <SidebarTrigger label="Settings" icon={<Settings />} />
          </SidebarItem>
          <SidebarItem>
            <SidebarTrigger label="Help" icon={<HelpCircle />} />
          </SidebarItem>
        </ul>
      </nav>
    </SidebarWrapper>
  ),
};

// Story: Enterprise Application
export const EnterpriseApplication: Story = {
  parameters: {
    docs: {
      description: {
        story: `
### Enterprise-Grade Navigation System

A comprehensive sidebar implementation suitable for complex business applications. This example showcases:

- **Deep Navigation Hierarchy**: Multi-level menu structure with logical grouping
- **Rich User Context**: Detailed user information and status indicators
- **Professional Branding**: Corporate logo and gradient styling
- **Comprehensive Feature Set**: All available sidebar components working together

**Advanced Features:**
- Active state management with visual indicators
- Hierarchical navigation with expand/collapse functionality
- User profile integration with action buttons
- Professional styling with gradient headers
- Comprehensive icon usage for improved UX

**Use Case:** Ideal for enterprise applications such as:
- CRM systems
- ERP platforms
- Business intelligence dashboards
- Project management tools
- Administrative panels
        `,
      },
    },
  },
  args: {
    onCollapseToggle: noop,
    onMobileToggle: noop,
  },
  render: (args:SidebarProps) => (
    <SidebarWrapper {...args}>
      <SidebarHeader 
        icon="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=40&h=40&fit=crop&crop=center"
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-b-0"
      >
        <span className="font-bold">Enterprise Suite</span>
      </SidebarHeader>
      
      <nav className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-blue-50/50 to-white">
        <div className="space-y-1">
          {/* Dashboard Section */}
          <div className="pb-2">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
              Overview
            </div>
            <ul className="space-y-1">
              <SidebarItem>
                <SidebarTrigger label="Dashboard" icon={<Home />}>
                  <SidebarSubItem label="Overview" icon={<BarChart />} active onClick={noop} />
                  <SidebarSubItem label="Analytics" icon={<TrendingUp />} onClick={noop} />
                  <SidebarSubItem label="Reports" icon={<FileText />} onClick={noop} />
                  <SidebarSubItem label="KPI Metrics" icon={<Target />} onClick={noop} />
                </SidebarTrigger>
              </SidebarItem>
            </ul>
          </div>

          {/* Business Management */}
          <div className="pb-2">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
              Business Management
            </div>
            <ul className="space-y-1">
              <SidebarItem>
                <SidebarTrigger label="Customer Management" icon={<Users />}>
                  <SidebarSubItem label="All Customers" icon={<Users />} onClick={noop} />
                  <SidebarSubItem label="Customer Groups" icon={<Shield />} onClick={noop} />
                  <SidebarSubItem label="Lead Management" icon={<Target />} onClick={noop} />
                  <SidebarSubItem label="Customer Support" icon={<MessageSquare />} onClick={noop} />
                </SidebarTrigger>
              </SidebarItem>
              
              <SidebarItem>
                <SidebarTrigger label="Sales & Orders" icon={<Package />}>
                  <SidebarSubItem label="Order Management" icon={<Package />} onClick={noop} />
                  <SidebarSubItem label="Inventory" icon={<Database />} onClick={noop} />
                  <SidebarSubItem label="Shipping" icon={<Truck />} onClick={noop} />
                  <SidebarSubItem label="Invoicing" icon={<FileText />} onClick={noop} />
                </SidebarTrigger>
              </SidebarItem>

              <SidebarItem>
                <SidebarTrigger label="Financial Management" icon={<DollarSign />}>
                  <SidebarSubItem label="Accounting" icon={<Calculator />} onClick={noop} />
                  <SidebarSubItem label="Budgets" icon={<TrendingUp />} onClick={noop} />
                  <SidebarSubItem label="Expenses" icon={<CreditCard />} onClick={noop} />
                  <SidebarSubItem label="Tax Management" icon={<FileText />} onClick={noop} />
                </SidebarTrigger>
              </SidebarItem>
            </ul>
          </div>

          {/* Content & Marketing */}
          <div className="pb-2">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
              Content & Marketing
            </div>
            <ul className="space-y-1">
              <SidebarItem>
                <SidebarTrigger label="Content Management" icon={<FileText />}>
                  <SidebarSubItem label="Articles" icon={<FileText />} onClick={noop} />
                  <SidebarSubItem label="Media Library" icon={<ImageIcon />} onClick={noop} />
                  <SidebarSubItem label="Categories" icon={<Bookmark />} onClick={noop} />
                  <SidebarSubItem label="SEO Tools" icon={<Search />} onClick={noop} />
                </SidebarTrigger>
              </SidebarItem>

              <SidebarItem>
                <SidebarTrigger label="Marketing Tools" icon={<TrendingUp />}>
                  <SidebarSubItem label="Campaigns" icon={<Mail />} onClick={noop} />
                  <SidebarSubItem label="Social Media" icon={<Share />} onClick={noop} />
                  <SidebarSubItem label="Email Marketing" icon={<Mail />} onClick={noop} />
                  <SidebarSubItem label="Analytics" icon={<BarChart />} onClick={noop} />
                </SidebarTrigger>
              </SidebarItem>
            </ul>
          </div>

          {/* System Administration */}
          <div className="pb-2">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
              Administration
            </div>
            <ul className="space-y-1">
              <SidebarItem>
                <SidebarTrigger label="User Management" icon={<Shield />}>
                  <SidebarSubItem label="All Users" icon={<Users />} onClick={noop} />
                  <SidebarSubItem label="Roles & Permissions" icon={<Lock />} onClick={noop} />
                  <SidebarSubItem label="Access Control" icon={<Shield />} onClick={noop} />
                  <SidebarSubItem label="Audit Logs" icon={<Activity />} onClick={noop} />
                </SidebarTrigger>
              </SidebarItem>

              <SidebarItem>
                <SidebarTrigger label="System Settings" icon={<Settings />}>
                  <SidebarSubItem label="General" icon={<Settings />} onClick={noop} />
                  <SidebarSubItem label="Security" icon={<Lock />} onClick={noop} />
                  <SidebarSubItem label="Integrations" icon={<Globe />} onClick={noop} />
                  <SidebarSubItem label="Backup & Recovery" icon={<Database />} onClick={noop} />
                </SidebarTrigger>
              </SidebarItem>

              <SidebarItem>
                <SidebarTrigger label="Support & Help" icon={<HelpCircle />}>
                  <SidebarSubItem label="Documentation" icon={<FileText />} onClick={noop} />
                  <SidebarSubItem label="Support Tickets" icon={<MessageSquare />} onClick={noop} />
                  <SidebarSubItem label="System Status" icon={<Activity />} onClick={noop} />
                  <SidebarSubItem label="Contact Support" icon={<Phone />} onClick={noop} />
                </SidebarTrigger>
              </SidebarItem>
            </ul>
          </div>
        </div>
      </nav>
      
      <SidebarFooter className="border-t-2 border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="space-y-3">
          {/* User Profile */}
          <div className="flex items-center gap-3 p-2 bg-white rounded-lg shadow-sm">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                alt="User avatar"
                className="w-10 h-10 rounded-full border-2 border-blue-200"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">John Anderson</p>
              <p className="text-xs text-gray-500 truncate">Senior Administrator</p>
              <p className="text-xs text-green-600 font-medium">Online</p>
            </div>
            <div className="flex flex-col gap-1">
              <button 
                className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
                onClick={noop}
                title="Account Settings"
              >
                <Settings size={14} className="text-gray-600" />
              </button>
              <button 
                className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
                onClick={noop}
                title="Logout"
              >
                <LogOut size={14} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex justify-between gap-2">
            <button 
              className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors"
              onClick={noop}
            >
              <Bell size={14} />
              <span>Notifications</span>
            </button>
            <button 
              className="flex items-center justify-center p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors"
              onClick={noop}
              title="Switch Organization"
            >
              <RefreshCw size={14} />
            </button>
          </div>
        </div>
      </SidebarFooter>
    </SidebarWrapper>
  ),
};

// Story: Media Application
export const MediaApplication: Story = {
  parameters: {
    docs: {
      description: {
        story: `
### Media & Entertainment Platform

A specialized sidebar design optimized for media and entertainment applications. Features:

- **Media-Focused Navigation**: Categories tailored for content creation and consumption
- **Visual Hierarchy**: Strategic use of icons and colors for media workflows
- **Creator Tools**: Specialized sections for content creators and media professionals
- **Playback Controls**: Integration points for media player controls

**Specialized Features:**
- Media library management
- Content creation tools
- Playback and streaming controls
- Social and sharing features
- Analytics for content performance

**Use Case:** Perfect for:
- Video streaming platforms
- Music applications
- Photo management tools
- Content creation suites
- Social media platforms
        `,
      },
    },
  },
  args: {
    onCollapseToggle: noop,
    onMobileToggle: noop,
  },
  render: (args:SidebarProps) => (
    <SidebarWrapper {...args}>
      <SidebarHeader 
        icon={<PlayCircle />}
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-b-0"
      >
        <span className="font-bold">MediaStudio Pro</span>
      </SidebarHeader>
      
      <nav className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-purple-50/30 to-white">
        <div className="space-y-1">
          {/* Main Navigation */}
          <ul className="space-y-1 mb-6">
            <SidebarItem>
              <SidebarTrigger label="Dashboard" icon={<Home />}>
                <SidebarSubItem label="Overview" icon={<BarChart />} active onClick={noop} />
                <SidebarSubItem label="Recent Activity" icon={<Clock />} onClick={noop} />
                <SidebarSubItem label="Trending" icon={<TrendingUp />} onClick={noop} />
              </SidebarTrigger>
            </SidebarItem>
          </ul>

          {/* Media Library */}
          <div className="pb-2">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
              Media Library
            </div>
            <ul className="space-y-1">
              <SidebarItem>
                <SidebarTrigger label="My Content" icon={<Video />}>
                  <SidebarSubItem label="Videos" icon={<Video />} onClick={noop} />
                  <SidebarSubItem label="Audio" icon={<Music />} onClick={noop} />
                  <SidebarSubItem label="Images" icon={<ImageIcon />} onClick={noop} />
                  <SidebarSubItem label="Documents" icon={<FileText />} onClick={noop} />
                </SidebarTrigger>
              </SidebarItem>

              <SidebarItem>
                <SidebarTrigger label="Collections" icon={<Bookmark />}>
                  <SidebarSubItem label="Favorites" icon={<Heart />} onClick={noop} />
                  <SidebarSubItem label="Playlists" icon={<Music />} onClick={noop} />
                  <SidebarSubItem label="Albums" icon={<ImageIcon />} onClick={noop} />
                  <SidebarSubItem label="Saved Items" icon={<Bookmark />} onClick={noop} />
                </SidebarTrigger>
              </SidebarItem>

              <SidebarItem>
                <SidebarTrigger label="Storage" icon={<Database />}>
                  <SidebarSubItem label="Cloud Storage" icon={<Upload />} onClick={noop} />
                  <SidebarSubItem label="Local Files" icon={<Download />} onClick={noop} />
                  <SidebarSubItem label="Shared Folders" icon={<Share />} onClick={noop} />
                  <SidebarSubItem label="Backup" icon={<Shield />} onClick={noop} />
                </SidebarTrigger>
              </SidebarItem>
            </ul>
          </div>

          {/* Creation Tools */}
          <div className="pb-2">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
              Creation Tools
            </div>
            <ul className="space-y-1">
              <SidebarItem>
                <SidebarTrigger label="Video Editor" icon={<Edit />}>
                  <SidebarSubItem label="New Project" icon={<Plus />} onClick={noop} />
                  <SidebarSubItem label="Templates" icon={<Copy />} onClick={noop} />
                  <SidebarSubItem label="Effects" icon={<Zap />} onClick={noop} />
                  <SidebarSubItem label="Export" icon={<Upload />} onClick={noop} />
                </SidebarTrigger>
              </SidebarItem>

              <SidebarItem>
                <SidebarTrigger label="Audio Studio" icon={<Music />}>
                  <SidebarSubItem label="Recording" icon={<PlayCircle />} onClick={noop} />
                  <SidebarSubItem label="Mixer" icon={<Settings />} onClick={noop} />
                  <SidebarSubItem label="Effects" icon={<Zap />} onClick={noop} />
                  <SidebarSubItem label="Mastering" icon={<Award />} onClick={noop} />
                </SidebarTrigger>
              </SidebarItem>

              <SidebarItem>
                <SidebarTrigger label="Photo Editor" icon={<Camera />}>
                  <SidebarSubItem label="Basic Edits" icon={<Edit />} onClick={noop} />
                  <SidebarSubItem label="Filters" icon={<Eye />} onClick={noop} />
                  <SidebarSubItem label="Advanced" icon={<Settings />} onClick={noop} />
                  <SidebarSubItem label="Batch Process" icon={<Copy />} onClick={noop} />
                </SidebarTrigger>
              </SidebarItem>
            </ul>
          </div>

          {/* Social & Sharing */}
          <div className="pb-2">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
              Social & Sharing
            </div>
            <ul className="space-y-1">
              <SidebarItem>
                <SidebarTrigger label="Publishing" icon={<Share />}>
                  <SidebarSubItem label="Upload" icon={<Upload />} onClick={noop} />
                  <SidebarSubItem label="Schedule" icon={<Calendar />} onClick={noop} />
                  <SidebarSubItem label="Social Media" icon={<Globe />} onClick={noop} />
                  <SidebarSubItem label="Embeds" icon={<Code />} onClick={noop} />
                </SidebarTrigger>
              </SidebarItem>

              <SidebarItem>
                <SidebarTrigger label="Community" icon={<Users />}>
                  <SidebarSubItem label="Comments" icon={<MessageSquare />} onClick={noop} />
                  <SidebarSubItem label="Followers" icon={<Users />} onClick={noop} />
                  <SidebarSubItem label="Collaborations" icon={<Share />} onClick={noop} />
                  <SidebarSubItem label="Reviews" icon={<Star />} onClick={noop} />
                </SidebarTrigger>
              </SidebarItem>
            </ul>
          </div>

          {/* Analytics & Insights */}
          <div className="pb-2">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
              Analytics
            </div>
            <ul className="space-y-1">
              <SidebarItem>
                <SidebarTrigger label="Performance" icon={<BarChart />}>
                  <SidebarSubItem label="Views & Plays" icon={<Eye />} onClick={noop} />
                  <SidebarSubItem label="Engagement" icon={<Heart />} onClick={noop} />
                  <SidebarSubItem label="Revenue" icon={<DollarSign />} onClick={noop} />
                  <SidebarSubItem label="Demographics" icon={<Users />} onClick={noop} />
                </SidebarTrigger>
              </SidebarItem>

              <SidebarItem>
                <SidebarTrigger label="Reports" icon={<FileText />}>
                  <SidebarSubItem label="Monthly Reports" icon={<Calendar />} onClick={noop} />
                  <SidebarSubItem label="Content Analysis" icon={<BarChart />} onClick={noop} />
                  <SidebarSubItem label="Audience Insights" icon={<Users />} onClick={noop} />
                  <SidebarSubItem label="Export Data" icon={<Download />} onClick={noop} />
                </SidebarTrigger>
              </SidebarItem>
            </ul>
          </div>

          {/* Settings */}
          <div className="pb-2">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
              Settings
            </div>
            <ul className="space-y-1">
              <SidebarItem>
                <SidebarTrigger label="Preferences" icon={<Settings />}>
                  <SidebarSubItem label="General" icon={<Settings />} onClick={noop} />
                  <SidebarSubItem label="Playback" icon={<PlayCircle />} onClick={noop} />
                  <SidebarSubItem label="Quality" icon={<Award />} onClick={noop} />
                  <SidebarSubItem label="Privacy" icon={<Lock />} onClick={noop} />
                </SidebarTrigger>
              </SidebarItem>

              <SidebarItem>
                <SidebarTrigger label="Help & Support" icon={<HelpCircle />}>
                  <SidebarSubItem label="Tutorials" icon={<PlayCircle />} onClick={noop} />
                  <SidebarSubItem label="Documentation" icon={<FileText />} onClick={noop} />
                  <SidebarSubItem label="Contact Support" icon={<MessageSquare />} onClick={noop} />
                  <SidebarSubItem label="Feedback" icon={<Star />} onClick={noop} />
                </SidebarTrigger>
              </SidebarItem>
            </ul>
          </div>
        </div>
      </nav>
      
      <SidebarFooter className="border-t-2 border-purple-100 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="space-y-3">
          {/* Current User */}
          <div className="flex items-center gap-3 p-2 bg-white rounded-lg shadow-sm">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
                alt="Creator avatar"
                className="w-10 h-10 rounded-full border-2 border-purple-200"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full animate-pulse"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">Sarah Creative</p>
              <p className="text-xs text-gray-500 truncate">Content Creator</p>
              <p className="text-xs text-red-600 font-medium flex items-center gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                Live Streaming
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <button 
                className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
                onClick={noop}
                title="Profile Settings"
              >
                <User size={14} className="text-gray-600" />
              </button>
              <button 
                className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
                onClick={noop}
                title="Go Live"
              >
                <Video size={14} className="text-red-600" />
              </button>
            </div>
          </div>

          {/* Media Controls */}
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Music size={16} className="text-purple-600" />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-gray-900 truncate">
                    Summer Vibes Mix 2024
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    Electronic • 3:45 / 7:23
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <button 
                className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                onClick={noop}
              >
                <SkipBack size={16} className="text-gray-600" />
              </button>
              <button 
                className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors"
                onClick={noop}
              >
                <PauseCircle size={18} />
              </button>
              <button 
                className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                onClick={noop}
              >
                <SkipForward size={16} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Quick Upload */}
          <button 
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
            onClick={noop}
          >
            <Upload size={16} />
            <span>Quick Upload</span>
          </button>
        </div>
      </SidebarFooter>
    </SidebarWrapper>
  ),
};

// Story: Initially Collapsed
export const InitiallyCollapsed: Story = {
  parameters: {
    docs: {
      description: {
        story: `
### Collapsed State Demonstration

Shows the sidebar in its collapsed state, demonstrating:

- **Icon-Only Navigation**: Clean, minimalist interface showing only icons
- **Space Efficiency**: Maximizes content area while preserving navigation access
- **Hover Reveals**: Icon tooltips and hover states for usability
- **Consistent Spacing**: Proper alignment and spacing in collapsed mode

**Key Benefits:**
- Increased screen real estate for main content
- Maintained navigation accessibility
- Professional, clean appearance
- Suitable for power users and focused workflows

**Use Case:** Ideal for:
- Data-heavy applications
- Content creation tools
- Development environments
- Professional dashboards where screen space is premium
        `,
      },
    },
  },
  args: {
    onCollapseToggle: noop,
    onMobileToggle: noop,
  },
  render: (args:SidebarProps) => (
    <SidebarWrapper initialCollapsed={true} {...args}>
      <SidebarHeader icon={<Home />}>
        Collapsed App
      </SidebarHeader>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <SidebarItem>
            <SidebarTrigger label="Dashboard" icon={<Home />} />
          </SidebarItem>
          <SidebarItem>
            <SidebarTrigger label="Analytics" icon={<BarChart />} />
          </SidebarItem>
          <SidebarItem>
            <SidebarTrigger label="Users" icon={<Users />}>
              <SidebarSubItem label="All Users" onClick={noop} />
              <SidebarSubItem label="Groups" onClick={noop} />
              <SidebarSubItem label="Permissions" onClick={noop} />
            </SidebarTrigger>
          </SidebarItem>
          <SidebarItem>
            <SidebarTrigger label="Content" icon={<FileText />}>
              <SidebarSubItem label="Articles" onClick={noop} />
              <SidebarSubItem label="Media" onClick={noop} />
              <SidebarSubItem label="Categories" onClick={noop} />
            </SidebarTrigger>
          </SidebarItem>
          <SidebarItem>
            <SidebarTrigger label="Settings" icon={<Settings />}>
              <SidebarSubItem label="General" onClick={noop} />
              <SidebarSubItem label="Security" onClick={noop} />
              <SidebarSubItem label="Integrations" onClick={noop} />
            </SidebarTrigger>
          </SidebarItem>
        </ul>
      </nav>
      
      <SidebarFooter>
        <div className="flex items-center justify-center">
          <div className="p-2 bg-gray-100 rounded-full">
            <User size={20} className="text-gray-600" />
          </div>
        </div>
      </SidebarFooter>
    </SidebarWrapper>
  ),
};

// Story: Mobile Open State
export const MobileOpen: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: `
### Mobile Interface Demonstration

**Best viewed in mobile viewport (320px - 768px)**

This story demonstrates the mobile-optimized sidebar experience:

- **Full-Screen Overlay**: Sidebar takes full width on mobile devices
- **Backdrop Interaction**: Tap outside to close (backdrop overlay)
- **Touch-Friendly**: All interactive elements meet 44px minimum touch target
- **Slide Animation**: Smooth slide-in/out transition from the left
- **Auto-Close on Navigation**: Sidebar closes when user navigates (UX best practice)

**Mobile-Specific Features:**
- Gesture-friendly interactions
- Large, tappable interface elements
- Optimized spacing for thumb navigation
- Clear visual hierarchy
- Accessibility considerations for mobile screen readers

**Use Case:** 
This mobile interface pattern is perfect for responsive web applications that need to work seamlessly across all device sizes, particularly:
- Progressive Web Apps (PWAs)
- Mobile-first applications
- Responsive admin dashboards
- Cross-platform web applications
        `,
      },
    },
  },
  args: {
    onCollapseToggle: noop,
    onMobileToggle: noop,
  },
  render: (args:SidebarProps) => (
    <SidebarWrapper initialMobileOpen={true} {...args}>
      <SidebarHeader icon={<Home />}>
        Mobile Navigation
      </SidebarHeader>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-3">
          <SidebarItem>
            <SidebarTrigger label="Home" icon={<Home />} />
          </SidebarItem>
          <SidebarItem>
            <SidebarTrigger label="Profile" icon={<User />}>
              <SidebarSubItem label="My Profile" icon={<User />} onClick={noop} />
              <SidebarSubItem label="Account Settings" icon={<Settings />} onClick={noop} />
              <SidebarSubItem label="Preferences" icon={<Heart />} onClick={noop} />
            </SidebarTrigger>
          </SidebarItem>
          <SidebarItem>
            <SidebarTrigger label="Messages" icon={<MessageSquare />}>
              <SidebarSubItem label="Inbox" icon={<Mail />} active onClick={noop} />
              <SidebarSubItem label="Sent" icon={<Share />} onClick={noop} />
              <SidebarSubItem label="Drafts" icon={<Edit />} onClick={noop} />
            </SidebarTrigger>
          </SidebarItem>
          <SidebarItem>
            <SidebarTrigger label="Notifications" icon={<Bell />} />
          </SidebarItem>
          <SidebarItem>
            <SidebarTrigger label="Settings" icon={<Settings />}>
              <SidebarSubItem label="General" icon={<Settings />} onClick={noop} />
              <SidebarSubItem label="Privacy" icon={<Lock />} onClick={noop} />
              <SidebarSubItem label="Security" icon={<Shield />} onClick={noop} />
            </SidebarTrigger>
          </SidebarItem>
          <SidebarItem>
            <SidebarTrigger label="Help & Support" icon={<HelpCircle />} />
          </SidebarItem>
        </ul>
      </nav>

      <SidebarFooter>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face"
              alt="User avatar"
              className="w-12 h-12 rounded-full border-2 border-gray-200"
            />
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">John Mobile</p>
              <p className="text-xs text-gray-500">john@mobile.com</p>
            </div>
            <button 
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              onClick={noop}
            >
              <LogOut size={18} className="text-gray-600" />
            </button>
          </div>
          
          <div className="flex gap-2">
            <button 
              className="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
              onClick={noop}
            >
              Upgrade Plan
            </button>
            <button 
              className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors"
              onClick={noop}
            >
              <Settings size={18} />
            </button>
          </div>
        </div>
      </SidebarFooter>
    </SidebarWrapper>
  ),
};

// Story: Custom Themed
export const CustomThemed: Story = {
  parameters: {
    docs: {
      description: {
        story: `
### Custom Theme Implementation

Demonstrates advanced theming capabilities of the sidebar system:

- **Custom Color Schemes**: Purple gradient theme with coordinated colors
- **Brand Integration**: Custom styling that maintains usability
- **Visual Hierarchy**: Strategic use of color to guide user attention
- **Consistent Design Language**: Cohesive styling across all components

**Theming Features:**
- CSS class overrides for all components
- Gradient backgrounds and borders
- Custom hover states and transitions
- Brand color integration
- Accessible color contrast ratios

**Implementation Approach:**
\`\`\`tsx
<SidebarHeader 
  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white"
  icon={<Star />}
>
  Custom Brand
</SidebarHeader>

<nav className="bg-gradient-to-b from-purple-50 to-blue-50">
  <SidebarItem className="hover:bg-white/50">
    <SidebarTrigger label="Dashboard" icon={<Home />} />
  </SidebarItem>
</nav>
\`\`\`

**Use Case:** Perfect for:
- Brand-specific applications
- White-label solutions
- Custom enterprise themes
- Design system integration
        `,
      },
    },
  },
  args: {
    onCollapseToggle: noop,
    onMobileToggle: noop,
  },
  render: (args:SidebarProps) => (
    <SidebarWrapper {...args}>
      <SidebarHeader 
        icon={<Star />}
        className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white border-b-0"
      >
        <span className="font-bold">Custom Theme</span>
      </SidebarHeader>
      
      <nav className="flex-1 p-4 bg-gradient-to-b from-purple-50/50 via-pink-50/30 to-blue-50/50">
        <ul className="space-y-2">
          <SidebarItem className="hover:bg-white/60 rounded-lg transition-all duration-200">
            <SidebarTrigger label="Dashboard" icon={<Home />}>
              <SidebarSubItem 
                label="Overview" 
                icon={<BarChart />} 
                active 
                onClick={noop}
                className="bg-purple-100 border border-purple-200 text-purple-800"
              />
              <SidebarSubItem label="Stats" icon={<TrendingUp />} onClick={noop} />
              <SidebarSubItem label="Reports" icon={<FileText />} onClick={noop} />
            </SidebarTrigger>
          </SidebarItem>
          
          <SidebarItem className="hover:bg-white/60 rounded-lg transition-all duration-200">
            <SidebarTrigger label="Creative Tools" icon={<Zap />}>
              <SidebarSubItem label="Design Studio" icon={<Edit />} onClick={noop} />
              <SidebarSubItem label="Brand Assets" icon={<Star />} onClick={noop} />
              <SidebarSubItem label="Templates" icon={<Copy />} onClick={noop} />
            </SidebarTrigger>
          </SidebarItem>
          
          <SidebarItem className="hover:bg-white/60 rounded-lg transition-all duration-200">
            <SidebarTrigger label="Analytics" icon={<BarChart />}>
              <SidebarSubItem label="Performance" icon={<TrendingUp />} onClick={noop} />
              <SidebarSubItem label="Audience" icon={<Users />} onClick={noop} />
              <SidebarSubItem label="Revenue" icon={<DollarSign />} onClick={noop} />
            </SidebarTrigger>
          </SidebarItem>
          
          <SidebarItem className="hover:bg-white/60 rounded-lg transition-all duration-200">
            <SidebarTrigger label="Community" icon={<Users />}>
              <SidebarSubItem label="Members" icon={<Users />} onClick={noop} />
              <SidebarSubItem label="Discussions" icon={<MessageSquare />} onClick={noop} />
              <SidebarSubItem label="Events" icon={<Calendar />} onClick={noop} />
            </SidebarTrigger>
          </SidebarItem>
          
          <SidebarItem className="hover:bg-white/60 rounded-lg transition-all duration-200">
            <SidebarTrigger label="Settings" icon={<Settings />}>
              <SidebarSubItem label="General" icon={<Settings />} onClick={noop} />
              <SidebarSubItem label="Appearance" icon={<Eye />} onClick={noop} />
              <SidebarSubItem label="Integrations" icon={<Globe />} onClick={noop} />
            </SidebarTrigger>
          </SidebarItem>
        </ul>
      </nav>
      
      <SidebarFooter className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white border-t-0">
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center font-bold text-white">
              CT
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">Creative Team</p>
              <p className="text-xs text-white/80">Premium Account</p>
            </div>
            <div className="flex items-center gap-1">
              <Star size={14} className="text-yellow-300 fill-current" />
              <Star size={14} className="text-yellow-300 fill-current" />
              <Star size={14} className="text-yellow-300 fill-current" />
            </div>
          </div>
          
          <div className="flex gap-2">
            <button 
              className="flex-1 py-2 px-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm font-medium rounded-lg transition-all duration-200 border border-white/20"
              onClick={noop}
            >
              Upgrade
            </button>
            <button 
              className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-lg transition-all duration-200 border border-white/20"
              onClick={noop}
            >
              <Settings size={18} />
            </button>
          </div>
        </div>
      </SidebarFooter>
    </SidebarWrapper>
  ),
};

// Story: Minimal Navigation
export const MinimalNavigation: Story = {
  parameters: {
    docs: {
      description: {
        story: `
### Minimal Navigation Pattern

A clean, stripped-down sidebar implementation focusing on essential navigation only:

- **No Header/Footer**: Maximizes space for navigation content
- **Simple Structure**: Flat navigation hierarchy without nested items
- **Clean Design**: Minimal visual elements with focus on functionality
- **Efficient Layout**: Perfect for applications with limited navigation needs

**Design Philosophy:**
- Less is more approach
- Focus on core functionality
- Reduced visual clutter
- Fast, efficient navigation

**Use Case:** Ideal for:
- Landing pages with simple navigation
- Portfolio websites
- Documentation sites
- Simple web applications
- Marketing websites
        `,
      },
    },
  },
  args: {
    onCollapseToggle: noop,
    onMobileToggle: noop,
  },
  render: (args:SidebarProps) => (
    <SidebarWrapper {...args}>
      <nav className="flex-1 p-6">
        <ul className="space-y-1">
          <SidebarItem>
            <SidebarTrigger label="Home" icon={<Home />} />
          </SidebarItem>
          <SidebarItem>
            <SidebarTrigger label="About" icon={<Info />} />
          </SidebarItem>
          <SidebarItem>
            <SidebarTrigger label="Services" icon={<Award />} />
          </SidebarItem>
          <SidebarItem>
            <SidebarTrigger label="Portfolio" icon={<Eye />} />
          </SidebarItem>
          <SidebarItem>
            <SidebarTrigger label="Blog" icon={<FileText />} />
          </SidebarItem>
          <SidebarItem>
            <SidebarTrigger label="Contact" icon={<MessageSquare />} />
          </SidebarItem>
        </ul>
      </nav>
    </SidebarWrapper>
  ),
};

// Story: No Main Content (Component Only)
export const ComponentOnly: Story = {
  parameters: {
    docs: {
      description: {
        story: `
### Isolated Component View

Shows only the sidebar component without main content area for detailed inspection:

- **Component Focus**: Isolates the sidebar for detailed examination
- **No Distractions**: Remove main content to focus on sidebar behavior
- **Testing Interface**: Perfect for testing component interactions
- **Development View**: Useful during component development and debugging

**Purpose:**
This view is particularly useful for:
- Component development and testing
- Visual regression testing
- Detailed behavior inspection
- Storybook component documentation
- Integration testing scenarios
        `,
      },
    },
  },
  args: {
    onCollapseToggle: noop,
    onMobileToggle: noop,
  },
  render: (args:SidebarProps) => (
    <SidebarWrapper showMainContent={false} {...args}>
      <SidebarHeader icon={<Database />}>
        Component Isolation
      </SidebarHeader>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <SidebarItem>
            <SidebarTrigger label="Component Testing" icon={<CheckCircle />}>
              <SidebarSubItem label="Unit Tests" icon={<CheckCircle />} onClick={noop} />
              <SidebarSubItem label="Integration Tests" icon={<Globe />} onClick={noop} />
              <SidebarSubItem label="Visual Tests" icon={<Eye />} active onClick={noop} />
            </SidebarTrigger>
          </SidebarItem>
          <SidebarItem>
            <SidebarTrigger label="Development Tools" icon={<Settings />}>
              <SidebarSubItem label="Props Inspector" icon={<Search />} onClick={noop} />
              <SidebarSubItem label="State Debugger" icon={<Bug />} onClick={noop} />
              <SidebarSubItem label="Performance" icon={<Activity />} onClick={noop} />
            </SidebarTrigger>
          </SidebarItem>
          <SidebarItem>
            <SidebarTrigger label="Documentation" icon={<FileText />}>
              <SidebarSubItem label="API Reference" icon={<FileText />} onClick={noop} />
              <SidebarSubItem label="Examples" icon={<Copy />} onClick={noop} />
              <SidebarSubItem label="Best Practices" icon={<Award />} onClick={noop} />
            </SidebarTrigger>
          </SidebarItem>
        </ul>
      </nav>
      
      <SidebarFooter>
        <div className="text-center text-sm text-gray-600">
          <p>Component Isolation Mode</p>
          <p className="text-xs mt-1">Perfect for testing & development</p>
        </div>
      </SidebarFooter>
    </SidebarWrapper>
  ),
};
