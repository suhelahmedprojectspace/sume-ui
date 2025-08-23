import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Avatar } from '@sume/ui/components/Avatar';

import { useState } from 'react';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `


**Visual representation of users with photos, initials, and status indicators.**

Avatars help users **identify people quickly** in interfaces and create personal connections.

---

## 🎯 When to Use
- **User profiles**: Show who's logged in, profile pages  
- **Comments/messages**: Identify who said what  
- **Team lists**: Display team members and collaborators  
- **Activity feeds**: Show who performed actions  

## 📐 Size Guide
| Size | Dimensions | Use Case | Example |
|------|------------|----------|---------|
| **XS** | 16x16px | Tiny indicators, dense lists | Activity logs, inline mentions |
| **SM** | 24x24px | Compact lists, table rows | Comment threads, user lists |
| **MD** | 40x40px | General UI, cards | Profile cards, navigation bars |
| **LG** | 56x56px | Prominent displays | User profiles, team pages |
| **XL** | 80x80px | Hero sections | Profile headers, onboarding |

## 🎭 Shape Guide
| Shape | Feel | Best For |
|-------|------|----------|
| **Circle** | Personal, friendly | Social apps, user profiles |
| **Rounded** | Modern, professional | Business apps, team tools |
| **Square** | Technical, structured | Admin panels, system users |

## 🟢 Status Indicators
- **Green (online)**: User is active and available  
- **Red (busy)**: User is busy, do not disturb  
- **Yellow (away)**: User is away from keyboard  
- **Gray (offline)**: User is not currently active  

## ♿ Accessibility Features
- Proper alt text for screen readers  
- Semantic roles and ARIA labels  
- Keyboard navigation support  
- High contrast status indicators  
        `
      }
    }
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Physical size of the avatar'
    },
    shape: {
      control: 'select',
      options: ['circle', 'rounded', 'square'],
      description: 'Border radius style'
    },
    status: {
      control: 'select',
      options: [null, 'online', 'offline', 'busy', 'away'],
      description: 'User status indicator'
    },
    loading: {
      control: 'select',
      options: ['eager', 'lazy'],
      description: 'Image loading strategy'
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
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">Extra Small (xs) - 16px</h3>
        <p className="text-sm text-gray-600">Tiny indicators, activity logs, inline mentions</p>
        <div className="flex items-center gap-3">
          <Avatar size="xs" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32" alt="John" />
          <Avatar size="xs" fallbackText="Sarah Johnson" />
          <Avatar size="xs" fallbackText="Mike Chen" status="online" />
          <span className="text-sm text-gray-600">John, Sarah, and Mike are in this thread</span>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">Small (sm) - 24px</h3>
        <p className="text-sm text-gray-600">Compact lists, table rows, comment threads</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Avatar size="sm" src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=32" alt="Emma" />
            <span className="text-sm">Emma commented on your post</span>
            <span className="text-xs text-gray-500">2 min ago</span>
          </div>
          <div className="flex items-center gap-2">
            <Avatar size="sm" fallbackText="David Wilson" status="busy" />
            <span className="text-sm">David is presenting</span>
            <span className="text-xs text-gray-500">5 min ago</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">Medium (md) - 40px (Default)</h3>
        <p className="text-sm text-gray-600">General UI, profile cards, navigation bars</p>
        <div className="flex items-center gap-4">
          <Avatar size="md" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64" alt="Alex" />
          <Avatar size="md" fallbackText="Maria Garcia" status="online" />
          <Avatar size="md" fallbackText="Tom Brown" status="away" />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">Large (lg) - 56px</h3>
        <p className="text-sm text-gray-600">Prominent displays, user profiles, team pages</p>
        <div className="flex items-center gap-4">
          <Avatar size="lg" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80" alt="James" />
          <Avatar size="lg" fallbackText="Lisa Anderson" status="online" />
          <Avatar size="lg" fallbackText="Robert Kim" status="offline" />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">Extra Large (xl) - 80px</h3>
        <p className="text-sm text-gray-600">Hero sections, profile headers, onboarding</p>
        <div className="flex items-center gap-4">
          <Avatar size="xl" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128" alt="Michael" />
          <Avatar size="xl" fallbackText="Jennifer Lee" status="online" />
          <Avatar size="xl" fallbackText="Chris Taylor" status="busy" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Size Selection Guide

**Extra Small (xs) - 16px**  
- **When**: Inline with text, activity indicators, tiny spaces  
- **Status dot**: 8px, positioned bottom-right  
- **Example**: "👤 John mentioned you in a comment"  

**Small (sm) - 24px**  
- **When**: Dense lists, table rows, comment threads  
- **Status dot**: 8px, positioned bottom-right  
- **Example**: Comment author in discussion threads  

**Medium (md) - 40px**  
- **When**: Most UI contexts, profile cards, navigation  
- **Status dot**: 12px, positioned bottom-right  
- **Example**: User menu, profile cards, team lists  

**Large (lg) - 56px**  
- **When**: User profiles, team member cards  
- **Status dot**: 16px, positioned bottom-right  
- **Example**: About page, team directory, user settings  

**Extra Large (xl) - 80px**  
- **When**: Hero sections, profile headers, onboarding  
- **Status dot**: 16px, positioned bottom-right with slight offset  
- **Example**: Profile page header, welcome screens  

💡 **Consistency Tip**: Use the same size for the same context throughout your app.
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
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">Circle (rounded-full)</h3>
        <p className="text-sm text-gray-600">Personal, friendly feel. Perfect for social apps and user-focused interfaces.</p>
        <div className="flex items-center gap-4">
          <Avatar shape="circle" size="sm" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32" alt="User" />
          <Avatar shape="circle" size="md" fallbackText="John Smith" status="online" />
          <Avatar shape="circle" size="lg" fallbackText="Emma Davis" status="busy" />
        </div>
        <p className="text-xs text-gray-500">Used by: Instagram, Twitter, Facebook, WhatsApp</p>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">Rounded (rounded-md)</h3>
        <p className="text-sm text-gray-600">Modern, professional feel. Great for business applications and team tools.</p>
        <div className="flex items-center gap-4">
          <Avatar shape="rounded" size="sm" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32" alt="User" />
          <Avatar shape="rounded" size="md" fallbackText="Alex Johnson" status="away" />
          <Avatar shape="rounded" size="lg" fallbackText="Sarah Wilson" status="online" />
        </div>
        <p className="text-xs text-gray-500">Used by: Slack, Discord, GitHub, Linear</p>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">Square (rounded-none)</h3>
        <p className="text-sm text-gray-600">Technical, structured feel. Ideal for admin panels and system interfaces.</p>
        <div className="flex items-center gap-4">
          <Avatar shape="square" size="sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32" alt="User" />
          <Avatar shape="square" size="md" fallbackText="David Brown" status="offline" />
          <Avatar shape="square" size="lg" fallbackText="Lisa Garcia" status="busy" />
        </div>
        <p className="text-xs text-gray-500">Used by: Admin dashboards, enterprise software</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Shape Psychology & Brand Alignment

**Circle (rounded-full)**  
- **Psychology**: Friendly, approachable, personal  
- **Best for**: Social media, consumer apps, personal profiles  
- **Message**: "We care about people and relationships"  

**Rounded (rounded-md)**  
- **Psychology**: Modern, professional, trustworthy  
- **Best for**: Business tools, productivity apps, team collaboration  
- **Message**: "We're professional but approachable"  

**Square (rounded-none)**  
- **Psychology**: Technical, precise, systematic  
- **Best for**: Admin panels, developer tools, data interfaces  
- **Message**: "We prioritize functionality and structure"  

💡 **Brand Consistency**: Choose one primary shape and stick with it across your entire product for visual consistency.
        `
      }
    }
  }
};

// =================== STATUS INDICATORS ===================

export const StatusIndicators: Story = {
  name: '🟢 Status Indicators',
  render: () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">All Status Types</h3>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <Avatar size="lg" fallbackText="John" status="online" />
            <p className="text-xs text-gray-600 mt-2">Online</p>
            <p className="text-xs text-green-600">Available</p>
          </div>
          <div className="text-center">
            <Avatar size="lg" fallbackText="Sarah" status="busy" />
            <p className="text-xs text-gray-600 mt-2">Busy</p>
            <p className="text-xs text-red-600">Do not disturb</p>
          </div>
          <div className="text-center">
            <Avatar size="lg" fallbackText="Mike" status="away" />
            <p className="text-xs text-gray-600 mt-2">Away</p>
            <p className="text-xs text-yellow-600">Back soon</p>
          </div>
          <div className="text-center">
            <Avatar size="lg" fallbackText="Emma" status="offline" />
            <p className="text-xs text-gray-600 mt-2">Offline</p>
            <p className="text-xs text-gray-500">Last seen 2h ago</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">Status in Different Sizes</h3>
        <div className="flex items-end gap-4">
          <Avatar size="sm" fallbackText="JS" status="online" />
          <Avatar size="md" fallbackText="SW" status="busy" />
          <Avatar size="lg" fallbackText="MC" status="away" />
          <Avatar size="xl" fallbackText="ED" status="offline" />
        </div>
        <p className="text-sm text-gray-600">Status dots scale proportionally with avatar size</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Status Color System

**🟢 Online (Green)**  
- User is active and available for communication  
- Show this for users who were active in the last 5-10 minutes  
- Use \`bg-green-500\` for consistency  

**🔴 Busy (Red)**  
- User has set themselves as "do not disturb"  
- Indicates they don't want to be interrupted  
- Respect this status in notification logic  

**🟡 Away (Yellow)**  
- User stepped away but will return soon  
- Automatically set after 15-30 minutes of inactivity  
- Still available but may not respond immediately  

**⚪ Offline (Gray)**  
- User is not currently online  
- Last seen over 30 minutes ago  
- Don't expect immediate responses  

### Status Dot Sizing
- **XS/SM**: 8px dot, 2px border  
- **MD**: 12px dot, 2px border  
- **LG/XL**: 16px dot, 2px border  
- Always positioned bottom-right with white border ring  

💡 **Real-time Updates**: Connect status to WebSocket for live presence updates.
        `
      }
    }
  }
};

// =================== FALLBACK BEHAVIOR ===================

export const FallbackBehavior: Story = {
  name: '🔄 Image Fallback & Initials',
  render: () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">With Images</h3>
        <div className="flex items-center gap-4">
          <Avatar size="md" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64" alt="John Doe" />
          <Avatar size="md" src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=64" alt="Sarah Johnson" />
          <Avatar size="md" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64" alt="Mike Chen" />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">Fallback to Initials</h3>
        <div className="flex items-center gap-4">
          <Avatar size="md" fallbackText="John Doe" />
          <Avatar size="md" fallbackText="Sarah Johnson" />
          <Avatar size="md" fallbackText="Mike Chen" />
          <Avatar size="md" fallbackText="Emma" />
          <Avatar size="md" fallbackText="A" />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">Broken Images (Auto-fallback)</h3>
        <div className="flex items-center gap-4">
          <Avatar size="md" src="https://broken-url.com/image.jpg" fallbackText="John Doe" />
          <Avatar size="md" src="invalid-image-url" fallbackText="Sarah Johnson" />
          <Avatar size="md" src="" fallbackText="Mike Chen" />
        </div>
        <p className="text-sm text-gray-600">These will automatically show initials when images fail to load</p>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">Edge Cases</h3>
        <div className="flex items-center gap-4">
          <Avatar size="md" fallbackText="" />
          <Avatar size="md" fallbackText="   " />
          <Avatar size="md" />
          <Avatar size="md" fallbackText="Very Long Name That Exceeds" />
        </div>
        <p className="text-sm text-gray-600">Graceful handling of empty names, spaces, and long names</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Fallback Logic

**Image Loading Priority**  
1. Try to load the provided \`src\` image  
2. If image fails or doesn't exist, show initials  
3. If no \`fallbackText\`, use \`alt\` text  
4. If all else fails, show "?" character  

**Initial Generation Rules**  
- Split full name by spaces  
- Take first letter of first two words  
- Convert to uppercase  
- Max 2 characters (e.g., "JD", "SM")  

**Examples**  
- "John Doe" → "JD"  
- "Sarah" → "S"  
- "Mike Chen Lee" → "MC"  
- "" (empty) → "?"  

### Loading Strategy

\`\`\`tsx
// Eager loading for above-the-fold avatars
<Avatar src="user.jpg" loading="eager" />

// Lazy loading for long lists (default)
<Avatar src="user.jpg" loading="lazy" />
\`\`\`

💡 **Performance**: Use lazy loading by default, eager only for critical avatars.
        `
      }
    }
  }
};

// =================== INTERACTIVE DEMO ===================

export const InteractiveDemo: Story = {
  name: '🖱️ Interactive Status Toggle',
  render: () => {
    const [userStatus, setUserStatus] = useState<'online' | 'busy' | 'away' | 'offline'>('online');
    
    const statusOptions = [
      { value: 'online', label: 'Online', description: 'Available for chat' },
      { value: 'busy', label: 'Busy', description: 'Do not disturb' },
      { value: 'away', label: 'Away', description: 'Back in a few minutes' },
      { value: 'offline', label: 'Offline', description: 'Not available' }
    ] as const;
    
    return (
      <div className="space-y-6">
        <div className="text-center">
          <Avatar 
            size="xl" 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128" 
            alt="Your Profile"
            status={userStatus}
            className="mx-auto mb-4"
          />
          <h3 className="font-semibold text-lg">John Doe</h3>
          <p className="text-sm text-gray-600">
            {statusOptions.find(option => option.value === userStatus)?.description}
          </p>
        </div>

        <div>
          <h4 className="font-medium mb-3">Change Your Status:</h4>
          <div className="grid grid-cols-2 gap-2">
            {statusOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setUserStatus(option.value)}
                className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                  userStatus === option.value 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <Avatar size="sm" fallbackText="JD" status={option.value} />
                <div className="text-left">
                  <div className="font-medium text-sm">{option.label}</div>
                  <div className="text-xs text-gray-500">{option.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
### Interactive Status Selection

This example shows how users can change their online status with immediate visual feedback.

**Implementation Pattern**  
\`\`\`tsx
const [status, setStatus] = useState('online');

<Avatar 
  src="user.jpg" 
  fallbackText="John Doe"
  status={status}
  size="xl"
/>

// Status selector buttons
{statusOptions.map(option => (
  <button onClick={() => setStatus(option.value)}>
    <Avatar size="sm" fallbackText="JD" status={option.value} />
    {option.label}
  </button>
))}
\`\`\`

**UX Considerations**  
- Provide clear labels for each status  
- Show descriptions to explain what each status means  
- Update status immediately on selection  
- Consider auto-away after inactivity  

💡 **Real Implementation**: Connect to WebSocket to broadcast status changes to other users.
        `
      }
    }
  }
};

// =================== TEAM LIST EXAMPLE ===================

export const TeamListExample: Story = {
  name: '👥 Team Directory Example',
  render: () => (
    <div className="max-w-2xl space-y-4">
      <h3 className="font-semibold text-lg mb-4">Development Team</h3>
      
      {[
        { name: 'Sarah Johnson', role: 'Lead Designer', status: 'online' as const, image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=64' },
        { name: 'Mike Chen', role: 'Frontend Developer', status: 'busy' as const, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64' },
        { name: 'Emma Wilson', role: 'Product Manager', status: 'away' as const, image: null },
        { name: 'David Brown', role: 'Backend Developer', status: 'online' as const, image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64' },
        { name: 'Lisa Garcia', role: 'UX Researcher', status: 'offline' as const, image: null },
        { name: 'Tom Anderson', role: 'DevOps Engineer', status: 'online' as const, image: null }
      ].map((member, index) => (
        <div key={index} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
          <Avatar 
            size="md" 
            src={member.image || undefined}
            fallbackText={member.name}
            status={member.status}
          />
          <div className="flex-1">
            <h4 className="font-medium">{member.name}</h4>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
          <div className="text-right">
            <div className={`text-sm font-medium capitalize ${
              member.status === 'online' ? 'text-green-600' :
              member.status === 'busy' ? 'text-red-600' :
              member.status === 'away' ? 'text-yellow-600' :
              'text-gray-500'
            }`}>
              {member.status}
            </div>
            <p className="text-xs text-gray-500">
              {member.status === 'online' ? 'Active now' :
               member.status === 'busy' ? 'In a meeting' :
               member.status === 'away' ? 'Back in 15min' :
               'Last seen 2h ago'}
            </p>
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Real-World Team Directory

This example shows how avatars work in a practical team listing interface.

**Key Features**  
- Mix of photos and fallback initials  
- Status indicators with meanings  
- Hover states for interactivity  
- Responsive layout that works on mobile  

**Implementation Details**  
\`\`\`tsx
const teamMembers = [
  { 
    name: 'Sarah Johnson', 
    role: 'Lead Designer', 
    status: 'online',
    image: 'https://...'
  }
  // ... more members
];

<div className="space-y-4">
  {teamMembers.map(member => (
    <div className="flex items-center gap-4 p-4 border rounded-lg">
      <Avatar 
        size="md"
        src={member.image}
        fallbackText={member.name}
        status={member.status}
      />
      <div className="flex-1">
        <h4>{member.name}</h4>
        <p className="text-gray-600">{member.role}</p>
      </div>
    </div>
  ))}
</div>
\`\`\`

**Design Patterns**  
- Consistent avatar size (md) for scannable list  
- Status colors match text colors for coherence  
- Fallback initials when photos not available  
- Hover states encourage interaction  

💡 **Performance**: Use lazy loading for long team lists to improve page load speed.
        `
      }
    }
  }
};

// =================== RESPONSIVE BEHAVIOR ===================

export const ResponsiveLayout: Story = {
  name: '📱 Responsive Behavior',
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold text-gray-800 mb-4">Avatar Grid - Responsive</h3>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4">
          {Array.from({ length: 12 }, (_, i) => (
            <Avatar 
              key={i}
              size="md"
              fallbackText={`User ${i + 1}`}
              status={i % 4 === 0 ? 'online' : i % 3 === 0 ? 'busy' : i % 2 === 0 ? 'away' : 'offline'}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-800 mb-4">Mobile-First Sizing</h3>
        <div className="space-y-4">
          <div className="block sm:hidden">
            <p className="text-sm text-gray-600 mb-2">Mobile view - larger avatars for touch</p>
            <div className="flex gap-4">
              <Avatar size="lg" fallbackText="Mobile User" status="online" />
              <Avatar size="lg" fallbackText="Touch User" status="busy" />
            </div>
          </div>
          <div className="hidden sm:block md:hidden">
            <p className="text-sm text-gray-600 mb-2">Tablet view - balanced sizing</p>
            <div className="flex gap-3">
              <Avatar size="md" fallbackText="Tablet User" status="online" />
              <Avatar size="md" fallbackText="Touch User" status="away" />
            </div>
          </div>
          <div className="hidden md:block">
            <p className="text-sm text-gray-600 mb-2">Desktop view - compact efficient</p>
            <div className="flex gap-2">
              <Avatar size="sm" fallbackText="Desktop User" status="online" />
              <Avatar size="sm" fallbackText="Mouse User" status="offline" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Responsive Avatar Strategy

**Mobile-First Approach**  
- **Mobile**: Use \`lg\` size for better touch targets  
- **Tablet**: Use \`md\` size for balanced layouts  
- **Desktop**: Use \`sm\` or \`md\` for space efficiency  

**Grid Layouts**  
- **Mobile**: 4 avatars per row  
- **Tablet**: 6-8 avatars per row  
- **Desktop**: 8-12 avatars per row  

**Touch Considerations**  
- Larger avatars (lg/xl) for mobile interfaces  
- Adequate spacing between interactive avatars  
- Status dots are easily visible on all screen sizes  

### Implementation

\`\`\`tsx
// Responsive grid
<div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4">
  {users.map(user => (
    <Avatar key={user.id} size="md" {...user} />
  ))}
</div>

// Responsive sizing
<Avatar 
  size="lg"           // Mobile
  className="sm:w-10 sm:h-10 md:w-8 md:h-8"  // Tablet/Desktop override
/>
\`\`\`

💡 **Performance Tip**: On mobile, consider showing fewer avatars initially with a "Show more" button to improve load times.
        `
      }
    }
  }
};
