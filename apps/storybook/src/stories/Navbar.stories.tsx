import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import React, { useState } from 'react';
import { 
  Search,
  Bell,
  User,
  Settings,
  ShoppingCart,
  Heart,
  ChevronDown,
  Globe,
  BarChart,
  CheckCircle,
  Zap,
  Smartphone
} from 'lucide-react';
import { Navbar,NavItem } from '@sume/ui/components/Navbar';

const noop=()=>{}  
const meta: Meta<typeof Navbar> = {
  title: 'Navigation/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `


**Professional, responsive navigation component built with Framer Motion for smooth animations and comprehensive accessibility.**

The Navbar component provides a robust foundation for website navigation with support for dropdown menus, full responsive design, sticky positioning, and advanced accessibility features.

## 🎯 When to Use Navbar

### ✅ Perfect Use Cases
- **Website Headers**: Primary navigation for websites and web applications
- **Application Navigation**: Top-level navigation for SaaS and dashboard apps
- **E-commerce Sites**: Product categories, user account, shopping cart access
- **Marketing Sites**: Company pages, product information, contact details
- **Documentation**: Navigation for docs, guides, and knowledge bases
- **Dashboards**: Admin panels, user portals, analytics interfaces

### ❌ Avoid Using When
- Simple single-page applications with minimal navigation needs
- Mobile-first apps where tab navigation is more appropriate
- Complex multi-level navigation (consider sidebar navigation instead)
- Applications requiring contextual navigation that changes frequently

## ✨ Key Features

### Core Functionality
- **Fully Responsive**: Automatic mobile menu with hamburger toggle and touch-optimized interface
- **Dropdown Menus**: Multi-level navigation with smooth animations and hover/click interactions
- **Sticky Navigation**: Optional sticky positioning with scroll-based shadows
- **Custom Content**: Flexible right-side content area for buttons, search, user actions
- **Keyboard Navigation**: Full keyboard accessibility with proper focus management
- **Mobile Optimization**: Touch-friendly mobile interface with collapsible sections

### Advanced Features
- **Smooth Animations**: Hardware-accelerated transitions with Framer Motion
- **Dark Mode Support**: Built-in dark mode styling with automatic theme detection
- **Accessibility First**: WCAG 2.1 AA compliant with proper ARIA attributes
- **Reduced Motion**: Respects user's motion preferences automatically
- **Click Outside**: Auto-closes dropdowns when clicking outside
- **Scroll Detection**: Dynamic shadow based on scroll position

## 📱 Responsive Design System

### Mobile-First Approach
The Navbar uses a mobile-first responsive design philosophy:

#### Mobile (≤768px)
- **Hamburger Menu**: Collapsible navigation with animated hamburger icon
- **Stack Layout**: Vertical menu items with touch-friendly spacing
- **Collapsible Dropdowns**: Expandable sections within mobile menu
- **Touch Targets**: Minimum 44px touch targets for accessibility
- **Gesture Support**: Swipe gestures and touch interactions

#### Tablet (769px-1024px)
- **Hybrid Layout**: Desktop navigation with mobile menu fallback
- **Optimized Spacing**: Balanced spacing between desktop and mobile
- **Touch Enhancement**: Larger touch targets than desktop
- **Responsive Dropdowns**: Dropdowns adapt to available screen space

#### Desktop (≥1025px)
- **Horizontal Layout**: Full horizontal navigation with dropdowns
- **Hover Interactions**: Mouse hover effects and dropdown previews
- **Keyboard Navigation**: Full keyboard accessibility with arrow keys
- **Advanced Features**: Search bars, notifications, user profiles

### Responsive Breakpoints
\`\`\`css
/* Mobile First */
.navbar {
  /* Base mobile styles */
}

@media (min-width: 768px) {
  /* Tablet styles */
  .navbar {
    /* Tablet-specific adaptations */
  }
}

@media (min-width: 1024px) {
  /* Desktop styles */
  .navbar {
    /* Full desktop experience */
  }
}
\`\`\`

## ♿ Accessibility Features

### WCAG 2.1 AA Compliance
- **Keyboard Navigation**: Full keyboard support with Tab, Enter, Escape, Arrow keys
- **Screen Readers**: Proper ARIA roles, labels, and live regions
- **Focus Management**: Clear focus indicators and logical tab order
- **Semantic HTML**: Uses proper \`nav\`, \`ul\`, \`li\` structure
- **Touch Targets**: Minimum 44px touch target size for mobile

### Advanced Accessibility
- **Dropdown Navigation**: Proper ARIA expanded states and controls
- **Mobile Menu**: Accessible hamburger menu with screen reader support
- **Skip Links**: Optional skip to content functionality
- **High Contrast**: Support for high contrast and dark modes
- **Reduced Motion**: Respects prefers-reduced-motion settings

## 🚀 Performance Features

### Optimization Strategies
- **Efficient Animations**: Hardware-accelerated transforms for 60fps performance
- **Conditional Rendering**: Mobile menu only renders when needed
- **Event Optimization**: Passive scroll listeners and debounced handlers
- **Bundle Size**: ~8KB gzipped including Framer Motion
- **CSS Optimization**: Minimal CSS with utility-first approach

### Mobile Performance
- **Touch Optimization**: Optimized touch event handling for responsive interactions
- **Viewport Considerations**: Proper viewport meta tag support
- **Loading Performance**: Fast first paint with critical CSS
- **Memory Efficient**: Proper cleanup of event listeners and animations


## 🚀 Installation

\`\`\`bash
npm install @sume/ui
# or
yarn add @sume/ui
# or
pnpm add @sume/ui
\`\`\`



## 📚 Implementation Examples

### Basic Responsive Navigation
\`\`\`tsx
import { Navbar } from '@astra/ui/components/Navbar';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' }
];

function ResponsiveNavbar() {
  return (
    <Navbar
      logo={<img src="/logo.png" alt="Company" className="h-8" />}
      menuItems={menuItems}
    >
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Get Started
      </button>
    </Navbar>
  );
}
\`\`\`

### Advanced Dropdown Navigation
\`\`\`tsx
const menuItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    href: '/products',
    type: 'dropdown',
    items: [
      { label: 'Web Applications', href: '/products/web' },
      { label: 'Mobile Apps', href: '/products/mobile' },
      { label: 'Desktop Software', href: '/products/desktop' },
      { label: 'API Services', href: '/products/api' }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    type: 'dropdown',
    items: [
      { label: 'For Startups', href: '/solutions/startups' },
      { label: 'For Enterprise', href: '/solutions/enterprise' },
      { label: 'For Developers', href: '/solutions/developers' }
    ]
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' }
];

function AdvancedNavbar() {
  return (
    <Navbar
      logo={<Logo />}
      menuItems={menuItems}
      sticky={true}
    >
      <div className="flex items-center gap-3">
        <Search size={20} className="text-gray-600 hover:text-gray-900 cursor-pointer" />
        <Bell size={20} className="text-gray-600 hover:text-gray-900 cursor-pointer" />
        <User size={20} className="text-gray-600 hover:text-gray-900 cursor-pointer" />
      </div>
    </Navbar>
  );
}
\`\`\`

### E-commerce Responsive Navigation
\`\`\`tsx
function EcommerceNavbar() {
  const [cartCount, setCartCount] = useState(3);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const menuItems = [
    {
      label: 'Categories',
      href: '/categories',
      type: 'dropdown',
      items: [
        { label: 'Electronics', href: '/categories/electronics' },
        { label: 'Fashion & Clothing', href: '/categories/fashion' },
        { label: 'Home & Garden', href: '/categories/home' },
        { label: 'Sports & Fitness', href: '/categories/sports' }
      ]
    },
    { label: 'Deals', href: '/deals' },
    { label: 'New Arrivals', href: '/new' },
    { label: 'Support', href: '/support' }
  ];

  return (
    <Navbar
      logo={<StoreLogo />}
      menuItems={menuItems}
    >
      <div className="flex items-center gap-3">
        {/* Search - hidden on mobile, shown on tablet+ */}
        <div className="hidden lg:block relative">
          <input
            type="text"
            placeholder="Search products..."
            className="pl-8 pr-4 py-2 border rounded-lg text-sm w-64"
          />
          <Search size={16} className="absolute left-2 top-2.5 text-gray-400" />
        </div>
        
        {/* Wishlist - always visible */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg">
          <Heart size={20} className="text-gray-600" />
        </button>
        
        {/* Cart - always visible with counter */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg">
          <ShoppingCart size={20} className="text-gray-600" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
        
        {/* User menu - responsive sizing */}
        {isLoggedIn ? (
          <div className="flex items-center gap-2">
            <img src="/avatar.jpg" alt="User" className="w-8 h-8 rounded-full" />
            <ChevronDown size={14} className="text-gray-600 hidden sm:block" />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 text-gray-600 hover:text-gray-900 text-sm hidden sm:block">
              Sign In
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
              Sign Up
            </button>
          </div>
        )}
      </div>
    </Navbar>
  );
}
\`\`\`

### Mobile-Optimized Dashboard
\`\`\`tsx
function DashboardNavbar() {
  const [notifications, setNotifications] = useState(5);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuItems = [
    { label: 'Dashboard', href: '/dashboard' },
    {
      label: 'Analytics',
      href: '/analytics',
      type: 'dropdown',
      items: [
        { label: 'Overview', href: '/analytics/overview' },
        { label: 'Reports', href: '/analytics/reports' },
        { label: 'Real-time Data', href: '/analytics/realtime' }
      ]
    },
    { label: 'Users', href: '/users' },
    { label: 'Settings', href: '/settings' }
  ];

  return (
    <Navbar
      logo={<DashboardLogo />}
      menuItems={menuItems}
      className="border-b border-gray-200"
    >
      <div className="flex items-center gap-3">
        {/* Search - responsive width */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder={isMobile ? "Search..." : "Search users, reports, data..."}
            className="pl-8 pr-4 py-2 border rounded-lg text-sm w-48 lg:w-64 focus:w-80 transition-all"
          />
          <Search size={16} className="absolute left-2 top-2.5 text-gray-400" />
        </div>
        
        {/* Mobile search button */}
        <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
          <Search size={20} className="text-gray-600" />
        </button>
        
        {/* Notifications */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg">
          <Bell size={20} className="text-gray-600" />
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {notifications > 9 ? '9+' : notifications}
            </span>
          )}
        </button>
        
        {/* User profile - responsive display */}
        <div className="flex items-center gap-2">
          <img src="/admin-avatar.jpg" alt="Admin" className="w-8 h-8 rounded-full" />
          <div className="hidden lg:block">
            <div className="text-sm font-medium">Admin User</div>
            <div className="text-xs text-gray-500">Administrator</div>
          </div>
          <ChevronDown size={14} className="text-gray-500" />
        </div>
      </div>
    </Navbar>
  );
}
\`\`\`

## 🧪 Testing Strategies

### Responsive Testing
\`\`\`typescript
describe('Navbar Responsive Behavior', () => {
  it('should show mobile menu on small screens', () => {
    // Set viewport to mobile size
    cy.viewport(375, 667);
    
    // Mobile menu button should be visible
    cy.get('[aria-label="Open menu"]').should('be.visible');
    
    // Desktop navigation should be hidden
    cy.get('nav[aria-label="Primary"]').should('not.be.visible');
  });
  
  it('should show desktop navigation on large screens', () => {
    // Set viewport to desktop size
    cy.viewport(1280, 720);
    
    // Desktop navigation should be visible
    cy.get('nav[aria-label="Primary"]').should('be.visible');
    
    // Mobile menu button should be hidden
    cy.get('[aria-label="Open menu"]').should('not.be.visible');
  });
  
  it('should handle dropdown menus responsively', () => {
    // Test mobile dropdown
    cy.viewport(375, 667);
    cy.get('[aria-label="Open menu"]').click();
    cy.get('button[aria-haspopup="menu"]').first().click();
    cy.get('[role="menuitem"]').should('be.visible');
    
    // Test desktop dropdown
    cy.viewport(1280, 720);
    cy.get('button[aria-haspopup="menu"]').first().trigger('mouseover');
    cy.get('[role="menuitem"]').should('be.visible');
  });
});
\`\`\`

### Accessibility Testing
\`\`\`typescript
describe('Navbar Accessibility', () => {
  it('should be fully keyboard navigable', () => {
    // Tab through all interactive elements
    cy.get('body').tab();
    cy.focused().should('contain', 'Home'); // First nav item
    
    // Navigate through dropdown with arrow keys
    cy.focused().type('{downarrow}');
    cy.focused().should('have.attr', 'role', 'menuitem');
    
    // Close with Escape
    cy.focused().type('{esc}');
    cy.get('[role="menu"]').should('not.exist');
  });
  
  it('should have proper ARIA attributes', () => {
    cy.get('[aria-haspopup="menu"]').should('have.attr', 'aria-expanded', 'false');
    cy.get('[aria-haspopup="menu"]').click();
    cy.get('[aria-haspopup="menu"]').should('have.attr', 'aria-expanded', 'true');
  });
});
\`\`\`

## 🎛️ Advanced Configuration

### Responsive Breakpoint Customization
\`\`\`typescript
const responsiveConfig = {
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px'
  },
  mobileMenu: {
    showAt: 'mobile', // Show mobile menu below this breakpoint
    animation: 'slide', // 'slide' | 'fade' | 'scale'
    position: 'full' // 'full' | 'dropdown'
  },
  dropdown: {
    trigger: 'hover', // 'hover' | 'click' | 'both'
    mobileCollapse: true, // Collapse dropdowns in mobile menu
    maxWidth: '320px'
  }
};
\`\`\`

### Theme Customization
\`\`\`css
:root {
  --navbar-height: 64px;
  --navbar-bg: #ffffff;
  --navbar-text: #111827;
  --navbar-hover-bg: #f3f4f6;
  --navbar-border: #e5e7eb;
  --navbar-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --navbar-mobile-bg: #ffffff;
  --navbar-dropdown-bg: #ffffff;
  --navbar-z-index: 50;
}

@media (prefers-color-scheme: dark) {
  :root {
    --navbar-bg: #111827;
    --navbar-text: #f9fafb;
    --navbar-hover-bg: #1f2937;
    --navbar-border: #374151;
    --navbar-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.3);
    --navbar-mobile-bg: #111827;
    --navbar-dropdown-bg: #1f2937;
  }
}

/* Mobile-specific overrides */
@media (max-width: 768px) {
  :root {
    --navbar-height: 56px; /* Slightly smaller on mobile */
  }
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
    logo: {
      control: false,
      description: `**Logo/brand element for the navbar**

Can be any React element - text, image, SVG, or component.

\`\`\`tsx
// Text logo
logo={<span className="font-bold text-xl">Brand</span>}

// Responsive image logo
logo={
  <img 
    src="/logo.png" 
    alt="Company" 
    className="h-8 w-auto sm:h-10" 
  />
}

// Custom component with responsive behavior
logo={<ResponsiveLogo />}
\`\`\`

**Responsive Best Practices:**
- Use responsive heights (h-8 sm:h-10) for different screen sizes
- Consider simplified logos for mobile (text-only or icon-only)
- Ensure logos remain readable at all breakpoints
- Include proper alt text for accessibility`,
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    menuItems: {
      control: 'object',
      description: `**Array of navigation items with responsive behavior**

\`\`\`typescript
interface NavItem {
  label: string;           // Display text
  href: string;            // Link destination
  type?: "link" | "dropdown"; // Navigation type
  items?: Array<{          // Dropdown items (if type="dropdown")
    label: string;
    href: string;
  }>;
}
\`\`\`

**Responsive Behavior:**
- **Desktop**: Horizontal layout with hover dropdowns
- **Tablet**: Horizontal layout with click dropdowns  
- **Mobile**: Vertical collapsible menu with expandable sections

**Examples:**
\`\`\`tsx
// Responsive dropdown menu
menuItems={[
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    href: '/products',
    type: 'dropdown',
    items: [
      { label: 'Web Apps', href: '/products/web' },
      { label: 'Mobile Apps', href: '/products/mobile' }
    ]
  }
]}
\`\`\``,
      table: {
        type: { summary: 'NavItem[]' },
      },
    },
    children: {
      control: false,
      description: `**Right-side content area with responsive behavior**

Flexible area for buttons, search, user actions, or any custom content that adapts to different screen sizes.

\`\`\`tsx
// Responsive button group
<Navbar menuItems={items}>
  <div className="flex items-center gap-2">
    {/* Hidden on mobile, shown on desktop */}
    <button className="hidden md:block px-4 py-2 text-gray-600">
      Sign In
    </button>
    {/* Always visible, responsive sizing */}
    <button className="px-3 md:px-4 py-2 bg-blue-600 text-white rounded-lg">
      <span className="hidden sm:inline">Get Started</span>
      <span className="sm:hidden">Start</span>
    </button>
  </div>
</Navbar>

// Responsive user interface
<Navbar menuItems={items}>
  <div className="flex items-center gap-2 md:gap-4">
    {/* Search - hidden on mobile */}
    <div className="hidden lg:block">
      <SearchBar />
    </div>
    
    {/* Icons - always visible */}
    <NotificationBell />
    <UserMenu />
  </div>
</Navbar>
\`\`\`

**Responsive Patterns:**
- Hide non-essential elements on mobile (\`hidden md:block\`)
- Adjust spacing responsively (\`gap-2 md:gap-4\`)
- Simplify text labels (\`hidden sm:inline\`)
- Stack elements vertically on mobile in mobile menu`,
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    sticky: {
      control: 'boolean',
      description: `**Enable sticky positioning with responsive behavior**

When true, the navbar sticks to the top of the viewport on scroll with adaptive shadow and responsive height adjustments.

\`\`\`tsx
<Navbar sticky={true} menuItems={items} />
\`\`\`

**Responsive Features:**
- **Mobile**: Slightly reduced height (56px vs 64px)
- **Tablet/Desktop**: Full height with enhanced shadow
- **Scroll Detection**: Dynamic shadow appears on all devices
- **Performance**: Optimized passive scroll listeners

**Responsive Behavior:**
- Maintains sticky position across all breakpoints
- Adjusts height based on screen size
- Shows/hides shadow based on scroll position
- Preserves mobile menu functionality when sticky`,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    className: {
      control: 'text',
      description: `**Additional CSS classes with responsive utilities**

\`\`\`tsx
// Responsive border and background
<Navbar 
  className="border-b border-gray-200 md:border-gray-300 bg-white/95 backdrop-blur"
  menuItems={items}
/>

// Different styling per breakpoint
<Navbar 
  className="shadow-sm md:shadow-md lg:shadow-lg"
  menuItems={items}
/>
\`\`\``,
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data and components for demos
const basicMenuItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' }
];

const dropdownMenuItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    href: '/products',
    type: 'dropdown',
    items: [
      { label: 'Web Applications', href: '/products/web' },
      { label: 'Mobile Apps', href: '/products/mobile' },
      { label: 'Desktop Software', href: '/products/desktop' },
      { label: 'API Services', href: '/products/api' }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    type: 'dropdown',
    items: [
      { label: 'For Startups', href: '/solutions/startups' },
      { label: 'For Enterprise', href: '/solutions/enterprise' },
      { label: 'For Developers', href: '/solutions/developers' }
    ]
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' }
];

// Logo Components with Responsive Design
const ResponsiveLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-sm md:text-base">R</span>
    </div>
    <span className="font-bold text-lg md:text-xl text-gray-900">
      <span className="hidden sm:inline">ResponsiveLogo</span>
      <span className="sm:hidden">RL</span>
    </span>
  </div>
);

const EcommerceLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 md:w-9 md:h-9 bg-emerald-500 rounded-lg flex items-center justify-center">
      <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 text-white" />
    </div>
    <span className="font-bold text-lg md:text-xl text-gray-900">
      <span className="hidden md:inline">ShopHub</span>
      <span className="md:hidden">Shop</span>
    </span>
  </div>
);

const DashboardLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
      <BarChart className="w-4 h-4 md:w-5 md:h-5 text-white" />
    </div>
    <span className="font-semibold text-base md:text-lg text-gray-900">
      <span className="hidden lg:inline">Analytics Pro</span>
      <span className="lg:hidden hidden sm:inline">Analytics</span>
      <span className="sm:hidden">AP</span>
    </span>
  </div>
);

// =================== STORY: RESPONSIVE DESIGN ===================
export const ResponsiveDesign: Story = {
  name: '📱 Responsive Design',
  parameters: {
    docs: {
      description: {
        story: `
### Mobile-First Responsive Navigation

Demonstrates the navbar's responsive behavior across all device sizes with automatic mobile menu, adaptive spacing, and responsive content.

**Responsive Features:**
- **Mobile (≤768px)**: Hamburger menu, stacked layout, touch-optimized
- **Tablet (769px-1024px)**: Hybrid layout, larger touch targets
- **Desktop (≥1025px)**: Full horizontal layout, hover interactions

**Testing Instructions:**
1. Resize your browser window to see responsive behavior
2. Try the mobile menu on small screens
3. Test dropdown interactions at different sizes
4. Notice how content adapts and repositions

**Code:**
\`\`\`tsx
<Navbar
  logo={<ResponsiveLogo />}
  menuItems={dropdownMenuItems}
  sticky={true}
>
  <div className="flex items-center gap-2 md:gap-4">
    {/* Search - hidden on mobile */}
    <div className="hidden lg:block">
      <SearchInput />
    </div>
    
    {/* Mobile search button */}
    <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
      <Search size={20} />
    </button>
    
    {/* Always visible actions */}
    <Bell size={20} />
    <User size={20} />
  </div>
</Navbar>
\`\`\`
        `,
      },
    },
  },
  render: () => (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        logo={<ResponsiveLogo />}
        menuItems={dropdownMenuItems}
        sticky={true}
      >
        <div className="flex items-center gap-2 md:gap-4">
          {/* Search - responsive visibility */}
          <div className="hidden lg:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-4 py-2 border border-gray-300 rounded-lg text-sm w-48 xl:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search size={16} className="absolute left-2 top-2.5 text-gray-400" />
            </div>
          </div>
          
          {/* Mobile search button */}
          <button className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <Search size={20} />
          </button>
          
          {/* Always visible notifications */}
          <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          {/* User menu with responsive display */}
          <button className="flex items-center gap-2 px-2 md:px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
            <User size={18} />
            <span className="hidden md:inline text-sm">Account</span>
            <ChevronDown size={14} className="hidden sm:block" />
          </button>
        </div>
      </Navbar>
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Responsive Navigation</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Automatic adaptation across all device sizes with mobile-first responsive design
          </p>
        </div>
        
        {/* Responsive Demonstration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-semibold">Mobile (≤768px)</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Hamburger menu with animations</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Collapsible dropdown sections</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Touch-optimized 44px targets</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Stacked vertical layout</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Simplified logo and text</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-purple-600" />
              <h3 className="text-xl font-semibold">Tablet (769px-1024px)</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Hybrid mobile/desktop layout</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Enhanced touch targets</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Balanced spacing and sizing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Adaptive dropdown positioning</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Moderate content visibility</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-8 h-8 text-green-600" />
              <h3 className="text-xl font-semibold">Desktop (≥1025px)</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Full horizontal navigation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Hover-triggered dropdowns</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Advanced search and filters</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Full keyboard navigation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Complete content visibility</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Responsive Testing Guide */}
        <div className="bg-blue-50 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Responsive Testing Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-blue-800 mb-3">Desktop Testing</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Hover over dropdown menus to see smooth animations</li>
                <li>• Use keyboard navigation with Tab and arrow keys</li>
                <li>• Test search functionality and user interactions</li>
                <li>• Verify all content is visible and accessible</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-blue-800 mb-3">Mobile Testing</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Tap hamburger menu to open mobile navigation</li>
                <li>• Test dropdown expansion in mobile menu</li>
                <li>• Verify touch targets are easy to tap</li>
                <li>• Check that content adapts to small screens</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// =================== STORY: MOBILE OPTIMIZATION ===================
export const MobileOptimization: Story = {
  name: '📱 Mobile Optimization',
  parameters: {
    docs: {
      description: {
        story: `
### Mobile-First Experience

Optimized mobile navigation with touch-friendly interactions, simplified content, and efficient use of screen space.

**Mobile Features:**
- **Touch-Optimized**: 44px minimum touch targets
- **Simplified UI**: Essential content only on mobile
- **Gesture Support**: Natural touch interactions
- **Performance**: Optimized for mobile devices
- **Accessibility**: Screen reader and voice control support

**Mobile-Specific Optimizations:**
\`\`\`tsx
// Responsive content hiding
<div className="hidden md:block">Desktop Only</div>
<div className="md:hidden">Mobile Only</div>

// Touch-optimized sizing
<button className="p-3 md:p-2 min-h-[44px] min-w-[44px]">
  Touch Friendly
</button>

// Responsive text
<span className="text-sm md:text-base">
  Responsive Typography
</span>
\`\`\`
        `,
      },
    },
  },
  render: () => (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        logo={<EcommerceLogo />}
        menuItems={[
          {
            label: 'Shop',
            href: '/shop',
            type: 'dropdown',
            items: [
              { label: 'Electronics', href: '/shop/electronics' },
              { label: 'Fashion', href: '/shop/fashion' },
              { label: 'Home', href: '/shop/home' },
              { label: 'Sports', href: '/shop/sports' }
            ]
          },
          { label: 'Deals', href: '/deals' },
          { label: 'New', href: '/new' },
          { label: 'Help', href: '/help' }
        ]}
        sticky={true}
      >
        <div className="flex items-center gap-1 sm:gap-3">
          {/* Mobile search - icon only */}
          <button className="md:hidden p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center">
            <Search size={20} />
          </button>
          
          {/* Desktop search */}
          <div className="hidden md:block">
            <div>
              <input
                type="text"
                placeholder="Search products..."
                className="pr-4 py-2 border border-gray-300 rounded-lg text-sm w-48 lg:w-64"
              />
            
            </div>
          </div>
          
          {/* Wishlist - icon with responsive label */}
          <button className="p-2 sm:p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg min-h-[44px] flex items-center gap-1 sm:gap-2">
            <Heart size={18}  />
            <span className="hidden lg:inline text-sm">Wishlist</span>
          </button>
          
          {/* Cart with responsive counter */}
          <button className="relative p-2 sm:p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg min-h-[44px] flex items-center gap-1 sm:gap-2">
            <ShoppingCart size={18}  />
            <span className="hidden sm:inline text-sm">Cart</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>
          
          {/* User menu - responsive styling */}
          <button className="p-2 sm:p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg min-h-[44px] flex items-center gap-1">
            <User size={18}  />
            <span className="hidden md:inline text-sm">Account</span>
          </button>
        </div>
      </Navbar>
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Mobile-First Design</h1>
          <p className="text-gray-600">
            Optimized for touch devices with responsive interactions
          </p>
        </div>
        
        {/* Mobile Optimization Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-blue-600" />
              Touch Optimization
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-500" />
                <span>44px minimum touch targets</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-500" />
                <span>Adequate spacing between elements</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-500" />
                <span>Visual feedback on touch</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-500" />
                <span>Gesture-friendly interactions</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-600" />
              Performance
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-500" />
                <span>Optimized for mobile processors</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-500" />
                <span>Efficient animation rendering</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-500" />
                <span>Minimal memory usage</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-500" />
                <span>Fast interaction response</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Mobile Testing Instructions */}
        <div className="bg-green-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-green-900 mb-4">Mobile Testing Checklist</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-green-800 mb-2">Touch Interactions</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>✓ All buttons easy to tap with thumb</li>
                <li>✓ No accidental taps on nearby elements</li>
                <li>✓ Visual feedback on touch</li>
                <li>✓ Swipe gestures work smoothly</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-green-800 mb-2">Content & Layout</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>✓ Text is readable without zooming</li>
                <li>✓ Important actions are prominent</li>
                <li>✓ Content fits well in viewport</li>
                <li>✓ Navigation is intuitive</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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

WCAG 2.1 AA compliant navigation with full keyboard support, screen reader compatibility, and responsive accessibility features.

**Accessibility Features:**
- Full keyboard navigation across all breakpoints
- Proper ARIA roles, states, and properties
- Screen reader announcements for responsive state changes
- High contrast focus indicators on all devices
- Touch targets ≥44px for mobile accessibility
- Semantic HTML structure that adapts responsively

**Responsive Accessibility:**
- Mobile menu maintains keyboard navigation
- Touch targets scale appropriately for different devices
- Screen reader announcements adapt to mobile/desktop context
- Focus management works across all breakpoints
        `,
      },
    },
  },
  render: () => (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        logo={<ResponsiveLogo />}
        menuItems={dropdownMenuItems}
        sticky={true}
      >
        <div className="flex items-center gap-2 md:gap-3">
          <button 
            className="p-2 md:p-3 text-gray-600 hover:text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Search products and content"
          >
            <Search size={18} className="md:w-5 md:h-5" />
          </button>
          <button 
            className="relative p-2 md:p-3 text-gray-600 hover:text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Notifications, 2 unread"
          >
            <Bell size={18} className="md:w-5 md:h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" aria-hidden="true"></span>
          </button>
          <button 
            className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px]"
            aria-label="User account menu"
            aria-haspopup="menu"
          >
            <User size={16} className="md:w-4 md:h-4" />
            <span className="hidden sm:inline text-sm">Account</span>
            <ChevronDown size={12} className="hidden md:block md:w-3 md:h-3" />
          </button>
        </div>
      </Navbar>
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Responsive Accessibility</h1>
          <p className="text-gray-600">
            Built-in accessibility that works seamlessly across all devices
          </p>
        </div>
        
        <div className="bg-blue-50 p-4 md:p-6 rounded-lg mb-8">
          <h2 className="text-lg font-semibold text-blue-900 mb-3">Try These Accessibility Features:</h2>
          <ul className="text-sm text-blue-800 space-y-2">
            <li>• Use Tab key to navigate through all interactive elements</li>
            <li>• Press Enter or Space on dropdown triggers to open menus</li>
            <li>• Use Arrow keys to navigate within dropdown menus</li>
            <li>• Press Escape to close dropdowns and return focus</li>
            <li>• Test with a screen reader to hear proper announcements</li>
            <li>• Switch to mobile view and test touch accessibility</li>
          </ul>
        </div>

        {/* Responsive Accessibility Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6 flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Settings size={16} className="md:w-5 md:h-5 text-blue-600" />
              </div>
              Responsive Navigation
            </h3>
            <div className="space-y-3 md:space-y-4">
              {[
                { key: 'Tab', action: 'Navigate between all interactive elements' },
                { key: 'Enter/Space', action: 'Open dropdowns and mobile menu' },
                { key: 'Escape', action: 'Close menus on all devices' },
                { key: 'Arrow Keys', action: 'Navigate within dropdown menus' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs md:text-sm font-mono">
                    {item.key}
                  </kbd>
                  <span className="text-sm md:text-base text-gray-600">{item.action}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6 flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle size={16} className="md:w-5 md:h-5 text-green-600" />
              </div>
              Mobile Accessibility
            </h3>
            <ul className="text-sm md:text-base space-y-2 md:space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="md:w-4 md:h-4 text-green-500 mt-0.5" />
                <div>
                  <strong>Touch targets:</strong> 44px minimum for comfortable tapping
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="md:w-4 md:h-4 text-green-500 mt-0.5" />
                <div>
                  <strong>Screen readers:</strong> Mobile screen reader support
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="md:w-4 md:h-4 text-green-500 mt-0.5" />
                <div>
                  <strong>Voice control:</strong> Compatible with voice navigation
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={14} className="md:w-4 md:h-4 text-green-500 mt-0.5" />
                <div>
                  <strong>Switch control:</strong> Works with external switches
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Testing Checklist - Responsive */}
        <div className="bg-yellow-50 p-4 md:p-6 rounded-xl mt-8">
          <h3 className="text-lg md:text-xl font-semibold text-yellow-900 mb-4 md:mb-6">Responsive Accessibility Testing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h4 className="font-medium text-yellow-800 mb-3">Desktop Testing</h4>
              <div className="space-y-2">
                {[
                  'Keyboard navigation works completely',
                  'Dropdown hover states are accessible',
                  'Focus indicators are clearly visible',
                  'Screen reader announces all interactions'
                ].map((test, index) => (
                  <label key={index} className="flex items-center gap-2 text-sm text-yellow-700">
                    <input type="checkbox" className="rounded" />
                    <span>{test}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-yellow-800 mb-3">Mobile Testing</h4>
              <div className="space-y-2">
                {[
                  'Touch targets are comfortable to tap',
                  'Mobile menu keyboard navigation works',
                  'Screen reader mobile support verified',
                  'Voice control compatibility confirmed'
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
    </div>
  ),
};
