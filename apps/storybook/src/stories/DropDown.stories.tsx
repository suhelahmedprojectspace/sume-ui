import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { useState } from 'react';
import { DropDown } from '@sume/ui/components/Dropdown';

import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Star, 
  Heart, 
  Home, 
  Settings, 
  
  FileText,
  Image,
  Video,
  Music,
  Download,
  Upload,
  Edit,
  Trash2,
  Plus,
  Check,
  Code,
  Database,
  Server,
  Palette,
  Bug
} from 'lucide-react';

const noop = () => {};  
// Mock data for different scenarios
const basicOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Option 4', value: 'option4' },
  { label: 'Option 5', value: 'option5' },
];

const optionsWithIcons = [
  { label: 'Profile', value: 'profile', icon: <User size={16} /> },
  { label: 'Email', value: 'email', icon: <Mail size={16} /> },
  { label: 'Phone', value: 'phone', icon: <Phone size={16} /> },
  { label: 'Address', value: 'address', icon: <MapPin size={16} /> },
  { label: 'Settings', value: 'settings', icon: <Settings size={16} /> },
];

const priorityOptions = [
  { label: 'High Priority', value: 'high', icon: <Star size={16} /> },
  { label: 'Medium Priority', value: 'medium', icon: <Heart size={16} /> },
  { label: 'Low Priority', value: 'low', icon: <Home size={16} /> },
];

const statusOptions = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
  { label: 'Pending', value: 'pending' },
  { label: 'Suspended', value: 'suspended', disabled: true },
  { label: 'Archived', value: 'archived', disabled: true },
];

const fileTypeOptions = [
  { label: 'Document', value: 'document', icon: <FileText size={16} /> },
  { label: 'Image', value: 'image', icon: <Image size={16} /> },
  { label: 'Video', value: 'video', icon: <Video size={16} /> },
  { label: 'Audio', value: 'audio', icon: <Music size={16} /> },
];

const actionOptions = [
  { label: 'Download', value: 'download', icon: <Download size={16} /> },
  { label: 'Upload', value: 'upload', icon: <Upload size={16} /> },
  { label: 'Edit', value: 'edit', icon: <Edit size={16} /> },
  { label: 'Delete', value: 'delete', icon: <Trash2 size={16} />, disabled: true },
  { label: 'Add New', value: 'add', icon: <Plus size={16} /> },
];

const largeDataset = Array.from({ length: 50 }, (_, i) => ({
  label: `Item ${i + 1}`,
  value: `item${i + 1}`,
  icon: i % 5 === 0 ? <Check size={16} /> : undefined,
}));

const countriesOptions = [
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Canada', value: 'ca' },
  { label: 'Australia', value: 'au' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
  { label: 'Japan', value: 'jp' },
  { label: 'India', value: 'in' },
  { label: 'Brazil', value: 'br' },
  { label: 'Mexico', value: 'mx' },
  { label: 'Italy', value: 'it' },
  { label: 'Spain', value: 'es' },
  { label: 'Netherlands', value: 'nl' },
  { label: 'Sweden', value: 'se' },
  { label: 'Norway', value: 'no' },
];

const meta: Meta<typeof DropDown> = {
  title: 'Components/DropDown',
  component: DropDown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `


## What is it?
A highly customizable dropdown/select component that provides users with the ability to choose one or multiple options from a list.

## How to use it?
1. Import the component: \`import { DropDown } from './DropDown'\`
2. Define your options array with \`{ label, value, icon?, disabled? }\` structure
3. Handle selection changes with the \`onChange\` callback
4. Control the selected value(s) via the \`value\` prop

## Key Features:
- **Single/Multi-select**: Choose between single selection or multiple selections
- **Search functionality**: Filter options as you type for better UX
- **Icons support**: Add visual indicators to options
- **Accessibility**: Full keyboard navigation and ARIA support
- **Responsive**: Adapts to different screen sizes and containers
- **Customizable**: Multiple sizes, variants, and styling options

## So that you can:
- Create user-friendly form controls
- Handle complex selection scenarios
- Maintain consistent UI/UX across your application
- Ensure accessibility compliance
- Provide smooth, animated interactions
        `,
      },
    },
  },
  argTypes: {
    options: {
      description: 'Array of dropdown options',
      control: { type: 'object' },
    },
    value: {
      description: 'Selected value(s)',
      control: { type: 'text' },
    },
    placeholder: {
      description: 'Placeholder text when no option is selected',
      control: { type: 'text' },
    },
    label: {
      description: 'Label text displayed above the dropdown',
      control: { type: 'text' },
    },
    disabled: {
      description: 'Whether the dropdown is disabled',
      control: { type: 'boolean' },
    },
    searchable: {
      description: 'Enable search functionality',
      control: { type: 'boolean' },
    },
    multiSelect: {
      description: 'Enable multiple selection',
      control: { type: 'boolean' },
    },
    size: {
      description: 'Size of the dropdown',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      description: 'Visual variant of the dropdown',
      control: { type: 'select' },
      options: ['outline', 'filled', 'ghost'],
    },
    className: {
      description: 'Additional CSS classes',
      control: { type: 'text' },
    },
    onChange: {
      description: 'Callback fired when selection changes',
      action: 'changed',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component for controlled stories
const ControlledDropDown = (args: any) => {
  const [value, setValue] = useState(args.value);
  
  return (
    <div>
      <DropDown
        {...args}
        value={value}
         onChange={(newValue) => {
          setValue(newValue);
          // Call the onChange function passed in args (which is the mock function)
          args.onChange(newValue);
        }}
      />
    </div>
  );
};

// Basic Stories
export const Default: Story = {
  render: ControlledDropDown,
  args: {
    options: basicOptions,
    placeholder: 'Select an option...',
    onChange: () => {}
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: The most basic dropdown implementation with minimal configuration.

**How**: 
- Pass an array of options with \`label\` and \`value\` properties
- Use \`placeholder\` to show instructional text when nothing is selected
- Handle selection changes via \`onChange\` callback

**So that**: You can quickly implement a standard dropdown for simple selection scenarios without any complexity.

\`\`\`tsx
<DropDown
  options={[
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' }
  ]}
  placeholder="Select an option..."
  onChange={handleChange}
/>
\`\`\`
        `,
      },
    },
  },
};

export const WithLabel: Story = {
  render: ControlledDropDown,
  args: {
    options: basicOptions,
    label: 'Choose Option',
    placeholder: 'Select an option...',
    onChange: noop,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A dropdown with a descriptive label positioned above the input field.

**How**: 
- Add the \`label\` prop to display text above the dropdown
- The label automatically associates with the dropdown for accessibility
- Label styling follows your design system's typography

**So that**: Users clearly understand what the dropdown is for, improving form usability and accessibility compliance.

\`\`\`tsx
<DropDown
  label="Choose Option"
  options={options}
  placeholder="Select an option..."
  onChange={handleChange}
/>
\`\`\`
        `,
      },
    },
  },
};

export const WithDefaultValue: Story = {
  render: ControlledDropDown,
  args: {
    options: basicOptions,
    value: 'option2',
    placeholder: 'Select an option...',
    onChange: noop,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A dropdown that starts with a pre-selected option.

**How**: 
- Set the \`value\` prop to match one of your option values
- The dropdown will display the corresponding label
- Users can still change the selection normally

**So that**: You can pre-populate forms with default values, show current selections when editing, or guide users toward recommended choices.

\`\`\`tsx
<DropDown
  options={options}
  value="option2"  // Pre-selects "Option 2"
  onChange={handleChange}
/>
\`\`\`
        `,
      },
    },
  },
};

// Size Variants
export const SmallSize: Story = {
  render: ControlledDropDown,
  args: {
    options: basicOptions,
    size: 'sm',
    label: 'Small Dropdown',
    placeholder: 'Select...',
    onChange: noop,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A compact dropdown with smaller padding, text, and overall dimensions.

**How**: 
- Set \`size="sm"\` prop
- Automatically adjusts padding (py-1.5 px-3), text size (text-sm), and icon sizes
- Maintains proportional spacing and readability

**So that**: You can fit dropdowns in tight spaces, dense data tables, toolbar interfaces, or mobile layouts where space is premium.

\`\`\`tsx
<DropDown
  size="sm"
  options={options}
  label="Small Dropdown"
  onChange={handleChange}
/>
\`\`\`
        `,
      },
    },
  },
};

export const MediumSize: Story = {
  render: ControlledDropDown,
  args: {
    options: basicOptions,
    size: 'md',
    label: 'Medium Dropdown',
    placeholder: 'Select...',
    onChange: noop,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: The default dropdown size that balances usability with space efficiency.

**How**: 
- Default behavior (no size prop needed) or explicitly set \`size="md"\`
- Uses standard padding (py-2 px-4) and base text size
- Optimal for most form interfaces

**So that**: You get the best balance of clickability, readability, and space usage for standard form layouts and general UI components.

\`\`\`tsx
<DropDown
  size="md"  // or omit size prop for default
  options={options}
  onChange={handleChange}
/>
\`\`\`
        `,
      },
    },
  },
};

export const LargeSize: Story = {
  render: ControlledDropDown,
  args: {
    options: basicOptions,
    size: 'lg',
    label: 'Large Dropdown',
    placeholder: 'Select...',
    onChange: noop,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A prominent dropdown with increased padding and text size for better accessibility and touch interfaces.

**How**: 
- Set \`size="lg"\` prop
- Increases padding (py-2.5 px-5), text size (text-lg), and touch target area
- More generous spacing for better finger interaction

**So that**: You can accommodate users with accessibility needs, improve mobile/touch interactions, or create prominent call-to-action selections in hero sections.

\`\`\`tsx
<DropDown
  size="lg"
  options={options}
  label="Large Dropdown"
  onChange={handleChange}
/>
\`\`\`
        `,
      },
    },
  },
};



export const ExtraLargeSize: Story = {
  render: ControlledDropDown,
  args: {
    options: basicOptions,
    size:"xl",
    label: 'Large Dropdown',
    placeholder: 'Select...',
    onChange: noop,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A prominent dropdown with increased padding and text size for better accessibility and touch interfaces.

**How**: 
- Set \`size="lg"\` prop
- Increases padding (py-2.5 px-5), text size (text-lg), and touch target area
- More generous spacing for better finger interaction

**So that**: You can accommodate users with accessibility needs, improve mobile/touch interactions, or create prominent call-to-action selections in hero sections.

\`\`\`tsx
<DropDown
  size="lg"
  options={options}
  label="Large Dropdown"
  onChange={handleChange}
/>
\`\`\`
        `,
      },
    },
  },
};

// Visual Variants
export const OutlineVariant: Story = {
  render: ControlledDropDown,
  args: {
    options: basicOptions,
    variant: 'outline',
    label: 'Outline Style',
    placeholder: 'Select...',
    onChange: noop,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A dropdown with a clear border and transparent background, following outline button patterns.

**How**: 
- Set \`variant="outline"\` (or omit for default behavior)
- Creates white background with gray border that darkens on hover
- Maintains clear visual boundaries

**So that**: You can integrate with form layouts that need clear field separation, match outline button styles, or maintain a clean, professional appearance.

\`\`\`tsx
<DropDown
  variant="outline"
  options={options}
  label="Outline Style"
  onChange={handleChange}
/>
\`\`\`
        `,
      },
    },
  },
};

export const FilledVariant: Story = {
  render: ControlledDropDown,
  args: {
    options: basicOptions,
    variant: 'filled',
    label: 'Filled Style',
    placeholder: 'Select...',
    onChange: noop,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A dropdown with a subtle background fill and minimal border styling.

**How**: 
- Set \`variant="filled"\`
- Creates light gray background (bg-gray-100) with transparent border
- Background darkens slightly on hover for interaction feedback

**So that**: You can create softer, more integrated form fields that blend well with card layouts, reduce visual noise, or match filled input patterns in your design system.

\`\`\`tsx
<DropDown
  variant="filled"
  options={options}
  label="Filled Style"
  onChange={handleChange}
/>
\`\`\`
        `,
      },
    },
  },
};

export const GhostVariant: Story = {
  render: ControlledDropDown,
  args: {
    options: basicOptions,
    variant: 'ghost',
    label: 'Ghost Style',
    placeholder: 'Select...',
    onChange: noop,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A minimalist dropdown with no background or border until interaction.

**How**: 
- Set \`variant="ghost"\`
- Completely transparent background and border initially
- Shows light background on hover to indicate interactivity

**So that**: You can create subtle, unobtrusive dropdowns for navigation menus, toolbar actions, or contexts where you want minimal visual weight until user interaction.

\`\`\`tsx
<DropDown
  variant="ghost"
  options={options}
  label="Ghost Style"
  onChange={handleChange}
/>
\`\`\`
        `,
      },
    },
  },
};

// Feature Stories
export const WithIcons: Story = {
  render: ControlledDropDown,
  args: {
    options: optionsWithIcons,
    label: 'Select Contact Method',
    placeholder: 'Choose method...',
    onChange: noop,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A dropdown where each option displays an icon alongside its text label.

**How**: 
- Add an \`icon\` property to your option objects using React elements (e.g., Lucide icons)
- Icons appear before the text in both closed and open states
- Icons are automatically sized and colored consistently

**So that**: You can create more visually intuitive selections, help users quickly identify options, reduce cognitive load, and improve accessibility for users who benefit from visual cues.

\`\`\`tsx
const options = [
  { label: 'Profile', value: 'profile', icon: <User size={16} /> },
  { label: 'Email', value: 'email', icon: <Mail size={16} /> },
  { label: 'Settings', value: 'settings', icon: <Settings size={16} /> }
];

<DropDown
  options={options}
  label="Select Contact Method"
  onChange={handleChange}
/>
\`\`\`
        `,
      },
    },
  },
};

export const Searchable: Story = {
  render: ControlledDropDown,
  args: {
    options: countriesOptions,
    searchable: true,
    label: 'Select Country',
    placeholder: 'Search countries...',
    onChange: noop,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A dropdown with a search input that filters options in real-time as users type.

**How**: 
- Set \`searchable={true}\` prop
- A search input appears at the top of the dropdown when opened
- Filters options by matching text in labels (case-insensitive)
- Shows "No results found" when search yields no matches

**So that**: Users can quickly find specific options in long lists, reduce scrolling through many choices, and improve the experience when dealing with datasets like countries, users, or large product catalogs.

\`\`\`tsx
<DropDown
  searchable={true}
  options={longListOfOptions}
  label="Select Country"
  placeholder="Search countries..."
  onChange={handleChange}
/>
\`\`\`
        `,
      },
    },
  },
};

export const MultiSelect: Story = {
  render: ControlledDropDown,
  args: {
    options: fileTypeOptions,
    multiSelect: true,
    label: 'Select File Types',
    placeholder: 'Choose file types...',
    value: ['document', 'image'],
    onChange: noop,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A dropdown that allows selecting multiple options simultaneously with visual tags and checkboxes.

**How**: 
- Set \`multiSelect={true}\` prop
- Pass array for \`value\` prop instead of single value
- Selected options appear as removable tags in the dropdown button
- Each option shows a checkbox in the dropdown menu
- Click tags' X button or uncheck options to remove selections

**So that**: Users can build lists, apply multiple filters, assign multiple categories, or make any selection that requires choosing several related options from a single control.

\`\`\`tsx
<DropDown
  multiSelect={true}
  options={options}
  value={['option1', 'option3']}  // Array of selected values
  label="Select File Types"
  onChange={(values) => setSelected(values)}  // Receives array
/>
\`\`\`
        `,
      },
    },
  },
};

export const MultiSelectWithIcons: Story = {
  render: ControlledDropDown,
  args: {
    options: actionOptions,
    multiSelect: true,
    label: 'Available Actions',
    placeholder: 'Select actions...',
    value: ['download', 'upload'],
    onChange: noop,
  },
};

export const SearchableMultiSelect: Story = {
  render: ControlledDropDown,
  args: {
    options: countriesOptions,
    multiSelect: true,
    searchable: true,
    label: 'Select Countries',
    placeholder: 'Search and select countries...',
    value: ['us', 'uk', 'ca'],
    onChange: noop,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: The most powerful dropdown configuration combining multi-selection with search functionality.

**How**: 
- Set both \`multiSelect={true}\` and \`searchable={true}\`
- Users can search to filter options, then select multiple results
- Selected items appear as tags with individual remove buttons
- Search persists while making multiple selections

**So that**: You can handle complex selection scenarios like choosing multiple team members, applying several filters simultaneously, or building lists from large datasets efficiently.

\`\`\`tsx
<DropDown
  multiSelect={true}
  searchable={true}
  options={largeDataset}
  label="Select Team Members"
  placeholder="Search and select team members..."
  onChange={handleMultipleSelections}
/>
\`\`\`
        `,
      },
    },
  },
};

export const WithDisabledOptions: Story = {
  render: ControlledDropDown,
  args: {
    options: statusOptions,
    label: 'User Status',
    placeholder: 'Select status...',
    onChange: noop,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A dropdown where specific options are disabled and cannot be selected.

**How**: 
- Add \`disabled: true\` property to specific option objects
- Disabled options appear grayed out and are not clickable
- Options remain visible to show all possible choices

**So that**: You can show unavailable options (like out-of-stock items), indicate permissions restrictions, display options that don't apply to the current context, or guide users toward valid selections.

\`\`\`tsx
const options = [
  { label: 'Active', value: 'active' },
  { label: 'Suspended', value: 'suspended', disabled: true },
  { label: 'Archived', value: 'archived', disabled: true }
];

<DropDown
  options={options}
  label="User Status"
  onChange={handleChange}
/>
\`\`\`
        `,
      },
    },
  },
};

export const DisabledDropdown: Story = {
  render: ControlledDropDown,
  args: {
    options: basicOptions,
    disabled: true,
    label: 'Disabled Dropdown',
    placeholder: 'Cannot select...',
    value: 'option2',
    onChange: noop,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: An entirely disabled dropdown that cannot be opened or interacted with.

**How**: 
- Set \`disabled={true}\` prop on the dropdown component
- Entire component becomes non-interactive with reduced opacity
- Preserves current value but prevents any changes
- Cursor changes to "not-allowed" on hover

**So that**: You can disable controls during form submission, show read-only states, prevent interaction based on user permissions, or indicate when certain selections are temporarily unavailable.

\`\`\`tsx
<DropDown
  disabled={isLoading || !hasPermission}
  options={options}
  label="Disabled Dropdown"
  value={currentValue}
  onChange={handleChange}
/>
\`\`\`
        `,
      },
    },
  },
};

// Performance & Edge Cases with detailed descriptions
export const LargeDataset: Story = {
  render: ControlledDropDown,
  args: {
    options: largeDataset,
    searchable: true,
    label: 'Large Dataset (50 items)',
    placeholder: 'Search through items...',
    onChange: noop,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A performance test dropdown with 50+ options demonstrating how the component handles large datasets.

**How**: 
- Component uses React.useMemo for efficient option filtering
- Virtual scrolling is handled by max-height with overflow
- Search functionality becomes essential for usability
- Smooth animations maintained even with many options

**Performance optimizations built-in**:
- Memoized filtered options to prevent unnecessary re-calculations
- Efficient event handlers with useCallback
- Minimal re-renders during search operations
- Optimized DOM structure for large lists

**So that**: You can confidently use the dropdown with large datasets like user lists, product catalogs, or geographical data without performance degradation or poor user experience.

**Best practices for large datasets**:
- Always enable search (\`searchable={true}\`)
- Consider server-side filtering for 1000+ items
- Use meaningful option labels for better search results
- Consider pagination for extremely large datasets

\`\`\`tsx
// Efficient handling of large datasets
<DropDown
  options={thousandsOfOptions}
  searchable={true}
  label="Search Large Dataset"
  placeholder="Type to filter..."
  onChange={handleSelection}
/>
\`\`\`
        `,
      },
    },
  },
};

export const EmptyOptions: Story = {
  render: ControlledDropDown,
  args: {
    options: [],
    label: 'Empty Options',
    placeholder: 'No options available...',
    onChange: noop,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A dropdown with no available options, demonstrating graceful handling of empty states.

**How**: 
- Pass an empty array \`[]\` for the options prop
- Component displays "No results found" message when opened
- Dropdown remains interactive but shows appropriate empty state
- Placeholder text should indicate the empty condition

**So that**: You can handle dynamic data loading scenarios, show appropriate messages during API failures, indicate when filters return no results, or display conditional dropdowns that may not always have options.

**Common use cases**:
- Dependent dropdowns (e.g., cities based on selected country)
- Dynamic filtering that yields no results
- Loading states before data arrives
- Permission-based option visibility

\`\`\`tsx
<DropDown
  options={filteredResults.length ? filteredResults : []}
  label="Dynamic Options"
  placeholder={isLoading ? "Loading..." : "No options available"}
  onChange={handleChange}
/>
\`\`\`
        `,
      },
    },
  },
};

export const SingleOption: Story = {
  render: ControlledDropDown,
  args: {
    options: [{ label: 'Only Option', value: 'only' }],
    label: 'Single Option',
    placeholder: 'Select...',
    onChange: noop,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A dropdown with only one available option, useful for consistent UI patterns when option count varies.

**How**: 
- Pass array with single option object
- Dropdown functions normally but only shows one choice
- Maintains consistent interface regardless of option count
- User can still open dropdown and see the single option

**So that**: You can maintain consistent form layouts when option availability varies, handle edge cases in dependent dropdowns, show users what the only available choice is, or maintain UI consistency during data filtering.

**When to use**:
- Dependent selections that sometimes yield one result
- User permissions that limit choices to one option
- Filtered results that narrow down to single option
- Consistent form interfaces across varying data states

\`\`\`tsx
<DropDown
  options={availableOptions} // Might be 1 or many options
  label="Available Choices"
  placeholder="Select available option..."
  onChange={handleChange}
/>
\`\`\`
        `,
      },
    },
  },
};

// Complex form example with enhanced descriptions
export const CompactForm: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <ControlledDropDown
        options={basicOptions}
        size="sm"
        variant="filled"
        label="Category"
        placeholder="Select category..."
        onChange={noop}
      />
      <ControlledDropDown
        options={priorityOptions}
        size="sm"
        variant="filled"
        label="Priority"
        placeholder="Select priority..."
        onChange={noop}
      />
      <ControlledDropDown
        options={statusOptions}
        size="sm"
        variant="filled"
        label="Status"
        placeholder="Select status..."
        onChange={noop}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
**What**: A demonstration of multiple compact dropdowns in a tight form layout, showing consistent styling and spacing.

**How**: 
- Use \`size="sm"\` for reduced vertical space usage
- Apply \`variant="filled"\` for subtle, cohesive appearance
- Stack dropdowns with consistent spacing (\`space-y-4\`)
- Maintain fixed width container (\`w-80\`) for alignment

**Design considerations**:
- Small size maintains readability while saving space
- Filled variant reduces visual noise in dense forms
- Consistent labeling and placeholder patterns
- Proper spacing prevents cramped appearance

**So that**: You can create efficient, compact forms for data entry, fit multiple selections in limited space, maintain visual harmony across form elements, and provide good UX in dense interfaces like dashboards or modals.

**Perfect for**:
- Modal forms with limited space
- Dashboard filter panels
- Quick data entry interfaces
- Mobile-responsive form layouts

\`\`\`tsx
// Consistent compact form pattern
const FormSection = () => (
  <div className="space-y-4">
    <DropDown size="sm" variant="filled" label="Category" ... />
    <DropDown size="sm" variant="filled" label="Priority" ... />
    <DropDown size="sm" variant="filled" label="Status" ... />
  </div>
);
\`\`\`
        `,
      },
    },
  },
};

// Accessibility Story
export const AccessibilityDemo: Story = {
  render: ControlledDropDown,
  args: {
    options: optionsWithIcons,
    label: 'Accessible Dropdown',
    placeholder: 'Use keyboard to navigate...',
    searchable: true,
    onChange: noop,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A demonstration of the dropdown's comprehensive accessibility features and keyboard navigation support.

**How to test accessibility**:
1. **Tab Navigation**: Press Tab to focus the dropdown, Tab again to move away
2. **Activation**: Press Enter or Space to open the dropdown
3. **Arrow Keys**: Use Up/Down arrows to navigate through options
4. **Selection**: Press Enter or Space to select an option
5. **Search**: When searchable, type to filter options immediately
6. **Escape**: Press Escape to close dropdown and return focus
7. **Screen Readers**: All options have proper ARIA labels and roles

**Built-in accessibility features**:
- Full keyboard navigation support
- ARIA attributes (aria-haspopup, aria-expanded, role="listbox")
- Focus management and visual indicators
- Screen reader announcements
- Proper color contrast and focus indicators
- Label association for screen readers

**So that**: Your application meets WCAG guidelines, serves users with disabilities effectively, and provides an excellent experience for keyboard-only users, screen reader users, and users with motor impairments.

\`\`\`tsx
// The component automatically handles accessibility
<DropDown
  label="Accessible Dropdown"  // Proper labeling
  options={options}
  searchable={true}  // Enhanced with search
  onChange={handleChange}
  // No additional props needed for accessibility
/>
\`\`\`
        `,
      },
    },
  },
};

// Complex Scenarios
export const PrioritySelector: Story = {
  render: ControlledDropDown,
  args: {
    options: priorityOptions,
    label: 'Task Priority',
    placeholder: 'Select priority level...',
    size: 'lg',
    variant: 'filled',
    onChange: noop,
  },
};

export const MultiSelectWithSearch: Story = {
  render: ControlledDropDown,
  args: {
    options: optionsWithIcons,
    multiSelect: true,
    searchable: true,
    label: 'Contact Preferences',
    placeholder: 'Select preferred methods...',
    size: 'md',
    variant: 'outline',
    onChange: noop,
  },
};

// Real-world Examples
export const UserRoleSelector: Story = {
  render: ControlledDropDown,
  args: {
    options: [
      { label: 'Administrator', value: 'admin', icon: <Settings size={16} /> },
      { label: 'Editor', value: 'editor', icon: <Edit size={16} /> },
      { label: 'Viewer', value: 'viewer', icon: <User size={16} /> },
      { label: 'Guest', value: 'guest', icon: <User size={16} />, disabled: true },
    ],
    label: 'User Role',
    placeholder: 'Assign role...',
    value: 'editor',
    onChange: noop,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A practical user role assignment dropdown for admin interfaces or user management systems.

**How**: 
- Define roles with descriptive labels, unique values, and relevant icons
- Pre-select current user's role using \`value\` prop
- Disable restricted roles (like Guest) that can't be manually assigned
- Use meaningful icons to quickly distinguish permission levels

**So that**: Administrators can efficiently manage user permissions, users understand their current access level, and the interface prevents invalid role assignments while maintaining clarity about available options.

**Real-world usage**: User management dashboards, team member invitation flows, permission editing interfaces.

\`\`\`tsx
const roleOptions = [
  { label: 'Administrator', value: 'admin', icon: <Settings size={16} /> },
  { label: 'Editor', value: 'editor', icon: <Edit size={16} /> },
  { label: 'Viewer', value: 'viewer', icon: <User size={16} /> }
];

<DropDown
  options={roleOptions}
  value={user.role}
  label="User Role"
  onChange={handleRoleChange}
/>
\`\`\`
        `,
      },
    },
  },
};

export const TagSelector: Story = {
  render: ControlledDropDown,
  args: {
    options: [
      { label: 'Frontend', value: 'frontend', icon: <Code size={16} /> },
      { label: 'Backend', value: 'backend', icon: <Database size={16} /> },
      { label: 'DevOps', value: 'devops', icon: <Server size={16} /> },
      { label: 'Design', value: 'design', icon: <Palette size={16} /> },
      { label: 'Testing', value: 'testing', icon: <Bug size={16} /> },
      { label: 'Documentation', value: 'docs', icon: <FileText size={16} /> },
    ],
    multiSelect: true,
    searchable: true,
    label: 'Project Tags',
    placeholder: 'Add tags...',
    value: ['frontend', 'design'],
    onChange: noop,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A tag management system for categorizing projects, issues, or content with multiple searchable labels.

**How**: 
- Combine \`multiSelect\` and \`searchable\` for maximum flexibility
- Use domain-specific icons to represent different tag categories
- Allow users to quickly find and apply multiple relevant tags
- Selected tags appear as removable chips for easy management

**So that**: Users can efficiently categorize and organize content, apply multiple relevant labels simultaneously, find and filter tagged items later, and maintain consistent taxonomy across projects.

**Real-world usage**: Project management tools, issue trackers, content management systems, blog post categorization.

\`\`\`tsx
const projectTags = [
  { label: 'Frontend', value: 'frontend', icon: <Code size={16} /> },
  { label: 'Backend', value: 'backend', icon: <Database size={16} /> },
  // ... more tags
];

<DropDown
  multiSelect={true}
  searchable={true}
  options={projectTags}
  value={project.tags}
  label="Project Tags"
  placeholder="Search and add tags..."
  onChange={updateProjectTags}
/>
\`\`\`
        `,
      },
    },
  },
};

// Advanced Implementation Examples
export const CustomStyling: Story = {
  render: ControlledDropDown,
  args: {
    options: priorityOptions,
    label: 'Custom Styled Dropdown',
    placeholder: 'Select...',
    className: 'border-2 border-blue-500 rounded-lg',
    onChange: noop,
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A dropdown with custom CSS classes applied to demonstrate styling flexibility and integration with design systems.

**How**: 
- Use the \`className\` prop to apply additional Tailwind classes
- Custom styles merge with component's default styling
- Override borders, backgrounds, shadows, or any visual properties
- Maintain component functionality while adapting appearance

**Styling capabilities**:
- Border customization (width, color, style)
- Background and color theming
- Shadow and elevation effects
- Border radius and shape modifications
- Hover and focus state customizations

**So that**: You can integrate the dropdown seamlessly with your brand colors, match existing design systems, create themed variations for different contexts, or add special visual treatments for emphasis.

**Integration examples**:
\`\`\`tsx
// Brand color integration
<DropDown 
  className="border-2 border-brand-500 focus:ring-brand-300"
  options={options}
/>

// Card-style dropdown
<DropDown 
  className="shadow-lg rounded-xl border-0 bg-white"
  options={options}
/>

// Error state styling
<DropDown 
  className="border-red-500 bg-red-50"
  options={options}
/>
\`\`\`
        `,
      },
    },
  },
};

// Advanced combination examples
export const FilteringInterface: Story = {
  render: () => {
    const [category, setCategory] = useState<string>('');
    const [priority, setPriority] = useState<string[]>([]);
    const [status, setStatus] = useState<string>('');

    return (
      <div className="space-y-6 w-96 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800">Advanced Filter Panel</h3>
        
        <DropDown
          options={basicOptions}
          value={category}
          onChange={(val) => setCategory(val as string)}
          label="Category"
          placeholder="All categories..."
          variant="outline"
          size="md"
        />
        
        <DropDown
          options={priorityOptions}
          value={priority}
          onChange={(val) => setPriority(val as string[])}
          multiSelect={true}
          searchable={true}
          label="Priority Levels"
          placeholder="Select priorities..."
          variant="outline"
          size="md"
        />
        
        <DropDown
          options={statusOptions}
          value={status}
          onChange={(val) => setStatus(val as string)}
          label="Status"
          placeholder="Any status..."
          variant="outline"
          size="md"
        />
        
        <div className="pt-4 text-sm text-gray-600">
          <p><strong>Selected filters:</strong></p>
          <p>Category: {category || 'All'}</p>
          <p>Priority: {priority.length ? priority.join(', ') : 'All'}</p>
          <p>Status: {status || 'All'}</p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
**What**: A comprehensive filtering interface combining multiple dropdowns with different configurations to create a powerful search/filter system.

**How it works**:
- **Category**: Single select dropdown for main categorization
- **Priority**: Multi-select with search for flexible priority filtering
- **Status**: Single select for current state filtering
- **State management**: Each dropdown maintains independent state
- **Real-time feedback**: Shows current filter selections below

**Implementation pattern**:
\`\`\`tsx
const FilterPanel = () => {
  const [category, setCategory] = useState('');
  const [priorities, setPriorities] = useState([]);
  const [status, setStatus] = useState('');

  const applyFilters = useCallback(() => {
    // Combine all filter values to filter your data
    const filteredData = originalData.filter(item => {
      return (!category || item.category === category) &&
             (!priorities.length || priorities.includes(item.priority)) &&
             (!status || item.status === status);
    });
    setFilteredResults(filteredData);
  }, [category, priorities, status]);

  return (
    <div className="filter-panel">
      <DropDown 
        options={categories} 
        value={category}
        onChange={setCategory}
        label="Category"
      />
      <DropDown 
        options={priorityLevels} 
        value={priorities}
        onChange={setPriorities}
        multiSelect={true}
        searchable={true}
        label="Priorities"
      />
      {/* More filters... */}
    </div>
  );
};
\`\`\`

**So that**: You can build sophisticated filtering interfaces for data tables, search results, product catalogs, or any content that needs multiple filtering criteria with an intuitive user experience.
        `,
      },
    },
  },
};
