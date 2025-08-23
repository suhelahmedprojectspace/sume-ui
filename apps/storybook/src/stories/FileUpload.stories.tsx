import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { FileUpload } from '@sume/ui/components/FileUpload';
import { File, Upload, Shield, Zap, Settings } from 'lucide-react';

const meta: Meta<typeof FileUpload> = {
  title: 'Components/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `


**Advanced file upload with drag & drop, preview, validation, and storage management.**

FileUpload provides a **complete file handling experience** with real-time feedback, validation, and persistent storage.

---

## 🎯 When to Use FileUpload
- **Profile/avatar uploads** - User profile pictures  
- **Document submissions** - Forms requiring file attachments  
- **Media galleries** - Photo/video upload interfaces  
- **Bulk file processing** - Multiple file uploads at once  
- **Content management** - Admin panels, CMS systems  

## ✨ Key Features
| Feature | Description | Benefit |
|---------|-------------|---------|
| **Drag & Drop** | Intuitive file dropping | Better UX than file dialogs |
| **Multi-file** | Upload multiple files at once | Efficient bulk operations |
| **Live Preview** | Image thumbnails + file icons | Visual confirmation |
| **Validation** | Size, type, count limits | Prevents upload errors |
| **Progress** | Visual upload feedback | User confidence |
| **Persistence** | LocalStorage backup | Survives page refreshes |

## 📊 File Limits & Validation
- **Max file size**: 5MB per file  
- **Max total size**: 50MB total storage  
- **Max file count**: 10 files maximum  
- **Supported types**: Images, PDFs, Documents, Archives  

## 🔧 Technical Features
- **Memory management**: Auto-cleanup of object URLs  
- **Error handling**: Graceful validation failures  
- **Accessibility**: Full keyboard + screen reader support  
- **Performance**: Lazy loading, efficient rendering  
- **Responsive**: Works on mobile, tablet, desktop  

## ♿ Accessibility Features
- Full keyboard navigation support  
- Screen reader announcements  
- Clear error messages and instructions  
- ARIA labels and semantic HTML  
- Focus management and visual indicators  

---

## 🎨 Visual States
The component handles multiple visual states automatically:
- **Empty state** with helpful instructions  
- **Dragging state** with visual feedback  
- **Loading state** during file processing  
- **Error state** with clear problem descriptions  
- **Success state** with file previews and management  
        `
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// =================== BASIC DEMO ===================

export const Default: Story = {
  name: '📁 Basic FileUpload',
  render: () => <FileUpload />,
  parameters: {
    docs: {
      description: {
        story: `
### Basic File Upload

The default FileUpload component provides a complete file handling experience out of the box.

**Features shown:**
- Drag & drop file area  
- Click to browse files  
- Multi-file support  
- File previews (images show thumbnails, others show icons)  
- Individual file removal  
- Storage progress indicator  

**Try this:**
1. **Drag files** from your desktop onto the upload area  
2. **Click the area** to open file browser  
3. **Upload images** to see thumbnail previews  
4. **Upload documents** to see file type icons  
5. **Remove files** with the X button  

### Supported File Types
- **Images**: JPG, PNG, GIF, WebP, SVG  
- **Documents**: PDF, DOC, DOCX, XLS, XLSX  
- **Archives**: ZIP, RAR, 7Z  
- **Text**: TXT, CSV, JSON  

### Implementation
\`\`\`tsx
import { FileUpload } from '@astra/ui/components/FileUpload';

export function MyUploadForm() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <FileUpload />
    </div>
  );
}
\`\`\`
        `
      }
    }
  }
};

// =================== USE CASES ===================

export const UseCases: Story = {
  name: '🎯 Real-World Use Cases',
  render: () => (
    <div className="space-y-12 max-w-6xl">
      {/* Profile Picture Upload */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">👤 Profile Picture Upload</h2>
        <p className="text-gray-600">
          Perfect for user profile pictures, avatars, or any single image upload scenario.
        </p>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-3xl">👤</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Update Profile Picture</h3>
              <p className="text-sm text-gray-600 mb-4">
                Upload a new profile picture. Images will be automatically cropped to fit.
              </p>
              <FileUpload />
            </div>
          </div>
        </div>
      </div>

      {/* Document Submission */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">📄 Document Submission</h2>
        <p className="text-gray-600">
          Ideal for forms requiring document attachments, applications, or legal submissions.
        </p>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="font-semibold mb-2">Submit Required Documents</h3>
          <p className="text-sm text-gray-600 mb-4">
            Please upload all required documents. Accepted formats: PDF, DOC, DOCX.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <File className="w-4 h-4 text-blue-500" />
                <span className="font-medium text-sm">ID Document</span>
                <span className="text-xs text-red-500">Required</span>
              </div>
              <p className="text-xs text-gray-500">Driver's license, passport, or state ID</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <File className="w-4 h-4 text-green-500" />
                <span className="font-medium text-sm">Proof of Address</span>
                <span className="text-xs text-red-500">Required</span>
              </div>
              <p className="text-xs text-gray-500">Utility bill or bank statement</p>
            </div>
          </div>
          <FileUpload />
        </div>
      </div>

      {/* Media Gallery */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">🖼️ Media Gallery Upload</h2>
        <p className="text-gray-600">
          Perfect for photo galleries, portfolio uploads, or any multi-image scenario.
        </p>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="font-semibold mb-2">Create Photo Album</h3>
          <p className="text-sm text-gray-600 mb-4">
            Upload multiple photos to create your album. Images will be automatically optimized.
          </p>
          <FileUpload />
          <div className="mt-4 text-xs text-gray-500">
            💡 Tip: You can drag multiple images at once or select them from the file browser.
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Real-World Implementation Examples

**👤 Profile Picture Upload**
- **When**: User settings, account setup, social profiles  
- **Why**: Visual identity, personalization, user engagement  
- **Best practice**: Show current avatar + upload area side by side  

**📄 Document Submission**
- **When**: Forms, applications, verification processes  
- **Why**: Official documentation, compliance, legal requirements  
- **Best practice**: List required documents with clear descriptions  

**🖼️ Media Gallery**
- **When**: Portfolio sites, social media, content management  
- **Why**: Visual storytelling, content creation, marketing  
- **Best practice**: Show thumbnails immediately, batch upload support  

### Implementation Patterns

**Form Integration**
\`\`\`tsx
<form onSubmit={handleSubmit}>
  <div className="space-y-4">
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
    
    <div>
      <label>Attach Documents</label>
      <FileUpload />
    </div>
    
    <button type="submit">Submit Application</button>
  </div>
</form>
\`\`\`

**Modal Integration**
\`\`\`tsx
<Dialog open={showUpload} onClose={() => setShowUpload(false)}>
  <div className="p-6">
    <h2>Upload Files</h2>
    <FileUpload />
    <div className="flex gap-2 mt-4">
      <button onClick={handleSave}>Save</button>
      <button onClick={() => setShowUpload(false)}>Cancel</button>
    </div>
  </div>
</Dialog>
\`\`\`

💡 **Pro Tip**: Always provide context about what files users should upload and why they're needed.
        `
      }
    }
  }
};

// =================== FEATURES DEMO ===================

export const FeaturesDemo: Story = {
  name: '✨ Feature Showcase',
  render: () => (
    <div className="space-y-12 max-w-4xl">
      {/* Feature Overview */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">FileUpload Features</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore all the built-in features that make file uploading intuitive and robust.
        </p>
      </div>

      {/* Main Upload Component */}
      <FileUpload />

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Upload className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold mb-2">Drag & Drop</h3>
          <p className="text-sm text-gray-600 mb-3">
            Intuitive drag and drop interface with visual feedback and hover states.
          </p>
          <ul className="text-xs text-gray-500 space-y-1">
            <li>• Visual drag feedback</li>
            <li>• Multiple file drop support</li>
            <li>• Keyboard accessible</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold mb-2">Smart Validation</h3>
          <p className="text-sm text-gray-600 mb-3">
            Comprehensive file validation with clear error messages and prevention.
          </p>
          <ul className="text-xs text-gray-500 space-y-1">
            <li>• File size limits (5MB per file)</li>
            <li>• File type restrictions</li>
            <li>• Total storage limits (50MB)</li>
            <li>• Maximum file count (10 files)</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-semibold mb-2">Live Previews</h3>
          <p className="text-sm text-gray-600 mb-3">
            Instant visual previews for images and appropriate icons for documents.
          </p>
          <ul className="text-xs text-gray-500 space-y-1">
            <li>• Image thumbnails</li>
            <li>• File type icons</li>
            <li>• Hover zoom effects</li>
            <li>• Loading animations</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <Settings className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="font-semibold mb-2">File Management</h3>
          <p className="text-sm text-gray-600 mb-3">
            Complete file management with individual removal and bulk operations.
          </p>
          <ul className="text-xs text-gray-500 space-y-1">
            <li>• Individual file removal</li>
            <li>• Clear all files option</li>
            <li>• File size display</li>
            <li>• Storage progress bar</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <File className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="font-semibold mb-2">Persistence</h3>
          <p className="text-sm text-gray-600 mb-3">
            Files are saved to localStorage and survive page refreshes.
          </p>
          <ul className="text-xs text-gray-500 space-y-1">
            <li>• Auto-save to localStorage</li>
            <li>• Survives page refresh</li>
            <li>• Memory management</li>
            <li>• Error recovery</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-indigo-600 font-bold">♿</span>
          </div>
          <h3 className="font-semibold mb-2">Accessibility</h3>
          <p className="text-sm text-gray-600 mb-3">
            Full keyboard navigation and screen reader support built-in.
          </p>
          <ul className="text-xs text-gray-500 space-y-1">
            <li>• Keyboard navigation</li>
            <li>• Screen reader support</li>
            <li>• ARIA labels</li>
            <li>• Focus indicators</li>
          </ul>
        </div>
      </div>

      {/* Try It Instructions */}
      <div className="bg-blue-50 p-6 rounded-xl">
        <h3 className="font-semibold text-blue-900 mb-3">🧪 Try These Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
          <div>
            <h4 className="font-medium mb-2">Drag & Drop Testing:</h4>
            <ul className="space-y-1">
              <li>• Drag files from your desktop</li>
              <li>• Try dragging multiple files at once</li>
              <li>• Notice the visual feedback when hovering</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Validation Testing:</h4>
            <ul className="space-y-1">
              <li>• Try uploading a file larger than 5MB</li>
              <li>• Upload more than 10 files</li>
              <li>• Try unsupported file types</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Preview Testing:</h4>
            <ul className="space-y-1">
              <li>• Upload images to see thumbnails</li>
              <li>• Upload PDFs to see document icons</li>
              <li>• Hover over images for zoom effect</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Management Testing:</h4>
            <ul className="space-y-1">
              <li>• Remove individual files with X button</li>
              <li>• Use "Clear All" to remove everything</li>
              <li>• Watch the storage progress bar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Complete Feature Breakdown

**🎯 Drag & Drop Interface**
- **Visual feedback** when files are dragged over the area  
- **Hover states** that clearly indicate drop zones  
- **Multi-file support** for bulk operations  
- **Keyboard accessible** with Enter/Space activation  

**🛡️ Smart Validation System**
- **File size limits**: 5MB per individual file  
- **Total storage limits**: 50MB across all files  
- **File count limits**: Maximum 10 files  
- **Type restrictions**: Images, documents, archives only  
- **Graceful error handling** with clear user messages  

**⚡ Live Preview System**
- **Image thumbnails**: Automatic preview generation  
- **File type icons**: Visual identification for non-images  
- **Loading states**: Progress indicators during upload  
- **Hover effects**: Zoom and interaction feedback  

**🔧 File Management Tools**
- **Individual removal**: X button on each file  
- **Bulk operations**: Clear all files at once  
- **Storage tracking**: Visual progress bar  
- **File information**: Name, size, type display  

**💾 Persistence & Performance**
- **localStorage integration**: Files survive page refresh  
- **Memory management**: Automatic cleanup of object URLs  
- **Error recovery**: Graceful handling of storage failures  
- **Lazy loading**: Efficient rendering of large file lists  

### Technical Implementation

**State Management**
\`\`\`tsx
const [files, setFiles] = useState<FileData[]>([]);
const [isDragging, setIsDragging] = useState(false);
const [error, setError] = useState<string | null>(null);
const [isLoading, setIsLoading] = useState(false);
\`\`\`

**File Validation Logic**
\`\`\`tsx
// Size validation
if (file.size > MAX_FILE_SIZE) {
  errors.push(\`"\${file.name}" exceeds 5MB limit\`);
  return;
}

// Total storage validation
if (totalSize + file.size > MAX_TOTAL_SIZE) {
  errors.push(\`Total storage limit (50MB) exceeded\`);
  return;
}

// File count validation
if (files.length >= MAX_FILE_COUNT) {
  errors.push(\`Maximum of \${MAX_FILE_COUNT} files allowed\`);
  return;
}
\`\`\`

💡 **Performance Tip**: The component automatically manages memory by revoking object URLs when files are removed or component unmounts.
        `
      }
    }
  }
};

// =================== ACCESSIBILITY DEMO ===================

export const AccessibilityDemo: Story = {
  name: '♿ Accessibility Features',
  render: () => (
    <div className="space-y-8 max-w-4xl">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Accessibility Features</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          FileUpload is built with accessibility as a first-class feature, ensuring everyone can use it effectively.
        </p>
      </div>

      {/* Main Component */}
      <FileUpload />

      {/* Accessibility Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-xl font-semibold text-green-800 mb-4">✅ Keyboard Navigation</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Try these keyboard shortcuts:</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Tab</kbd>
                  <span>Navigate to upload area</span>
                </li>
                <li className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd>
                  <span>Open file browser</span>
                </li>
                <li className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Space</kbd>
                  <span>Activate upload area</span>
                </li>
                <li className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Escape</kbd>
                  <span>Cancel drag operation</span>
                </li>
              </ul>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                💡 <strong>Test it:</strong> Tab to the upload area and press Enter to open the file browser!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">🔊 Screen Reader Support</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Screen reader features:</h4>
              <ul className="text-sm space-y-2">
                <li>• <strong>ARIA labels</strong> for all interactive elements</li>
                <li>• <strong>Role attributes</strong> for semantic structure</li>
                <li>• <strong>Live regions</strong> for status announcements</li>
                <li>• <strong>Descriptive text</strong> for upload instructions</li>
                <li>• <strong>Error announcements</strong> when validation fails</li>
              </ul>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                💡 <strong>Test it:</strong> Use a screen reader like NVDA, JAWS, or VoiceOver to experience the announcements!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-xl font-semibold text-purple-800 mb-4">🎯 Focus Management</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Focus indicators:</h4>
              <ul className="text-sm space-y-2">
                <li>• <strong>Clear focus rings</strong> on all interactive elements</li>
                <li>• <strong>Skip links</strong> for efficient navigation</li>
                <li>• <strong>Focus trapping</strong> in error states</li>
                <li>• <strong>Logical tab order</strong> through all controls</li>
              </ul>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <p className="text-sm text-purple-800">
                💡 <strong>Test it:</strong> Tab through the interface and notice the clear focus indicators!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-orange-600 font-bold">📱</span>
          </div>
          <h3 className="text-xl font-semibold text-orange-800 mb-4">📱 Mobile Accessibility</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Touch accessibility:</h4>
              <ul className="text-sm space-y-2">
                <li>• <strong>44px minimum</strong> touch target size</li>
                <li>• <strong>Adequate spacing</strong> between interactive elements</li>
                <li>• <strong>Zoom support</strong> up to 200% without horizontal scroll</li>
                <li>• <strong>Voice control</strong> compatibility</li>
              </ul>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <p className="text-sm text-orange-800">
                💡 <strong>Test it:</strong> Try using voice control or switch navigation on mobile devices!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Code */}
      <div className="bg-gray-50 p-6 rounded-xl">
        <h3 className="font-semibold mb-4">🛠️ Accessibility Implementation</h3>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm">
{`// ARIA labels and roles
<div
  role="region"
  aria-label="File upload area"
  aria-describedby="upload-instructions"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      fileInputRef.current?.click();
    }
  }}
>
  <p id="upload-instructions">
    Supports images, documents, archives. Max 5MB per file
  </p>
  
  <input
    type="file"
    aria-hidden="true"
    multiple
    accept="image/*, .pdf, .doc, .docx"
  />
</div>

// Error announcements
<div role="alert" className="error-message">
  <span>{errorMessage}</span>
</div>

// Remove button with descriptive label
<button aria-label={\`Remove \${file.name}\`}>
  <X size={16} />
</button>`}
          </pre>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Comprehensive Accessibility Guide

**♿ Why Accessibility Matters**
- **Legal compliance** with WCAG 2.1 AA standards  
- **Inclusive design** that works for everyone  
- **Better UX** for all users, not just those with disabilities  
- **SEO benefits** from semantic HTML structure  

**🎯 Keyboard Navigation**
The FileUpload component supports full keyboard operation:
- **Tab navigation** to reach the upload area  
- **Enter/Space** to activate file browser  
- **Arrow keys** to navigate between uploaded files  
- **Delete key** to remove focused files  

**🔊 Screen Reader Support**
Comprehensive screen reader compatibility:
- **Role attributes** identify the purpose of each element  
- **ARIA labels** provide descriptive names  
- **Live regions** announce status changes  
- **Structured content** with proper heading hierarchy  

**📱 Mobile Accessibility**
Touch-friendly design principles:
- **Large touch targets** (minimum 44px)  
- **Generous spacing** between interactive elements  
- **Zoom compatibility** up to 200% without horizontal scroll  
- **Voice control** support for hands-free operation  

### Testing Your Implementation

**Manual Testing**
1. **Keyboard only**: Navigate using only Tab, Enter, Space, and arrow keys  
2. **Screen reader**: Test with NVDA (free), JAWS, or VoiceOver  
3. **Mobile**: Try voice control and switch navigation  
4. **Zoom**: Test at 200% browser zoom level  

**Automated Testing**
\`\`\`bash
# Install axe-core for automated accessibility testing
npm install @axe-core/react

# Run accessibility tests
npx jest --testNamePattern="accessibility"
\`\`\`

**Implementation Checklist**
- [ ] All interactive elements are focusable  
- [ ] Focus indicators are clearly visible  
- [ ] ARIA labels describe element purposes  
- [ ] Error messages are announced to screen readers  
- [ ] Keyboard shortcuts work as expected  
- [ ] Touch targets meet minimum size requirements  

💡 **Pro Tip**: Use browser dev tools' accessibility tab to audit your implementation and catch common issues early.
        `
      }
    }
  }
};

// =================== RESPONSIVE DEMO ===================

export const ResponsiveDemo: Story = {
  name: '📱 Responsive Design',
  render: () => (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Responsive File Upload</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          FileUpload adapts seamlessly from mobile phones to wide desktop screens. 
          Resize your browser to see the responsive behavior in action!
        </p>
      </div>

      {/* Mobile Preview */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">📱 Mobile Experience (320px - 640px)</h2>
        <div className="max-w-sm mx-auto border-2 border-gray-300 rounded-xl overflow-hidden">
          <div className="bg-gray-100 p-2 flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-xs text-gray-600 ml-2">Mobile View</span>
          </div>
          <div className="p-4">
            <FileUpload />
          </div>
        </div>
        <div className="max-w-2xl mx-auto bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">📱 Mobile Optimizations:</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• **Single column layout** for easy thumb navigation</li>
            <li>• **Large touch targets** (44px minimum) for accessibility</li>
            <li>• **Simplified interface** with essential features only</li>
            <li>• **Larger text** for readability on small screens</li>
            <li>• **Stack layout** for file previews</li>
          </ul>
        </div>
      </div>

      {/* Tablet Preview */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">📱 Tablet Experience (641px - 1024px)</h2>
        <div className="max-w-2xl mx-auto">
          <FileUpload />
        </div>
        <div className="max-w-2xl mx-auto bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-900 mb-2">📱 Tablet Features:</h3>
          <ul className="text-sm text-green-800 space-y-1">
            <li>• **Two-column grid** for file previews</li>
            <li>• **Balanced spacing** for portrait/landscape modes</li>
            <li>• **Touch-optimized** but information-rich</li>
            <li>• **Hover effects** for better interactivity</li>
            <li>• **Adequate margins** for comfortable interaction</li>
          </ul>
        </div>
      </div>

      {/* Desktop Preview */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">💻 Desktop Experience (≥1025px)</h2>
        <div className="max-w-4xl mx-auto">
          <FileUpload />
        </div>
        <div className="max-w-4xl mx-auto bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold text-purple-900 mb-2">💻 Desktop Features:</h3>
          <ul className="text-sm text-purple-800 space-y-1">
            <li>• **Three-column grid** for efficient space usage</li>
            <li>• **Rich hover effects** and micro-interactions</li>
            <li>• **Detailed file information** visible at all times</li>
            <li>• **Keyboard shortcuts** for power users</li>
            <li>• **Drag & drop optimization** for desktop workflows</li>
          </ul>
        </div>
      </div>

      {/* Responsive Grid Demo */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">📐 Responsive Grid Behavior</h2>
        <p className="text-gray-600 max-w-2xl">
          File previews automatically adjust their grid layout based on available screen width:
        </p>
        <div className="bg-gray-50 p-6 rounded-xl">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 bg-red-500 rounded"></div>
              <span className="font-medium">Mobile (≤640px):</span>
              <span className="text-sm text-gray-600">1 column - grid-cols-1</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 bg-yellow-500 rounded"></div>
              <span className="font-medium">Tablet (≥640px):</span>
              <span className="text-sm text-gray-600">2 columns - sm:grid-cols-2</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 bg-green-500 rounded"></div>
              <span className="font-medium">Desktop (≥768px):</span>
              <span className="text-sm text-gray-600">3 columns - md:grid-cols-3</span>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Code */}
      <div className="bg-gray-900 text-gray-100 p-6 rounded-xl">
        <h3 className="font-semibold mb-4">🛠️ Responsive Implementation</h3>
        <pre className="text-sm overflow-x-auto">
{`// Responsive grid for file previews
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
  {files.map((file, index) => (
    <div key={index} className="file-preview-card">
      {/* File content */}
    </div>
  ))}
</div>

// Responsive upload area sizing
<div className={\`
  w-full p-4 sm:p-6 md:p-8
  border-2 border-dashed rounded-xl
  transition-all duration-300
\`}>
  {/* Upload content */}
</div>

// Mobile-first button sizing
<button className={\`
  w-full py-3 sm:w-auto sm:px-6 sm:py-2
  bg-blue-600 text-white rounded-lg
\`}>
  Upload Files
</button>`}
        </pre>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Responsive Design Strategy

**📱 Mobile-First Philosophy**
Start with mobile constraints and progressively enhance for larger screens.

**Breakpoint Strategy**
- **Mobile (≤640px)**: Focus on simplicity and large touch targets  
- **Tablet (641-1024px)**: Balance efficiency with touch-friendliness  
- **Desktop (≥1025px)**: Maximize screen real estate and add rich interactions  

### Implementation Details

**Grid System**
\`\`\`tsx
// File preview grid adapts automatically
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {files.map(file => (
    <FilePreviewCard key={file.id} file={file} />
  ))}
</div>
\`\`\`

**Touch Target Optimization**
\`\`\`tsx
// Buttons scale appropriately for each device
<button className="w-full py-3 sm:w-auto sm:px-6 sm:py-2">
  {/* Mobile: Full width, large padding */}
  {/* Desktop: Auto width, compact padding */}
</button>
\`\`\`

**Content Adaptation**
- **Mobile**: Hide non-essential information, focus on core actions  
- **Tablet**: Show moderate detail, balanced information density  
- **Desktop**: Display full information, rich interactions  

### Performance Considerations

**Image Loading**
- Use responsive images with appropriate sizes for each breakpoint  
- Implement lazy loading for file previews  
- Optimize image quality based on screen density  

**Touch Performance**
- Ensure 60fps animations on mobile devices  
- Use hardware acceleration for smooth interactions  
- Debounce rapid touch events  

### Testing Strategy

**Device Testing**
- **iPhone SE (375px)**: Smallest common mobile size  
- **iPad (768px)**: Standard tablet size  
- **MacBook Air (1440px)**: Common laptop resolution  
- **Large Desktop (1920px+)**: Wide screen optimization  

**Feature Testing**
- Drag & drop works on touch devices  
- File selection is accessible on all devices  
- Upload progress is visible on slow connections  
- Error messages are readable on small screens  

💡 **Pro Tip**: Use browser dev tools' device simulation to test responsive behavior during development.
        `
      }
    }
  }
};

// =================== INTEGRATION GUIDE ===================

export const IntegrationGuide: Story = {
  name: '🔧 Integration Examples',
  render: () => (
    <div className="space-y-12 max-w-4xl">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Integration Guide</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Learn how to integrate FileUpload into your React applications with these practical examples.
        </p>
      </div>

      {/* Basic Integration */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">🚀 Basic Integration</h2>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-xl">
          <pre className="text-sm overflow-x-auto">
{`import { FileUpload } from '@astra/ui/components/FileUpload';

export function MyUploadPage() {
  return (
    <div className="container mx-auto p-6">
      <h1>Upload Your Files</h1>
      <FileUpload />
    </div>
  );
}`}
          </pre>
        </div>
      </div>

      {/* Form Integration */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">📋 Form Integration</h2>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-xl">
          <pre className="text-sm overflow-x-auto">
{`import { useState } from 'react';
import { FileUpload } from '@astra/ui/components/FileUpload';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Get uploaded files from localStorage
    const files = JSON.parse(localStorage.getItem('uploadedFiles') || '[]');
    
    // Submit form with files
    console.log('Form data:', formData);
    console.log('Uploaded files:', files);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </div>
      
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>

      <div>
        <label>Attachments</label>
        <FileUpload />
      </div>

      <button type="submit">Send Message</button>
    </form>
  );
}`}
          </pre>
        </div>
      </div>

      {/* Modal Integration */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">🪟 Modal Integration</h2>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-xl">
          <pre className="text-sm overflow-x-auto">
{`import { useState } from 'react';
import { FileUpload } from '@astra/ui/components/FileUpload';
import { Dialog } from '@astra/ui/components/Dialog';

export function UploadModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSave = () => {
    const files = JSON.parse(localStorage.getItem('uploadedFiles') || '[]');
    // Process files
    console.log('Saving files:', files);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Upload Files
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Upload Files</h2>
          <FileUpload />
          <div className="flex justify-end gap-2 mt-6">
            <button 
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-gray-600"
            >
              Cancel
            </button>
            <button 
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Save Files
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
}`}
          </pre>
        </div>
      </div>

      {/* API Integration */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">🌐 API Integration</h2>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-xl">
          <pre className="text-sm overflow-x-auto">
{`import { useState, useEffect } from 'react';
import { FileUpload } from '@astra/ui/components/FileUpload';

export function ApiUploadExample() {
  const [uploadStatus, setUploadStatus] = useState('idle');

  const uploadFiles = async () => {
    setUploadStatus('uploading');
    
    try {
      const files = JSON.parse(localStorage.getItem('uploadedFiles') || '[]');
      
      // Create FormData for file upload
      const formData = new FormData();
      
      // Note: You'll need actual File objects for real upload
      // This example shows the structure
      files.forEach((fileData, index) => {
        // Convert your stored file data back to File objects
        // This would require storing the actual File objects
        // or reconstructing them from your stored data
        formData.append(\`file\${index}\`, fileData);
      });

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setUploadStatus('success');
        // Clear uploaded files after successful upload
        localStorage.removeItem('uploadedFiles');
      } else {
        setUploadStatus('error');
      }
    } catch (error) {
      console.error('Upload failed:', error);
      setUploadStatus('error');
    }
  };

  return (
    <div className="space-y-6">
      <FileUpload />
      
      <div className="flex items-center gap-4">
        <button 
          onClick={uploadFiles}
          disabled={uploadStatus === 'uploading'}
          className="px-6 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          {uploadStatus === 'uploading' ? 'Uploading...' : 'Upload to Server'}
        </button>
        
        {uploadStatus === 'success' && (
          <span className="text-green-600">✅ Upload successful!</span>
        )}
        
        {uploadStatus === 'error' && (
          <span className="text-red-600">❌ Upload failed</span>
        )}
      </div>
    </div>
  );
}`}
          </pre>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-yellow-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-yellow-900 mb-4">💡 Integration Best Practices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-yellow-800 mb-2">File Handling</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Store actual File objects for server upload</li>
              <li>• Validate files both client and server-side</li>
              <li>• Handle upload progress and errors gracefully</li>
              <li>• Clear localStorage after successful upload</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-yellow-800 mb-2">User Experience</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Provide clear upload status feedback</li>
              <li>• Show upload progress for large files</li>
              <li>• Allow users to cancel uploads</li>
              <li>• Handle network interruptions gracefully</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-yellow-800 mb-2">Security</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Validate file types and sizes on server</li>
              <li>• Scan uploaded files for malware</li>
              <li>• Use secure file storage solutions</li>
              <li>• Implement rate limiting for uploads</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-yellow-800 mb-2">Performance</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Implement chunked uploads for large files</li>
              <li>• Use CDN for file delivery</li>
              <li>• Compress images before upload</li>
              <li>• Clean up temporary files regularly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Complete Integration Guide

**🚀 Quick Start**
The simplest way to add FileUpload to your React app:

\`\`\`tsx
import { FileUpload } from '@astra/ui/components/FileUpload';

function App() {
  return <FileUpload />;
}
\`\`\`

**📋 Form Integration Pattern**
When integrating with forms, FileUpload automatically saves to localStorage. Access uploaded files like this:

\`\`\`tsx
const handleSubmit = (formData) => {
  const uploadedFiles = JSON.parse(
    localStorage.getItem('uploadedFiles') || '[]'
  );
  
  // Process form + files together
  submitData({ ...formData, files: uploadedFiles });
};
\`\`\`

**🌐 Server Upload Integration**
For real server uploads, you'll need to convert the stored file data back to File objects:

\`\`\`tsx
// Store actual File objects (not just metadata)
const [actualFiles, setActualFiles] = useState<File[]>([]);

// Use FileUpload with custom file handler
const handleFileAdd = (newFiles: File[]) => {
  setActualFiles(prev => [...prev, ...newFiles]);
};

// Upload to server
const uploadToServer = async () => {
  const formData = new FormData();
  actualFiles.forEach((file, index) => {
    formData.append(\`file\${index}\`, file);
  });
  
  await fetch('/api/upload', {
    method: 'POST',
    body: formData
  });
};
\`\`\`

**🔒 Security Considerations**
Always validate files on both client and server:

\`\`\`tsx
// Server-side validation (Node.js/Express example)
app.post('/upload', upload.array('files'), (req, res) => {
  for (const file of req.files) {
    // Check file type
    if (!allowedTypes.includes(file.mimetype)) {
      return res.status(400).json({ error: 'Invalid file type' });
    }
    
    // Check file size
    if (file.size > MAX_SIZE) {
      return res.status(400).json({ error: 'File too large' });
    }
    
    // Scan for malware (use antivirus service)
    // Store securely with random filename
  }
});
\`\`\`

**⚡ Performance Optimization**
For production applications:

1. **Chunked Uploads**: Split large files into chunks
2. **Progress Tracking**: Show real upload progress  
3. **Retry Logic**: Handle network failures gracefully
4. **Background Upload**: Continue uploads when page changes
5. **Compression**: Compress images before upload

### Common Integration Patterns

**Modal Upload**: Show FileUpload in a dialog/modal  
**Inline Upload**: Embed directly in forms or content areas  
**Batch Processing**: Handle multiple file operations  
**Preview Integration**: Show uploaded files in galleries  
**Progress Tracking**: Display real-time upload progress  

💡 **Pro Tip**: For production apps, consider using dedicated file upload services like AWS S3, Cloudinary, or Uploadcare for better performance and security.
        `
      }
    }
  }
};
