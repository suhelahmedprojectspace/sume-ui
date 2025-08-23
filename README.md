#🌌 Sumi UI
_**Sumi ui is a sleek, modern, and customizable component library built with React and Tailwind CSS. Designed for speed, accessibility, and developer experience, Astra helps you build consistent and beautiful user interfaces effortlessly.**_



## 🚀 Features
_⚡ Blazing Fast: Lightweight and performance-optimized.
🎨 Themeable: Easily customizable with Tailwind CSS and CSS variables.
🧩 Modular Components: Use only what you need.
♿ Accessible: Follows WAI-ARIA standards.
💅 Beautiful by Default: Minimal and elegant design system.
📦 Tree-shakable: Optimized for modern bundlers.
📦 Installationh_

```bash
npm install @sume/ui
```

### 🎨 Usage
```bash
import { Button, Card, Accordion } from '@sume/ui';

// Import specific components directly
import { Button } from '@sume/ui/components/button';
import { Accordion } from '@sume/ui/components/accordion';
```

### Examples
```bash
import '@sume/ui/styles.css';
Basic Example
import React from 'react';
import { Button, Card, Accordion } from '@sume/ui';
import '@sume/ui/styles.css';

function App() {
return (
<div className="p-8">
<Card>
<h1>Welcome to Sume UI</h1>
<Button variant="primary">Get Started</Button>

text
    <Accordion>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Component Library</Accordion.Trigger>
        <Accordion.Content>
          A comprehensive set of React components for modern web applications.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  </Card>
</div>
);
}

export default App;
```

## 🎯 Available Components
 **Accordion** - Collapsible content sections
 **Avatar** - User profile images and initials
 **Badge** - Status and category indicators
**Button** - Interactive buttons with variants
**Card** - Content containers
**Carousel** - Image and content sliders
**CodeBlock**  - Syntax-highlighted code display
**Dropdown** - Contextual menus
**FileUpload** - File selection and upload
**Input** - Text input fields
**KeybabMenu** - Three-dot action menus
**Modal** - Dialog overlays
**Navbar**  - Navigation headers
**ProgressBar** - Loading and progress indicators
**Sidebar** - Navigation sidebars
**StepProgressBar** - Multi-step progress indicators
**TextArea** - Multi-line text input
  
## 🎨 Styling
This library uses Tailwind CSS v4. The components come pre-styled but can be customized:


<Button className="bg-purple-500 hover:bg-purple-600">
Custom Button
</Button>
