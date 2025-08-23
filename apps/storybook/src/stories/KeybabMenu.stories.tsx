import type { Meta, StoryObj } from '@storybook/react';

import { KeybabMenu } from '@sume/ui/components/KeybabMenu';
import { 
  Edit,
  Copy,
  Trash2,
  Download,
  Share,
  Archive,
  Eye,
  EyeOff,
  Settings,
  User,
  Mail,
  Star,
  Flag,
  Plus,
  X,
  Lock,
  Unlock,
  Move,
  Bookmark,
  MessageSquare,
  Calendar,
  Clock,
  Filter,
  Search,
  Upload,
  FileText,
} from 'lucide-react';

const noop=()=>{}

const basicActions = [
  { 
    label: 'Edit', 
    onClick: noop, 
    icon: <Edit size={16} /> 
  },
  { 
    label: 'Copy', 
    onClick: noop, 
    icon: <Copy size={16} /> 
  },
  { 
    label: 'Delete', 
    onClick: noop, 
    icon: <Trash2 size={16} />, 
    destructive: true 
  },
];

const fileActions = [
  { 
    label: 'Download', 
    onClick: noop, 
    icon: <Download size={16} /> 
  },
  { 
    label: 'Share', 
    onClick: noop, 
    icon: <Share size={16} /> 
  },
  { 
    label: 'Archive', 
    onClick: noop, 
    icon: <Archive size={16} /> 
  },
  { 
    label: 'Delete', 
    onClick: noop, 
    icon: <Trash2 size={16} />, 
    destructive: true 
  },
];

const userActions = [
  { 
    label: 'View Profile', 
    onClick: noop, 
    icon: <User size={16} /> 
  },
  { 
    label: 'Send Message', 
    onClick: noop, 
    icon: <Mail size={16} /> 
  },
  { 
    label: 'Add to Favorites', 
    onClick: noop, 
    icon: <Star size={16} /> 
  },
  { 
    label: 'Block User', 
    onClick: noop, 
    icon: <X size={16} />, 
    destructive: true 
  },
];

const postActions = [
  { 
    label: 'Save Post', 
    onClick: noop, 
    icon: <Bookmark size={16} /> 
  },
  { 
    label: 'Share', 
    onClick: noop, 
    icon: <Share size={16} /> 
  },
  { 
    label: 'Report', 
    onClick: noop, 
    icon: <Flag size={16} /> 
  },
  { 
    label: 'Hide Post', 
    onClick: noop, 
    icon: <EyeOff size={16} />, 
    destructive: true 
  },
];

const adminActions = [
  { 
    label: 'Edit Settings', 
    onClick: noop, 
    icon: <Settings size={16} /> 
  },
  { 
    label: 'View Logs', 
    onClick: noop, 
    icon: <FileText size={16} /> 
  },
  { 
    label: 'Export Data', 
    onClick: noop, 
    icon: <Download size={16} /> 
  },
  { 
    label: 'Reset System', 
    onClick: noop, 
    icon: <Trash2 size={16} />, 
    destructive: true,
    disabled: true 
  },
];

const mediaActions = [
  { 
    label: 'View Full Size', 
    onClick: noop, 
    icon: <Eye size={16} /> 
  },
  { 
    label: 'Download', 
    onClick: noop, 
    icon: <Download size={16} /> 
  },
  { 
    label: 'Add to Album', 
    onClick: noop, 
    icon: <Plus size={16} /> 
  },
  { 
    label: 'Set as Cover', 
    onClick: noop, 
    icon: <Star size={16} /> 
  },
  { 
    label: 'Remove', 
    onClick: noop, 
    icon: <Trash2 size={16} />, 
    destructive: true 
  },
];

const quickActions = [
  { 
    label: 'Copy Link', 
    onClick: noop, 
    icon: <Copy size={16} /> 
  },
  { 
    label: 'Share', 
    onClick: noop, 
    icon: <Share size={16} /> 
  },
];

const longActionList = [
  { label: 'Edit', onClick: noop, icon: <Edit size={16} /> },
  { label: 'Copy', onClick: noop, icon: <Copy size={16} /> },
  { label: 'Move', onClick: noop, icon: <Move size={16} /> },
  { label: 'Share', onClick: noop, icon: <Share size={16} /> },
  { label: 'Download', onClick: noop, icon: <Download size={16} /> },
  { label: 'Archive', onClick: noop, icon: <Archive size={16} /> },
  { label: 'Bookmark', onClick: noop, icon: <Bookmark size={16} /> },
  { label: 'Add Comment', onClick: noop, icon: <MessageSquare size={16} /> },
  { label: 'Schedule', onClick: noop, icon: <Calendar size={16} /> },
  { label: 'Set Reminder', onClick: noop, icon: <Clock size={16} /> },
  { label: 'Apply Filter', onClick: noop, icon: <Filter size={16} /> },
  { label: 'Search', onClick: noop, icon: <Search size={16} /> },
  { label: 'Upload', onClick: noop, icon: <Upload size={16} /> },
  { label: 'Delete', onClick: noop, icon: <Trash2 size={16} />, destructive: true },
];

const meta: Meta<typeof KeybabMenu> = {
  title: 'Components/KeybabMenu',
  component: KeybabMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `


## What is it?
A versatile kebab menu component (three-dots menu) that provides contextual actions through a dropdown interface. Perfect for displaying action menus without cluttering the UI.

## How to use it?
1. Import the component: \`import { KeybabMenu } from './KeybabMenu'\`
2. Define your actions array with \`{ label, onClick, icon?, disabled?, destructive? }\` structure
3. Choose appropriate variant (vertical, horizontal, or custom)
4. Configure alignment and behavior options

## Key Features:
- **Multiple variants**: Vertical dots, horizontal dots, or custom trigger content
- **Rich actions**: Support for icons, disabled states, and destructive actions
- **Flexible positioning**: Left or right alignment with multiple width options
- **Smooth animations**: Spring-based animations with staggered item appearances
- **Accessibility**: Full keyboard navigation and ARIA support
- **Customizable**: Extensive styling options and behavior controls

## So that you can:
- Provide contextual actions without UI clutter
- Create consistent action menus across your application
- Handle both safe and destructive actions appropriately
- Maintain excellent user experience with smooth animations
- Ensure accessibility compliance for all users
        `,
      },
    },
  },
  argTypes: {
    variant: {
      description: 'Visual style of the menu trigger',
      control: { type: 'select' },
      options: ['vertical', 'horizontal', 'custom'],
    },
    action: {
      description: 'Array of menu actions with labels, handlers, and styling',
      control: { type: 'object' },
    },
    align: {
      description: 'Alignment of the dropdown menu relative to trigger',
      control: { type: 'select' },
      options: ['left', 'right'],
    },
    menuWidth: {
      description: 'Width behavior of the dropdown menu',
      control: { type: 'select' },
      options: ['default', 'fit', 'full'],
    },
    closeOnSelect: {
      description: 'Whether menu closes automatically after action selection',
      control: { type: 'boolean' },
    },
    className: {
      description: 'Additional CSS classes for the container',
      control: { type: 'text' },
    },
    menuClassName: {
      description: 'Additional CSS classes for the dropdown menu',
      control: { type: 'text' },
    },
    triggerClassName: {
      description: 'Additional CSS classes for the trigger button',
      control: { type: 'text' },
    },
    children: {
      description: 'Custom trigger content (when variant is "custom")',
      control: { type: 'text' },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Stories
export const Default: Story = {
  args: {
    variant: 'vertical',
    action: basicActions,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: The most basic kebab menu with essential edit, copy, and delete actions using the default vertical three-dots trigger.

**How**: 
- Pass an array of action objects with \`label\`, \`onClick\`, and optional \`icon\`
- Use \`destructive: true\` for dangerous actions like delete
- Actions automatically handle click events and menu closing

**So that**: You can quickly add contextual actions to any UI element with minimal setup, providing users with common actions like edit, copy, and delete in a clean, unobtrusive interface.

\`\`\`tsx
const basicActions = [
  { 
    label: 'Edit', 
    onClick: handleEdit, 
    icon: <Edit size={16} /> 
  },
  { 
    label: 'Delete', 
    onClick: handleDelete, 
    icon: <Trash2 size={16} />, 
    destructive: true 
  }
];

<KeybabMenu action={basicActions} />
\`\`\`
        `,
      },
    },
  },
};

export const HorizontalVariant: Story = {
  args: {
    variant: 'horizontal',
    action: basicActions,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A kebab menu using horizontal three-dots (ellipsis) instead of vertical dots.

**How**: 
- Set \`variant="horizontal"\` to display horizontal dots
- Same functionality as vertical, just different visual representation
- Particularly useful in horizontal layouts or toolbars

**So that**: You can match the menu trigger to your layout orientation, use in horizontal toolbars where vertical dots might look out of place, or provide visual consistency with other horizontal UI elements.

\`\`\`tsx
<KeybabMenu 
  variant="horizontal"
  action={actions}
/>
\`\`\`
        `,
      },
    },
  },
};

export const CustomTrigger: Story = {
  args: {
    variant: 'custom',
    action: basicActions,
    children: (
      <div className="flex items-center space-x-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
        <Settings size={16} />
        <span>Actions</span>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A kebab menu with completely custom trigger content instead of the standard dots.

**How**: 
- Set \`variant="custom"\` 
- Pass your custom trigger content as \`children\`
- Can be any React element: buttons, text, icons, or complex components
- Maintains all menu functionality with your custom appearance

**So that**: You can integrate action menus into any design pattern, create branded action buttons, use descriptive text triggers, or match specific design requirements while keeping all the menu functionality.

\`\`\`tsx
<KeybabMenu 
  variant="custom"
  action={actions}
>
  <button className="px-4 py-2 bg-blue-500 text-white rounded">
    <Settings size={16} />
    <span>Actions</span>
  </button>
</KeybabMenu>
\`\`\`
        `,
      },
    },
  },
};

// Alignment Stories
export const LeftAligned: Story = {
  args: {
    variant: 'vertical',
    action: basicActions,
    align: 'left',
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A kebab menu where the dropdown appears aligned to the left edge of the trigger button.

**How**: 
- Set \`align="left"\` prop
- Menu dropdown will appear with its left edge aligned to the trigger's left edge
- Useful when the trigger is near the right edge of its container

**So that**: You can prevent menu dropdowns from being cut off by container boundaries, ensure menus appear in appropriate positions relative to page layout, and provide better UX when triggers are positioned near edges.

\`\`\`tsx
<KeybabMenu 
  action={actions}
  align="left"  // Menu appears to the left
/>
\`\`\`
        `,
      },
    },
  },
};

export const RightAligned: Story = {
  args: {
    variant: 'vertical',
    action: basicActions,
    align: 'right',
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A kebab menu where the dropdown appears aligned to the right edge of the trigger button (default behavior).

**How**: 
- Default behavior or explicitly set \`align="right"\`
- Menu dropdown appears with its right edge aligned to the trigger's right edge
- Most common pattern for kebab menus

**So that**: You get the standard kebab menu positioning that users expect, with menus appearing in the most natural position relative to the trigger button.

\`\`\`tsx
<KeybabMenu 
  action={actions}
  align="right"  // Default behavior
/>
\`\`\`
        `,
      },
    },
  },
};

// Width Stories
export const DefaultWidth: Story = {
  args: {
    variant: 'vertical',
    action: basicActions,
    menuWidth: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A kebab menu with standard fixed width (14rem/224px) that accommodates most action labels comfortably.

**How**: 
- Default behavior or set \`menuWidth="default"\`
- Fixed width of 14rem provides consistent sizing
- Good balance between compactness and readability

**So that**: You get consistent menu sizing across your application, ensure action labels have adequate space, and maintain visual harmony in your interface design.

\`\`\`tsx
<KeybabMenu 
  action={actions}
  menuWidth="default"  // 14rem fixed width
/>
\`\`\`
        `,
      },
    },
  },
};

export const FitWidth: Story = {
  args: {
    variant: 'vertical',
    action: quickActions,
    menuWidth: 'fit',
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A kebab menu that automatically sizes to fit its content with a minimum width constraint.

**How**: 
- Set \`menuWidth="fit"\`
- Width adjusts to the longest action label
- Minimum width of 120px prevents overly narrow menus
- More compact for short action lists

**So that**: You can optimize space usage for menus with short action labels, create more compact interfaces when appropriate, and avoid unnecessary white space in minimal action menus.

\`\`\`tsx
<KeybabMenu 
  action={shortActions}
  menuWidth="fit"  // Fits content width
/>
\`\`\`
        `,
      },
    },
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'vertical',
    action: basicActions,
    menuWidth: 'full',
    className: 'w-64', // Container width for demonstration
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A kebab menu that expands to fill the full width of its container with a minimum width constraint.

**How**: 
- Set \`menuWidth="full"\`
- Menu width matches the container width
- Minimum width of 160px prevents overly narrow menus
- Useful in card layouts or constrained spaces

**So that**: You can create menus that integrate seamlessly with card designs, utilize available space efficiently in constrained layouts, and maintain consistent width with other UI elements.

\`\`\`tsx
<div className="w-64"> {/* Container defines width */}
  <KeybabMenu 
    action={actions}
    menuWidth="full"  // Fills container width
  />
</div>
\`\`\`
        `,
      },
    },
  },
};

// Feature Stories
export const WithIcons: Story = {
  args: {
    variant: 'vertical',
    action: fileActions,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A kebab menu where each action includes an icon alongside its text label for better visual recognition.

**How**: 
- Add \`icon\` property to action objects using React elements
- Icons appear to the left of action labels
- Icons automatically inherit appropriate colors and hover states
- Consistent sizing and spacing maintained automatically

**So that**: Users can quickly identify actions through visual cues, reduce cognitive load when scanning options, improve accessibility for users who benefit from visual indicators, and create more professional-looking interfaces.

\`\`\`tsx
const actions = [
  { 
    label: 'Download', 
    onClick: handleDownload, 
    icon: <Download size={16} /> 
  },
  { 
    label: 'Share', 
    onClick: handleShare, 
    icon: <Share size={16} /> 
  }
];

<KeybabMenu action={actions} />
\`\`\`
        `,
      },
    },
  },
};

export const WithDisabledActions: Story = {
  args: {
    variant: 'vertical',
    action: adminActions,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A kebab menu with some actions disabled, showing unavailable options in a grayed-out state.

**How**: 
- Add \`disabled: true\` property to specific action objects
- Disabled actions appear grayed out and are not clickable
- Cursor changes to "not-allowed" on hover
- Actions remain visible to show all possible options

**So that**: You can indicate temporarily unavailable actions (like during loading), show permission-restricted options, guide users toward valid choices, and maintain interface consistency while preventing invalid operations.

\`\`\`tsx
const actions = [
  { 
    label: 'Edit Settings', 
    onClick: handleEdit, 
    icon: <Settings size={16} /> 
  },
  { 
    label: 'Reset System', 
    onClick: handleReset, 
    icon: <Trash2 size={16} />, 
    disabled: !hasPermission,  // Conditionally disabled
    destructive: true 
  }
];

<KeybabMenu action={actions} />
\`\`\`
        `,
      },
    },
  },
};

export const DestructiveActions: Story = {
  args: {
    variant: 'vertical',
    action: [
      { label: 'Edit', onClick: noop, icon: <Edit size={16} /> },
      { label: 'Copy', onClick: noop, icon: <Copy size={16} /> },
      { label: 'Archive', onClick: noop, icon: <Archive size={16} /> },
      { label: 'Delete Forever', onClick: noop, icon: <Trash2 size={16} />, destructive: true },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A kebab menu demonstrating how destructive actions (like delete) are visually distinguished with red coloring.

**How**: 
- Add \`destructive: true\` property to dangerous action objects
- Destructive actions automatically display in red text and icons
- Hover states provide appropriate visual feedback
- Helps prevent accidental activation of dangerous actions

**So that**: Users can easily identify potentially harmful actions, reduce the risk of accidental data loss, follow established UI patterns for dangerous operations, and make informed decisions before taking destructive actions.

\`\`\`tsx
const actions = [
  { 
    label: 'Edit', 
    onClick: handleEdit, 
    icon: <Edit size={16} /> 
  },
  { 
    label: 'Delete Forever', 
    onClick: handleDelete, 
    icon: <Trash2 size={16} />, 
    destructive: true  // Red styling
  }
];

<KeybabMenu action={actions} />
\`\`\`
        `,
      },
    },
  },
};

export const PersistentMenu: Story = {
  args: {
    variant: 'vertical',
    action: basicActions,
    closeOnSelect: false,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A kebab menu that stays open after action selection, useful for multiple sequential actions.

**How**: 
- Set \`closeOnSelect={false}\` to prevent automatic menu closing
- Menu remains open after clicking actions
- Users must click outside or press Escape to close
- Useful for batch operations or related actions

**So that**: Users can perform multiple actions in sequence without reopening the menu, improve workflow efficiency for bulk operations, reduce repetitive clicking for related tasks, and provide better UX for complex action scenarios.

\`\`\`tsx
<KeybabMenu 
  action={actions}
  closeOnSelect={false}  // Menu stays open
/>
\`\`\`
        `,
      },
    },
  },
};

// Real-world Examples
export const PostActionsMenu: Story = {
  args: {
    variant: 'vertical',
    action: postActions,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A realistic social media post actions menu with save, share, report, and hide functionality.

**How**: 
- Combines positive actions (save, share) with moderation actions (report, hide)
- Uses appropriate icons for each social media action
- Destructive styling for hide action to indicate it removes content
- Standard right alignment for post contexts

**So that**: Users can interact with social content efficiently, access both engagement and moderation tools, maintain clean post layouts without cluttering UI, and follow familiar social media interaction patterns.

**Real-world usage**: Social media feeds, blog post lists, comment systems, content galleries.

\`\`\`tsx
const postActions = [
  { label: 'Save Post', onClick: savePost, icon: <Bookmark size={16} /> },
  { label: 'Share', onClick: sharePost, icon: <Share size={16} /> },
  { label: 'Report', onClick: reportPost, icon: <Flag size={16} /> },
  { label: 'Hide Post', onClick: hidePost, icon: <EyeOff size={16} />, destructive: true }
];

<KeybabMenu action={postActions} />
\`\`\`
        `,
      },
    },
  },
};

export const UserProfileMenu: Story = {
  args: {
    variant: 'vertical',
    action: userActions,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A user profile context menu providing actions for viewing, messaging, favoriting, and blocking users.

**How**: 
- Includes positive interactions (view profile, message, favorite)
- Provides moderation action (block) with destructive styling
- Uses user-centric icons for immediate recognition
- Follows social platform interaction patterns

**So that**: Users can quickly access common profile interactions, perform social actions without leaving current context, access moderation tools when needed, and maintain familiar social interaction workflows.

**Real-world usage**: User directories, team member lists, social profiles, contact management.

\`\`\`tsx
const userActions = [
  { label: 'View Profile', onClick: viewProfile, icon: <User size={16} /> },
  { label: 'Send Message', onClick: sendMessage, icon: <Mail size={16} /> },
  { label: 'Add to Favorites', onClick: addFavorite, icon: <Star size={16} /> },
  { label: 'Block User', onClick: blockUser, icon: <X size={16} />, destructive: true }
];

<KeybabMenu action={userActions} />
\`\`\`
        `,
      },
    },
  },
};

export const MediaGalleryMenu: Story = {
  args: {
    variant: 'vertical',
    action: mediaActions,
    align: 'left',
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A comprehensive media file context menu for photo/video gallery interfaces with viewing, organizing, and management actions.

**How**: 
- Includes viewing actions (full size view)
- Provides organization tools (add to album, set as cover)
- Offers standard file actions (download)
- Uses left alignment to prevent menu cutoff in gallery grids
- Destructive action for removal

**So that**: Users can manage media files efficiently, organize photos into collections, access viewing options quickly, and perform file operations without leaving the gallery context.

**Real-world usage**: Photo galleries, media libraries, file managers, portfolio showcases.

\`\`\`tsx
const mediaActions = [
  { label: 'View Full Size', onClick: viewFull, icon: <Eye size={16} /> },
  { label: 'Download', onClick: download, icon: <Download size={16} /> },
  { label: 'Add to Album', onClick: addToAlbum, icon: <Plus size={16} /> },
  { label: 'Set as Cover', onClick: setCover, icon: <Star size={16} /> },
  { label: 'Remove', onClick: remove, icon: <Trash2 size={16} />, destructive: true }
];

<KeybabMenu action={mediaActions} align="left" />
\`\`\`
        `,
      },
    },
  },
};

// Performance & Edge Cases
export const LongActionList: Story = {
  args: {
    variant: 'vertical',
    action: longActionList,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A kebab menu with many actions (14+ items) demonstrating performance with large action lists and scrollable menus.

**How**: 
- Component handles large action lists efficiently
- Menu becomes scrollable with max-height constraints
- Staggered animations for smooth appearance
- Each action maintains individual hover/click states

**Performance optimizations**:
- Efficient animation with staggered delays
- Proper cleanup of event listeners
- Memoized click handlers to prevent unnecessary re-renders
- CSS-based scrolling for smooth performance

**So that**: You can provide comprehensive action sets when needed, maintain smooth performance even with many options, allow users to access all available actions, and ensure the interface remains responsive regardless of action count.

\`\`\`tsx
const manyActions = [
  { label: 'Edit', onClick: handleEdit, icon: <Edit size={16} /> },
  { label: 'Copy', onClick: handleCopy, icon: <Copy size={16} /> },
  // ... many more actions
  { label: 'Delete', onClick: handleDelete, icon: <Trash2 size={16} />, destructive: true }
];

<KeybabMenu action={manyActions} />
\`\`\`
        `,
      },
    },
  },
};

export const EmptyMenu: Story = {
  args: {
    variant: 'vertical',
    action: [],
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A kebab menu with no actions, demonstrating graceful handling of empty states.

**How**: 
- Trigger remains clickable and shows hover states
- Menu opens but displays no content
- No errors or broken layouts occur
- Maintains consistent trigger styling

**So that**: You can handle dynamic action lists that might be empty, maintain UI consistency during loading states, show contextual menus that may have no applicable actions, and provide graceful degradation for edge cases.

**Use cases**:
- Loading states before actions are determined
- Permission-based actions where user has no available actions
- Context-dependent menus that may be empty
- Error states where actions are temporarily unavailable

\`\`\`tsx
<KeybabMenu 
  action={userPermissions.length ? availableActions : []}
/>
\`\`\`
        `,
      },
    },
  },
};

// Styling Examples
export const CustomStyling: Story = {
  args: {
    variant: 'vertical',
    action: basicActions,
    triggerClassName: 'bg-purple-100 hover:bg-purple-200 text-purple-600',
    menuClassName: 'border-2 border-purple-200 shadow-purple-100',
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A kebab menu with custom styling applied to both the trigger button and dropdown menu.

**How**: 
- Use \`triggerClassName\` to style the three-dots button
- Use \`menuClassName\` to style the dropdown menu appearance
- Use \`className\` to style the container element
- Styles merge with component defaults for enhanced appearance

**Styling options**:
- Custom colors and backgrounds
- Border modifications
- Shadow and elevation effects
- Hover state customizations
- Brand-specific theming

**So that**: You can integrate menus seamlessly with your design system, apply brand colors and styling, create themed variations for different contexts, and maintain visual consistency across your application.

\`\`\`tsx
<KeybabMenu 
  action={actions}
  triggerClassName="bg-purple-100 hover:bg-purple-200"
  menuClassName="border-2 border-purple-200 shadow-lg"
/>
\`\`\`
        `,
      },
    },
  },
};

// Complex Usage Examples
export const TableRowActions: Story = {
  render: () => (
    <div className="w-full max-w-4xl overflow-hidden rounded-lg border border-gray-200">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {[
            { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
            { name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
            { name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
          ].map((user, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  user.status === 'Active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {user.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <KeybabMenu 
                  action={[
                    { label: 'View Profile', onClick: noop, icon: <User size={16} /> },
                    { label: 'Edit User', onClick: noop, icon: <Edit size={16} /> },
                    { label: 'Send Email', onClick: noop, icon: <Mail size={16} /> },
                    { 
                      label: user.status === 'Active' ? 'Deactivate' : 'Activate', 
                      onClick: noop, 
                      icon: user.status === 'Active' ? <Lock size={16} /> : <Unlock size={16} /> 
                    },
                    { label: 'Delete User', onClick: noop, icon: <Trash2 size={16} />, destructive: true },
                  ]}
                  align="right"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
**What**: A practical demonstration of kebab menus integrated into a data table for row-level actions.

**How**: 
- Each table row includes a kebab menu in the actions column
- Actions are contextual to each row's data (e.g., activate/deactivate based on status)
- Right-aligned menus prevent cutoff at table edges
- Consistent action patterns across all rows
- Dynamic action labels based on current state

**Table integration best practices**:
- Place menus in dedicated "Actions" column
- Use right alignment to prevent menu cutoff
- Make actions contextual to row data
- Provide consistent action sets across rows
- Include both safe and destructive actions appropriately

**So that**: Users can perform actions on specific table rows efficiently, maintain clean table layouts without action button clutter, access contextual actions based on data state, and follow familiar data table interaction patterns.

**Perfect for**: User management tables, product catalogs, order lists, content management systems, admin dashboards.

\`\`\`tsx
// Table row with contextual actions
<tr>
  <td>John Doe</td>
  <td>john@example.com</td>
  <td>Admin</td>
  <td>
    <KeybabMenu 
      action={[
        { label: 'Edit User', onClick: () => editUser(user.id) },
        { label: user.active ? 'Deactivate' : 'Activate', onClick: () => toggleUser(user.id) },
        { label: 'Delete', onClick: () => deleteUser(user.id), destructive: true }
      ]}
      align="right"
    />
  </td>
</tr>
\`\`\`
        `,
      },
    },
  },
};

export const CardActions: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
      {[
        { 
          title: 'Project Alpha', 
          description: 'A revolutionary new approach to data visualization',
          status: 'In Progress',
          team: '5 members',
          dueDate: '2024-03-15'
        },
        { 
          title: 'Marketing Campaign', 
          description: 'Q1 2024 product launch campaign strategy',
          status: 'Planning',
          team: '8 members',
          dueDate: '2024-02-28'
        },
        { 
          title: 'Website Redesign', 
          description: 'Complete overhaul of company website and branding',
          status: 'Review',
          team: '3 members',
          dueDate: '2024-04-01'
        },
      ].map((project, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
            <KeybabMenu 
              action={[
                { label: 'View Details', onClick: noop, icon: <Eye size={16} /> },
                { label: 'Edit Project', onClick: noop, icon: <Edit size={16} /> },
                { label: 'Share Link', onClick: noop, icon: <Share size={16} /> },
                { label: 'Add to Favorites', onClick: noop, icon: <Star size={16} /> },
                { label: 'Duplicate', onClick: noop, icon: <Copy size={16} /> },
                { label: 'Archive', onClick: noop, icon: <Archive size={16} /> },
                { label: 'Delete Project', onClick: noop, icon: <Trash2 size={16} />, destructive: true },
              ]}
              align="right"
              triggerClassName="text-gray-400 hover:text-gray-600"
            />
          </div>
          
          <p className="text-gray-600 text-sm mb-4">{project.description}</p>
          
          <div className="space-y-2 text-sm text-gray-500">
            <div className="flex justify-between">
              <span>Status:</span>
              <span className={`font-medium ${
                project.status === 'In Progress' ? 'text-blue-600' :
                project.status === 'Planning' ? 'text-yellow-600' :
                project.status === 'Review' ? 'text-green-600' : 'text-gray-600'
              }`}>
                {project.status}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Team:</span>
              <span>{project.team}</span>
            </div>
            <div className="flex justify-between">
              <span>Due:</span>
              <span>{project.dueDate}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
**What**: Kebab menus integrated into card-based layouts for project management or content organization interfaces.

**How**: 
- Menu positioned in card header alongside title
- Comprehensive action set for project management
- Right alignment ensures menus don't overflow card boundaries
- Subtle trigger styling that doesn't compete with card content
- Full range of actions from viewing to destructive operations

**Card layout considerations**:
- Position menu in card header for easy access
- Use subtle trigger colors to avoid visual competition
- Ensure right alignment for boundary prevention
- Provide comprehensive but organized action sets
- Include contextual actions relevant to card content

**So that**: Users can manage card-based content efficiently, access actions without leaving the current view, maintain clean card layouts, and follow familiar patterns for content management interfaces.

**Perfect for**: Project dashboards, content galleries, product catalogs, team workspaces, portfolio displays.

\`\`\`tsx
<div className="card">
  <div className="card-header">
    <h3>Project Title</h3>
    <KeybabMenu 
      action={[
        { label: 'View Details', onClick: viewProject },
        { label: 'Edit Project', onClick: editProject },
        { label: 'Share Link', onClick: shareProject },
        { label: 'Delete', onClick: deleteProject, destructive: true }
      ]}
      align="right"
      triggerClassName="text-gray-400 hover:text-gray-600"
    />
  </div>
  <div className="card-content">
    {/* Card content */}
  </div>
</div>
\`\`\`
        `,
      },
    },
  },
};

export const NavigationMenu: Story = {
  render: () => (
    <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
            <span className="text-xl font-semibold text-gray-900">MyApp</span>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Dashboard</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Projects</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Team</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Reports</a>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-gray-600 relative">
            <MessageSquare size={20} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          
          <button className="p-2 text-gray-400 hover:text-gray-600 relative">
            <Calendar size={20} />
          </button>
          
          <div className="flex items-center space-x-3">
            <img 
              className="w-8 h-8 rounded-full" 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
              alt="User avatar"
            />
            <KeybabMenu 
              action={[
                { label: 'My Profile', onClick: noop, icon: <User size={16} /> },
                { label: 'Settings', onClick: noop, icon: <Settings size={16} /> },
                { label: 'Help & Support', onClick: noop, icon: <MessageSquare size={16} /> },
                { label: 'Keyboard Shortcuts', onClick: noop, icon: <Calendar size={16} /> },
                { label: 'Sign Out', onClick: noop, icon: <X size={16} />, destructive: true },
              ]}
              align="right"
              triggerClassName="text-gray-600 hover:text-gray-800"
            />
          </div>
          
          <div className="md:hidden">
            <KeybabMenu 
              variant="horizontal"
              action={[
                { label: 'Dashboard', onClick: noop },
                { label: 'Projects', onClick: noop },
                { label: 'Team', onClick: noop },
                { label: 'Reports', onClick: noop },
                { label: 'Settings', onClick: noop },
              ]}
              align="right"
              triggerClassName="text-gray-600 hover:text-gray-800"
            />
          </div>
        </div>
      </div>
    </nav>
  ),
  parameters: {
    docs: {
      description: {
        story: `
**What**: Kebab menus integrated into navigation bars for user account actions and mobile navigation.

**How**: 
- **User menu**: Provides account-related actions like profile, settings, and sign out
- **Mobile menu**: Uses horizontal variant for responsive navigation on smaller screens
- **Right alignment**: Prevents menu overflow at screen edges
- **Contextual actions**: Different action sets for different purposes
- **Visual integration**: Subtle styling that complements navigation design

**Navigation integration patterns**:
- User account menus typically align right from avatar/profile area
- Mobile navigation menus provide access to main navigation items
- Use appropriate variants (horizontal for mobile, vertical for user actions)
- Include both functional and account management actions
- Separate safe actions from destructive ones (like sign out)

**So that**: Users can access account functions from any page, navigate efficiently on mobile devices, maintain consistent navigation patterns, and access contextual actions without cluttering the main navigation bar.

**Perfect for**: Application headers, user dashboards, responsive navigation, admin panels, SaaS applications.

\`\`\`tsx
// User account menu in navigation
<nav className="navbar">
  <div className="user-section">
    <img src={user.avatar} alt="Avatar" />
    <KeybabMenu 
      action={[
        { label: 'My Profile', onClick: goToProfile },
        { label: 'Settings', onClick: openSettings },
        { label: 'Sign Out', onClick: signOut, destructive: true }
      ]}
      align="right"
    />
  </div>
  
  {/* Mobile navigation menu */}
  <div className="mobile-only">
    <KeybabMenu 
      variant="horizontal"
      action={navigationItems}
      align="right"
    />
  </div>
</nav>
\`\`\`
        `,
      },
    },
  },
};

// Accessibility Demo
export const AccessibilityDemo: Story = {
  args: {
    variant: 'vertical',
    action: basicActions,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A demonstration of the kebab menu's comprehensive accessibility features and keyboard navigation support.

**How to test accessibility**:
1. **Tab Navigation**: Press Tab to focus the kebab menu trigger
2. **Activation**: Press Enter or Space to open the menu
3. **Arrow Navigation**: Use Up/Down arrow keys to navigate through menu items
4. **Selection**: Press Enter or Space to activate a menu item
5. **Escape**: Press Escape to close the menu and return focus to trigger
6. **Outside Click**: Click outside the menu to close it
7. **Screen Readers**: All menu items have proper ARIA labels and roles

**Built-in accessibility features**:
- Full keyboard navigation support
- ARIA attributes (aria-haspopup, aria-expanded, role="menu", role="menuitem")
- Focus management and visual focus indicators
- Screen reader announcements for menu state changes
- Proper color contrast for all states including disabled actions
- Semantic HTML structure for assistive technologies
- Disabled state handling with appropriate ARIA attributes

**So that**: Your application meets WCAG 2.1 guidelines, serves users with disabilities effectively, provides excellent experience for keyboard-only users, works seamlessly with screen readers, and ensures all users can access contextual actions regardless of their abilities.

\`\`\`tsx
// Accessibility is built-in, no additional props needed
<KeybabMenu 
  action={actions}
  // Component automatically handles:
  // - ARIA attributes
  // - Keyboard navigation  
  // - Focus management
  // - Screen reader support
/>
\`\`\`
        `,
      },
    },
  },
};

// Performance Story
export const PerformanceOptimized: Story = {
  render: () => {
    const generateActions = (count: number) => 
      Array.from({ length: count }, (_, i) => ({
        label: `Action ${i + 1}`,
        onClick: noop,
        icon: i % 3 === 0 ? <Star size={16} /> : i % 3 === 1 ? <Edit size={16} /> : <Copy size={16} />,
        disabled: i > 15 && i < 20, // Some disabled items
        destructive: i === count - 1, // Last item is destructive
      }));

    return (
      <div className="space-y-4 max-w-md">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold mb-2">Performance Test - 25 Actions</h4>
          <p className="text-sm text-gray-600 mb-4">
            This menu contains 25 actions with various states to test performance with large action lists.
          </p>
          <KeybabMenu 
            action={generateActions(25)}
            triggerClassName="bg-blue-500 text-white hover:bg-blue-600"
          />
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold mb-2">Optimized Rendering</h4>
          <p className="text-sm text-gray-600 mb-4">
            Even with many actions, the menu maintains smooth animations and responsive interactions.
          </p>
          <KeybabMenu 
            action={generateActions(50)}
            menuWidth="fit"
            triggerClassName="bg-green-500 text-white hover:bg-green-600"
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: Performance testing of kebab menus with large numbers of actions (25-50 items) to demonstrate optimization capabilities.

**How the optimizations work**:
- **Efficient Rendering**: Uses React.memo and useCallback for optimized re-rendering
- **Smooth Animations**: Framer Motion with optimized animation sequences
- **Event Handler Optimization**: Memoized click handlers prevent unnecessary function recreations  
- **Staggered Animations**: Controlled animation delays that don't block interactions
- **Proper Cleanup**: Event listeners are properly removed to prevent memory leaks
- **Layout Optimization**: CSS-based scrolling and positioning for smooth performance

**Performance characteristics**:
- Handles 50+ actions without performance degradation
- Maintains 60fps animations even with large lists
- Memory efficient with proper cleanup
- No layout thrashing during animations
- Responsive interactions regardless of action count

**So that**: You can confidently use kebab menus with comprehensive action sets, maintain excellent user experience even with complex interfaces, ensure smooth performance across all devices and browsers, and scale your action menus as your application grows.

**Best practices for large action sets**:
- Group related actions when possible
- Use icons to improve scanability
- Consider search/filter functionality for 20+ actions
- Implement virtualization for 100+ actions
- Use meaningful action labels for quick identification

\`\`\`tsx
// Large action sets remain performant
const manyActions = Array.from({ length: 50 }, (_, i) => ({
  label: \`Action \${i + 1}\`,
  onClick: () => handleAction(i),
  icon: <ActionIcon />,
  disabled: someCondition(i),
  destructive: i === 49
}));

<KeybabMenu action={manyActions} />
\`\`\`
        `,
      },
    },
  },
};