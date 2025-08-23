import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge } from '@sume/ui/components/Badge';
import { 
  CheckCircle, AlertTriangle, XCircle, Info, Sparkles,  Star,
} from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `


**Small UI labels that show status, categories, counts, or special markers.**

Badges help users **scan information quickly** without reading full sentences.

---

## 🎯 When to Use
- **Status indicators**: "Online", "Active", "Failed"  
- **Category tags**: "React", "Design", "Bug Fix"  
- **Counts**: "3 new", "12 comments"  
- **Special labels**: "Premium", "New", "Featured"  

## 📐 Size Guide
| Size | Use Case | Example |
|------|----------|---------|
| **Small** | Dense tables, inline text | "3", "New" |
| **Medium** | General UI, cards, lists | "Active", "Beta" |
| **Large** | Mobile buttons, highlights | "Premium Plan" |

## 🎭 Shape Guide
| Shape | Feel | Best For |
|-------|------|----------|
| **Rounded** | Friendly, modern | Social apps, consumer products |
| **Square** | Professional, technical | Dashboards, enterprise software |
| **Pill** | Balanced, versatile | Tags, filters, general use |

## 🎨 Color Meanings
- **Green (success)**: Good states, completed actions
- **Red (destructive)**: Errors, failures, critical alerts  
- **Amber (warning)**: Caution, pending, attention needed
- **Blue (info)**: Neutral information, updates
- **Purple (premium)**: Special features, paid content
        `
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'destructive', 'info', 'secondary', 'outline', 'premium'],
      description: 'Color and meaning of the badge'
    },
    size: {
      control: 'select', 
      options: ['sm', 'md', 'lg'],
      description: 'Physical size of the badge'
    },
    shape: {
      control: 'select',
      options: ['rounded', 'square', 'pill'], 
      description: 'Border radius style'
    },
    effect: {
      control: 'select',
      options: ['none', 'subtle', 'glow', 'neon'],
      description: 'Shadow effects'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// =================== SIZES DEMO ===================

export const AllSizes: Story = {
  name: '📐 All Sizes',
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-800">Small (sm)</h3>
        <p className="text-sm text-gray-600">For dense tables, inline text, subtle indicators</p>
        <div className="flex gap-2 flex-wrap">
          <Badge size="sm" variant="default">3</Badge>
          <Badge size="sm" variant="success">Online</Badge>
          <Badge size="sm" variant="info" leftIcon={<Info className="w-3 h-3" />}>New</Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-gray-800">Medium (md) - Default</h3>
        <p className="text-sm text-gray-600">General UI, cards, most common use case</p>
        <div className="flex gap-2 flex-wrap">
          <Badge size="md" variant="success" leftIcon={<CheckCircle className="w-4 h-4" />}>Active</Badge>
          <Badge size="md" variant="warning" leftIcon={<AlertTriangle className="w-4 h-4" />}>Pending</Badge>
          <Badge size="md" variant="outline">React</Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-gray-800">Large (lg) with Right Icon</h3>
        <p className="text-sm text-gray-600">Mobile interfaces, important highlights, call-to-actions</p>
        <div className="flex gap-2 flex-wrap">
          <Badge size="lg" variant="premium" rightIcon={<Sparkles className="w-5 h-5" />} pulse>Premium</Badge>
          <Badge size="lg" variant="destructive" rightIcon={<XCircle className="w-5 h-5" />}>Critical</Badge>
          <Badge size="lg" variant="info">Staff Pick</Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Size Selection Guide

**Small (sm)**  
- **When**: Dense layouts, data tables, inline with text  
- **Width**: ~56px minimum  
- **Icons**: 12px (3x3 in Tailwind)  
- **Example**: Notification counts, status dots  

**Medium (md)**  
- **When**: Most UI elements, cards, general badges  
- **Width**: ~72px minimum  
- **Icons**: 16px (4x4 in Tailwind)  
- **Example**: Category tags, status badges  

**Large (lg)**  
- **When**: Mobile touch targets, important labels  
- **Width**: ~96px minimum  
- **Icons**: 20px (5x5 in Tailwind)  
- **Example**: Premium features, mobile CTAs  

💡 **Tip**: Stick to one size within the same context (don't mix sizes in a single list).
        `
      }
    }
  }
};

// =================== SHAPES DEMO ===================

export const AllShapes: Story = {
  name: '🎭 All Shapes',
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-800">Rounded (Full Border Radius)</h3>
        <p className="text-sm text-gray-600">Friendly, modern feel. Great for social apps and consumer products.</p>
        <div className="flex gap-2 flex-wrap">
          <Badge shape="rounded" size="sm" variant="success">New</Badge>
          <Badge shape="rounded" size="md" variant="info">Featured</Badge>
          <Badge shape="rounded" size="lg" variant="premium" leftIcon={<Sparkles className="w-5 h-5" />}>VIP</Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-gray-800">Square (Minimal Radius)</h3>
        <p className="text-sm text-gray-600">Professional, structured feel. Perfect for dashboards and enterprise software.</p>
        <div className="flex gap-2 flex-wrap">
          <Badge shape="square" size="sm" variant="success">✓</Badge>
          <Badge shape="square" size="md" variant="warning">Alert</Badge>
          <Badge shape="square" size="lg" variant="destructive">Error</Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-gray-800">Pill (Medium Radius)</h3>
        <p className="text-sm text-gray-600">Balanced approach. Versatile for tags, filters, and general use.</p>
        <div className="flex gap-2 flex-wrap">
          <Badge shape="pill" size="sm" variant="outline">Tag</Badge>
          <Badge shape="pill" size="md" variant="default">Category</Badge>
          <Badge shape="pill" size="lg" variant="info">Filter Active</Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Shape Psychology & Usage

**Rounded (rounded-full)**  
- **Psychology**: Friendly, safe, approachable  
- **Best for**: Social media, e-commerce, consumer apps  
- **Examples**: Instagram stories, Airbnb categories  

**Square (rounded)**  
- **Psychology**: Professional, structured, reliable  
- **Best for**: Dashboards, admin panels, enterprise software  
- **Examples**: System status, data tables, technical indicators  

**Pill (rounded-lg)**  
- **Psychology**: Modern but professional  
- **Best for**: Tags, filters, content categorization  
- **Examples**: Blog tags, search filters, skill badges  

💡 **Brand Tip**: Choose one primary shape for your design system. Mixing shapes randomly looks inconsistent.
        `
      }
    }
  }
};

// =================== VARIANTS DEMO ===================

export const AllVariants: Story = {
  name: '🎨 Color Variants',
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="space-y-2">
        <Badge variant="default" leftIcon>Default</Badge>
        <p className="text-xs text-gray-600">General purpose, neutral</p>
      </div>
      <div className="space-y-2">
        <Badge variant="success" leftIcon={<CheckCircle className="w-4 h-4" />}>Success</Badge>
        <p className="text-xs text-gray-600">Positive states, completed actions</p>
      </div>
      <div className="space-y-2">
        <Badge variant="warning" leftIcon={<AlertTriangle className="w-4 h-4" />}>Warning</Badge>
        <p className="text-xs text-gray-600">Caution, attention needed</p>
      </div>
      <div className="space-y-2">
        <Badge variant="destructive" leftIcon={<XCircle className="w-4 h-4" />}>Error</Badge>
        <p className="text-xs text-gray-600">Errors, critical failures</p>
      </div>
      <div className="space-y-2">
        <Badge variant="info" leftIcon>Info</Badge>
        <p className="text-xs text-gray-600">Neutral information</p>
      </div>
      <div className="space-y-2">
        <Badge variant="premium" leftIcon pulse>Premium</Badge>
        <p className="text-xs text-gray-600">Special features, paid content</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Color Psychology & When to Use

**Green (Success)**  
- Completed tasks, online status, verified accounts  
- Makes users feel confident and safe  

**Red (Destructive)**  
- Errors, failures, critical alerts, dangerous actions  
- Demands immediate attention  

**Amber (Warning)**  
- Pending states, low stock, expiring soon  
- Creates urgency without panic  

**Blue (Info)**  
- Updates, tips, neutral notifications  
- Informative but not alarming  

**Gradient (Premium)**  
- Paid features, VIP status, exclusive content  
- Creates desire and exclusivity feeling  

💡 **Consistency Rule**: Use the same color for the same meaning across your entire app.
        `
      }
    }
  }
};

// =================== EFFECTS DEMO ===================

export const AllEffects: Story = {
  name: '✨ Visual Effects',
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-800">None (Default)</h3>
        <p className="text-sm text-gray-600">Clean, minimal appearance</p>
        <Badge effect="none" variant="default">No Effect</Badge>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-gray-800">Subtle Shadow</h3>
        <p className="text-sm text-gray-600">Gentle elevation, professional look</p>
        <Badge effect="subtle" variant="success">Subtle</Badge>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-gray-800">Glow</h3>
        <p className="text-sm text-gray-600">Premium feel, draws attention</p>
        <Badge effect="glow" variant="premium" leftIcon={<Sparkles className="w-4 h-4" />}>Premium</Badge>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-gray-800">Neon</h3>
        <p className="text-sm text-gray-600">High-tech, gaming interfaces</p>
        <Badge effect="neon" variant="info">Neon Style</Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### When to Use Effects

**None**  
- Default choice for most interfaces  
- Clean, doesn't compete with content  

**Subtle**  
- Professional dashboards  
- Adds slight depth without being distracting  

**Glow**  
- Premium features, important CTAs  
- Dark themes, luxury interfaces  

**Neon**  
- Gaming interfaces, creative tools  
- Dark themes with high contrast needs  

💡 **Performance**: Effects add CSS complexity. Use sparingly in lists with many badges.
        `
      }
    }
  }
};

// =================== INTERACTIVE DEMO ===================

export const InteractiveTags: Story = {
  name: '🖱️ Interactive & Closable',
  render: () => {
    const [tags, setTags] = useState(['React', 'TypeScript', 'Design', 'Frontend']);
    
    return (
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Filter Tags ({tags.length} active)</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                closable
                interactive
                onClose={() => setTags(tags.filter(t => t !== tag))}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">Interactive Status Badges</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="success" interactive leftIcon>
            Online
            </Badge>
            <Badge variant="warning" leftIcon>
            Away
            </Badge>
            <Badge variant="secondary"leftIcon>
             Offline
            </Badge>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
### Interactive Badge Patterns

**Closable Tags**  
- Perfect for filters, search tags, categories  
- Use \`outline\` variant for subtle appearance  
- Always provide \`onClose\` handler  

**Clickable Status**  
- User can change their online status  
- Toggle between states with click  
- Provide visual feedback on hover  

### Implementation Tips

\`\`\`tsx
// Closable filter tag
<Badge 
  variant="outline" 
  closable 
  onClose={() => removeFilter(tag)}
>
  {tag}
</Badge>

// Interactive status
<Badge 
  variant="success" 
  interactive 
  onClick={() => setStatus('online')}
>
  Online
</Badge>
\`\`\`

💡 **Accessibility**: Interactive badges support keyboard navigation (Enter/Space to activate).
        `
      }
    }
  }
};

// =================== RESPONSIVE DEMO ===================

export const ResponsiveLayout: Story = {
  name: '📱 Responsive Grid',
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-2">Technology Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt', 'TypeScript', 'JavaScript'].map((tech) => (
            <Badge key={tech} variant="outline" shape="pill" interactive>
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Project Status</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="success" size="lg" leftIcon>
            Completed
          </Badge>
          <Badge variant="warning" size="lg" leftIcon>
          In Progress
          </Badge>
          <Badge variant="info" size="lg" leftIcon>
          Planning
          </Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Responsive Behavior

**Grid Layout**  
- Mobile: 2 columns  
- Tablet: 3-4 columns  
- Desktop: 6+ columns  
- Badges maintain consistent sizing  

**Touch Considerations**  
- Use \`lg\` size on mobile for better touch targets  
- Ensure adequate spacing between interactive badges  
- Test with thumb navigation  

### Implementation

\`\`\`tsx
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
  {tags.map(tag => (
    <Badge key={tag} variant="outline" interactive>
      {tag}
    </Badge>
  ))}
</div>
\`\`\`

💡 **Mobile**: Consider larger sizes (md/lg) for better readability on small screens.
        `
      }
    }
  }
};

// =================== REAL WORLD EXAMPLE ===================

export const EcommerceExample: Story = {
  name: '🛍️ E-commerce Product Card',
  render: () => (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Product Image Area */}
      <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 h-48 flex items-center justify-center">
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <Badge variant="destructive" size="sm" pulse>25% OFF</Badge>
          <Badge variant="success" size="sm" leftIcon>
            <Star className="w-3 h-3" />Best Seller
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="warning" size="sm">Only 3 left</Badge>
        </div>
        <div className="text-white text-6xl">📱</div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg">Premium Smartphone</h3>
          <Badge variant="premium" size="sm" leftIcon>
            <Sparkles className="w-3 h-3" />Pro
          </Badge>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">$599</span>
          <span className="text-lg text-gray-500 line-through">$799</span>
          <Badge variant="success" size="sm">Save $200</Badge>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="info" size="sm" shape="pill">Free Shipping</Badge>
          <Badge variant="secondary" size="sm" shape="pill">2 Year Warranty</Badge>
          <Badge variant="outline" size="sm" shape="pill">5G Ready</Badge>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### E-commerce Badge Strategy

**Conversion Badges**  
- **Discount**: Red with pulse for urgency  
- **Social Proof**: "Best Seller" builds trust  
- **Scarcity**: "Only X left" creates urgency  

**Product Features**  
- **Premium**: Gradient badge for paid features  
- **Value Adds**: "Free Shipping", "Warranty"  
- **Technical Specs**: "5G Ready", "Waterproof"  

### Psychology Behind Colors

- **Red (25% OFF)**: Creates urgency and excitement  
- **Green (Best Seller)**: Builds trust and confidence  
- **Amber (Only 3 left)**: Balanced urgency without panic  
- **Purple (Pro)**: Premium, exclusive feeling  

This combination of badges can increase conversion rates by 15-30% in e-commerce contexts.
        `
      }
    }
  }
};
